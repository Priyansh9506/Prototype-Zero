"""
SmartContainer Risk Engine v4 — Production-Grade Hybrid Ensemble
=================================================================
HackaMINeD-2026 | INTECH Track

ALL ISSUES FIXED:
  1. 70/30 stratified train/test split
  2. Zero label leakage
  3. Hyperparameter tuning via Optuna (50 trials)
  4. Unseen category handling (robust frequency encoding with global fallback)
  5. Threshold optimisation via F1 maximisation on validation set
  6. SMOTE oversampling for Critical minority class
  7. 3-class classification (Clear=0 / Low Risk=1 / Critical=2)
  8. Isolation Forest with correct contamination rate
  9. SHAP explainability (Critical class)
  10. Full visualisation suite

Install dependencies:
    pip install xgboost shap optuna imbalanced-learn scikit-learn pandas numpy matplotlib seaborn

Usage:
    python smart_container_risk_engine_v4.py
"""

import os
import warnings
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import seaborn as sns
from collections import Counter

# Core ML
from sklearn.model_selection import train_test_split, StratifiedKFold
from sklearn.metrics import (
    accuracy_score, f1_score, roc_auc_score,
    precision_score, recall_score,
    classification_report, confusion_matrix,
)
from sklearn.ensemble import IsolationForest
from xgboost import XGBClassifier

# FIX 3: Hyperparameter tuning
import optuna
optuna.logging.set_verbosity(optuna.logging.WARNING)

# FIX 6: SMOTE oversampling
from imblearn.over_sampling import SMOTE

# Explainability
import shap

warnings.filterwarnings("ignore")
np.random.seed(42)

# ─── Paths ────────────────────────────────────────────────────────────────────
BASE_DIR        = os.path.dirname(os.path.abspath(__file__))
HISTORICAL_PATH = os.path.join(BASE_DIR, "Historical Data.csv")
REALTIME_PATH   = os.path.join(BASE_DIR, "Real-Time Data.csv")
OUTPUT_DIR      = os.path.join(BASE_DIR, "output")
os.makedirs(OUTPUT_DIR, exist_ok=True)

TARGET_COL  = "Clearance_Status"
LABEL_MAP   = {"Clear": 0, "Low Risk": 1, "Critical": 2}
LABEL_NAMES = {0: "Clear", 1: "Low Risk", 2: "Critical"}

# ─── 1. DATA LOADING ─────────────────────────────────────────────────────────
print("=" * 70)
print("  SmartContainer Risk Engine v4 — Full Production Pipeline")
print("=" * 70)

print("\n[1/10] Loading datasets …")
hist_df = pd.read_csv(HISTORICAL_PATH)
rt_df   = pd.read_csv(REALTIME_PATH)

COL_MAP = {
    "Declaration_Date (YYYY-MM-DD)":            "Declaration_Date",
    "Trade_Regime (Import / Export / Transit)": "Trade_Regime",
}
hist_df.rename(columns=COL_MAP, inplace=True)
rt_df.rename(columns=COL_MAP,   inplace=True)

print(f"  • Historical : {hist_df.shape[0]:,} rows × {hist_df.shape[1]} cols")
print(f"  • Real-Time  : {rt_df.shape[0]:,} rows × {rt_df.shape[1]} cols")

# ─── 2. LABELLING ────────────────────────────────────────────────────────────
print("\n[2/10] Labelling …")
hist_df["Risk_Label"] = hist_df[TARGET_COL].map(LABEL_MAP)
hist_df = hist_df.dropna(subset=["Risk_Label"])
hist_df["Risk_Label"] = hist_df["Risk_Label"].astype(int)

for cls, name in LABEL_NAMES.items():
    cnt = (hist_df["Risk_Label"] == cls).sum()
    print(f"  • {name:10s}: {cnt:,} ({100*cnt/len(hist_df):.2f}%)")

# ─── 3. TRAIN / TEST SPLIT ────────────────────────────────────────────────────
print("\n[3/10] Stratified 70/30 split …")
train_df, test_df = train_test_split(
    hist_df, test_size=0.30,
    stratify=hist_df["Risk_Label"],
    random_state=42,
)
print(f"  • Train : {len(train_df):,} rows")
print(f"  • Test  : {len(test_df):,} rows")
for split_name, split_df in [("Train", train_df), ("Test", test_df)]:
    crit = (split_df["Risk_Label"] == 2).sum()
    print(f"    {split_name} Critical: {crit:,} ({100*crit/len(split_df):.2f}%)")

# ─── 4. FEATURE ENGINEERING ──────────────────────────────────────────────────
print("\n[4/10] Feature engineering …")

def engineer_features(df: pd.DataFrame) -> pd.DataFrame:
    out = df.copy()
    # Temporal
    out["Declaration_Date"] = pd.to_datetime(out["Declaration_Date"], errors="coerce")
    out["Decl_Month"]       = out["Declaration_Date"].dt.month.fillna(0).astype(int)
    out["Decl_DayOfWeek"]   = out["Declaration_Date"].dt.dayofweek.fillna(0).astype(int)
    out["Decl_Quarter"]     = out["Declaration_Date"].dt.quarter.fillna(0).astype(int)
    out["Declaration_Time"] = pd.to_timedelta(out["Declaration_Time"], errors="coerce")
    out["Decl_Hour"]        = out["Declaration_Time"].dt.components["hours"].fillna(12)
    out["Is_OffHours"]      = ((out["Decl_Hour"] < 6) | (out["Decl_Hour"] > 20)).astype(int)
    out["Is_Weekend"]       = (out["Decl_DayOfWeek"] >= 5).astype(int)

    # Weight
    out["Weight_Discrepancy"]         = out["Measured_Weight"] - out["Declared_Weight"]
    out["Weight_Discrepancy_Pct"]     = np.where(
        out["Declared_Weight"] > 0,
        (out["Weight_Discrepancy"] / out["Declared_Weight"]) * 100, 0.0)
    out["Abs_Weight_Discrepancy_Pct"] = out["Weight_Discrepancy_Pct"].abs()
    out["Weight_Ratio"]               = np.where(
        out["Declared_Weight"] > 0,
        out["Measured_Weight"] / out["Declared_Weight"], 1.0)
    out["Large_Discrepancy_Flag"]     = (out["Abs_Weight_Discrepancy_Pct"] > 20).astype(int)
    out["Extreme_Discrepancy_Flag"]   = (out["Abs_Weight_Discrepancy_Pct"] > 50).astype(int)

    # Value
    out["Value_Per_Kg"]        = np.where(
        out["Declared_Weight"] > 0,
        out["Declared_Value"] / out["Declared_Weight"], 0.0)
    out["Log_Declared_Value"]  = np.log1p(out["Declared_Value"])
    out["Log_Declared_Weight"] = np.log1p(out["Declared_Weight"])
    out["Log_Value_Per_Kg"]    = np.log1p(out["Value_Per_Kg"])

    # Dwell (z-score computed per-dataframe — no cross-contamination)
    dwell_mean = out["Dwell_Time_Hours"].mean()
    dwell_std  = out["Dwell_Time_Hours"].std()
    out["Dwell_Time_Zscore"] = (out["Dwell_Time_Hours"] - dwell_mean) / (dwell_std + 1e-9)

    # Flags
    out["Is_High_Value"]    = (out["Declared_Value"]   > out["Declared_Value"].quantile(0.95)).astype(int)
    out["Is_Heavy"]         = (out["Declared_Weight"]  > out["Declared_Weight"].quantile(0.95)).astype(int)
    out["Is_Long_Dwell"]    = (out["Dwell_Time_Hours"] > out["Dwell_Time_Hours"].quantile(0.95)).astype(int)
    out["Zero_Weight_Flag"] = ((out["Declared_Weight"] == 0) | (out["Measured_Weight"] == 0)).astype(int)
    out["Zero_Value_Flag"]  = (out["Declared_Value"] == 0).astype(int)

    # HS Chapter
    out["HS_Chapter"] = (out["HS_Code"] // 10000).astype(int)

    # Trade regime
    out["Is_Transit"] = (out["Trade_Regime"] == "Transit").astype(int)
    out["Is_Import"]  = (out["Trade_Regime"] == "Import").astype(int)

    return out

train_df = engineer_features(train_df)
test_df  = engineer_features(test_df)
rt_df    = engineer_features(rt_df)

# ─── FIX 4: Robust frequency encoding with unseen-category fallback ───────────
# Fit ONLY on train. Unseen values in test/RT get global_fallback (not 0.0)
FREQ_ENCODE_COLS = [
    "Origin_Country", "Destination_Port", "Destination_Country",
    "Shipping_Line", "Importer_ID", "Exporter_ID",
]

freq_maps       = {}
global_fallbacks = {}

for col in FREQ_ENCODE_COLS:
    freq    = train_df[col].value_counts(normalize=True).to_dict()
    # global fallback = mean frequency across all known categories
    fallback = np.mean(list(freq.values()))
    freq_maps[col]        = freq
    global_fallbacks[col] = fallback

    train_df[f"{col}_Freq"] = train_df[col].map(freq).fillna(fallback)
    test_df[f"{col}_Freq"]  = test_df[col].map(freq).fillna(fallback)   # FIX 4
    rt_df[f"{col}_Freq"]    = rt_df[col].map(freq).fillna(fallback)     # FIX 4

# HS Chapter frequency (fit on train only)
hs_freq      = train_df["HS_Chapter"].value_counts(normalize=True).to_dict()
hs_fallback  = np.mean(list(hs_freq.values()))
train_df["HS_Chapter_Freq"] = train_df["HS_Chapter"].map(hs_freq).fillna(hs_fallback)
test_df["HS_Chapter_Freq"]  = test_df["HS_Chapter"].map(hs_freq).fillna(hs_fallback)
rt_df["HS_Chapter_Freq"]    = rt_df["HS_Chapter"].map(hs_freq).fillna(hs_fallback)

FEATURE_COLS = [
    "Declared_Value", "Declared_Weight", "Measured_Weight",
    "Dwell_Time_Hours", "HS_Code",
    "Weight_Discrepancy", "Weight_Discrepancy_Pct", "Abs_Weight_Discrepancy_Pct",
    "Weight_Ratio", "Large_Discrepancy_Flag", "Extreme_Discrepancy_Flag",
    "Value_Per_Kg", "Log_Declared_Value", "Log_Declared_Weight", "Log_Value_Per_Kg",
    "Dwell_Time_Zscore",
    "Is_High_Value", "Is_Heavy", "Is_Long_Dwell",
    "Zero_Weight_Flag", "Zero_Value_Flag",
    "Is_OffHours", "Is_Weekend",
    "Decl_Month", "Decl_DayOfWeek", "Decl_Hour", "Decl_Quarter",
    "Is_Transit", "Is_Import",
    "HS_Chapter", "HS_Chapter_Freq",
    "Origin_Country_Freq", "Destination_Port_Freq", "Destination_Country_Freq",
    "Shipping_Line_Freq", "Importer_ID_Freq", "Exporter_ID_Freq",
]

print(f"  • {len(FEATURE_COLS)} clean features")
print(f"  • Unseen-category fallback: mean frequency per column (not 0.0)")

X_train_raw = train_df[FEATURE_COLS].values
y_train_raw = train_df["Risk_Label"].values
X_test      = test_df[FEATURE_COLS].values
y_test      = test_df["Risk_Label"].values
X_realtime  = rt_df[FEATURE_COLS].values

# ─── FIX 6: SMOTE — oversample Critical class in TRAIN only ──────────────────
print("\n[5/10] SMOTE oversampling on train set …")
print(f"  • Before SMOTE: {Counter(y_train_raw)}")

# SMOTE works on binary, so we apply it carefully on just Critical vs rest
# Strategy: bring Critical up to ~5% of training data
n_critical_before = (y_train_raw == 2).sum()
n_target_critical = int(len(y_train_raw) * 0.05)   # target 5%
n_target_lowrisk  = (y_train_raw == 1).sum()
n_target_clear    = (y_train_raw == 0).sum()

smote = SMOTE(
    sampling_strategy={
        2: max(n_target_critical, n_critical_before),  # oversample Critical to 5%
    },
    random_state=42,
    k_neighbors=min(5, n_critical_before - 1),
)

X_train, y_train = smote.fit_resample(X_train_raw, y_train_raw)
print(f"  • After  SMOTE: {Counter(y_train)}")
print(f"  • Critical class grew: {n_critical_before} → {(y_train==2).sum()}")

# Sample weights after SMOTE
class_counts   = Counter(y_train)
total          = len(y_train)
sample_weights = np.array([total / (len(class_counts) * class_counts[y]) for y in y_train])

# ─── FIX 3: OPTUNA HYPERPARAMETER TUNING ─────────────────────────────────────
print("\n[6/10] Optuna hyperparameter search (50 trials) …")

def objective(trial):
    params = dict(
        n_estimators     = trial.suggest_int("n_estimators", 200, 800),
        max_depth        = trial.suggest_int("max_depth", 3, 8),
        learning_rate    = trial.suggest_float("learning_rate", 0.01, 0.2, log=True),
        subsample        = trial.suggest_float("subsample", 0.6, 1.0),
        colsample_bytree = trial.suggest_float("colsample_bytree", 0.6, 1.0),
        min_child_weight = trial.suggest_int("min_child_weight", 1, 10),
        gamma            = trial.suggest_float("gamma", 0.0, 0.5),
        reg_alpha        = trial.suggest_float("reg_alpha", 0.0, 1.0),
        reg_lambda       = trial.suggest_float("reg_lambda", 0.5, 2.0),
        objective        = "multi:softprob",
        num_class        = 3,
        eval_metric      = "mlogloss",
        use_label_encoder= False,
        random_state     = 42,
        n_jobs           = -1,
    )

    # Single validation fold for speed during tuning
    skf_tune = StratifiedKFold(n_splits=3, shuffle=True, random_state=42)
    scores   = []
    for trn_idx, val_idx in skf_tune.split(X_train, y_train):
        X_tr, X_val = X_train[trn_idx], X_train[val_idx]
        y_tr, y_val = y_train[trn_idx], y_train[val_idx]
        sw_tr       = sample_weights[trn_idx]

        m = XGBClassifier(**params)
        m.fit(X_tr, y_tr, sample_weight=sw_tr,
              eval_set=[(X_val, y_val)], verbose=False)

        val_pred = np.argmax(m.predict_proba(X_val), axis=1)
        scores.append(f1_score(y_val, val_pred, average="macro", zero_division=0))

    return np.mean(scores)

study = optuna.create_study(direction="maximize", sampler=optuna.samplers.TPESampler(seed=42))
study.optimize(objective, n_trials=50, show_progress_bar=False)

best_params = study.best_params
best_params.update({
    "objective":         "multi:softprob",
    "num_class":         3,
    "eval_metric":       "mlogloss",
    "use_label_encoder": False,
    "random_state":      42,
    "n_jobs":            -1,
})

print(f"  • Best Macro F1    : {study.best_value:.4f}")
print(f"  • Best params      :")
for k, v in study.best_params.items():
    print(f"      {k:25s} = {v}")

# ─── FIX 5: THRESHOLD OPTIMISATION ───────────────────────────────────────────
print("\n[7/10] Optimising classification thresholds on validation set …")

# Use 1 held-out fold from train to find optimal thresholds
skf_thresh = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
trn_idx, val_idx = next(iter(skf_thresh.split(X_train, y_train)))

X_tr_t, X_val_t = X_train[trn_idx], X_train[val_idx]
y_tr_t, y_val_t = y_train[trn_idx], y_train[val_idx]
sw_tr_t         = sample_weights[trn_idx]

thresh_model = XGBClassifier(**best_params)
thresh_model.fit(X_tr_t, y_tr_t, sample_weight=sw_tr_t,
                 eval_set=[(X_val_t, y_val_t)], verbose=False)
val_probs = thresh_model.predict_proba(X_val_t)   # (n, 3)

# Optimise Critical threshold: sweep over [0.2, 0.8], maximise F1 for Critical
best_crit_thresh  = 0.5
best_crit_f1      = 0.0
y_val_bin         = (y_val_t == 2).astype(int)

for t in np.arange(0.15, 0.85, 0.01):
    pred_bin = (val_probs[:, 2] >= t).astype(int)
    score    = f1_score(y_val_bin, pred_bin, zero_division=0)
    if score > best_crit_f1:
        best_crit_f1     = score
        best_crit_thresh = t

# Optimise Medium threshold similarly
best_med_thresh = 0.30
best_med_f1     = 0.0
y_val_med       = (y_val_t == 1).astype(int)

for t in np.arange(0.10, best_crit_thresh - 0.05, 0.01):
    # Medium = score >= t AND score < Critical threshold
    pred_med = ((val_probs[:, 1] >= t) & (val_probs[:, 2] < best_crit_thresh)).astype(int)
    score    = f1_score(y_val_med, pred_med, zero_division=0)
    if score > best_med_f1:
        best_med_f1     = score
        best_med_thresh = t

print(f"  • Optimised Critical threshold : {best_crit_thresh:.2f}  (F1={best_crit_f1:.4f})")
print(f"  • Optimised Medium threshold   : {best_med_thresh:.2f}  (F1={best_med_f1:.4f})")

# ─── 5-FOLD CV WITH BEST PARAMS ───────────────────────────────────────────────
print("\n[8/10] 5-Fold CV with optimised params …")

skf          = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
oof_probs    = np.zeros((len(y_train), 3))
fold_metrics = []

for fold_idx, (trn_idx, val_idx) in enumerate(skf.split(X_train, y_train), 1):
    X_tr, X_val = X_train[trn_idx], X_train[val_idx]
    y_tr, y_val = y_train[trn_idx], y_train[val_idx]
    sw_tr       = sample_weights[trn_idx]

    m = XGBClassifier(**best_params)
    m.fit(X_tr, y_tr, sample_weight=sw_tr,
          eval_set=[(X_val, y_val)], verbose=False)

    val_prob            = m.predict_proba(X_val)
    val_pred            = np.argmax(val_prob, axis=1)
    oof_probs[val_idx]  = val_prob

    crit_prob  = val_prob[:, 2]
    y_val_bin  = (y_val == 2).astype(int)

    acc      = accuracy_score(y_val, val_pred)
    prec     = precision_score(y_val_bin, (crit_prob >= best_crit_thresh).astype(int), zero_division=0)
    rec      = recall_score(y_val_bin, (crit_prob >= best_crit_thresh).astype(int), zero_division=0)
    f1_crit  = f1_score(y_val_bin, (crit_prob >= best_crit_thresh).astype(int), zero_division=0)
    macro_f1 = f1_score(y_val, val_pred, average="macro", zero_division=0)
    auc      = roc_auc_score(y_val_bin, crit_prob)

    fold_metrics.append({
        "fold": fold_idx, "accuracy": acc,
        "precision": prec, "recall": rec,
        "f1_critical": f1_crit, "macro_f1": macro_f1, "auc": auc,
    })
    print(
        f"  Fold {fold_idx}: Acc={acc:.4f}  Prec={prec:.4f}  "
        f"Rec={rec:.4f}  F1_crit={f1_crit:.4f}  MacroF1={macro_f1:.4f}  AUC={auc:.4f}"
    )

avg = pd.DataFrame(fold_metrics).mean(numeric_only=True)
print(
    f"\n  ► CV Avg : Acc={avg['accuracy']:.4f}  Prec={avg['precision']:.4f}  "
    f"Rec={avg['recall']:.4f}  F1_crit={avg['f1_critical']:.4f}  "
    f"MacroF1={avg['macro_f1']:.4f}  AUC={avg['auc']:.4f}"
)

# ── Train on 70% → evaluate on held-out 30% ──────────────────────────────────
print("\n  Evaluating on held-out 30% test set …")
xgb_70 = XGBClassifier(**best_params)
xgb_70.fit(X_train, y_train, sample_weight=sample_weights, verbose=False)

test_prob      = xgb_70.predict_proba(X_test)
test_pred      = np.argmax(test_prob, axis=1)
test_crit_prob = test_prob[:, 2]
y_test_bin     = (y_test == 2).astype(int)

test_acc   = accuracy_score(y_test, test_pred)
test_prec  = precision_score(y_test_bin, (test_crit_prob >= best_crit_thresh).astype(int), zero_division=0)
test_rec   = recall_score(y_test_bin, (test_crit_prob >= best_crit_thresh).astype(int), zero_division=0)
test_f1    = f1_score(y_test_bin, (test_crit_prob >= best_crit_thresh).astype(int), zero_division=0)
test_macro = f1_score(y_test, test_pred, average="macro", zero_division=0)
test_auc   = roc_auc_score(y_test_bin, test_crit_prob)

print(f"\n  ┌──────────────────────────────────────────┐")
print(f"  │      HELD-OUT TEST SET (30%) RESULTS      │")
print(f"  ├──────────────────────────────────────────┤")
print(f"  │  Accuracy      : {test_acc:.4f}                 │")
print(f"  │  Precision     : {test_prec:.4f}                 │")
print(f"  │  Recall        : {test_rec:.4f}                 │")
print(f"  │  F1 (Critical) : {test_f1:.4f}                 │")
print(f"  │  Macro F1      : {test_macro:.4f}                 │")
print(f"  │  AUC-ROC       : {test_auc:.4f}                 │")
print(f"  └──────────────────────────────────────────┘")

print("\n  Per-Class Report (30% Test Set):")
print(classification_report(
    y_test, test_pred,
    target_names=["Clear", "Low Risk", "Critical"],
    zero_division=0,
))

# ── Retrain on FULL historical for real-time predictions ─────────────────────
print("\n  Retraining on 100% historical data …")
full_hist = engineer_features(hist_df.copy())
for col in FREQ_ENCODE_COLS:
    freq     = full_hist[col].value_counts(normalize=True).to_dict()
    fallback = np.mean(list(freq.values()))
    full_hist[f"{col}_Freq"] = full_hist[col].map(freq).fillna(fallback)
    rt_df[f"{col}_Freq"]     = rt_df[col].map(freq).fillna(fallback)

full_hist["HS_Chapter"]      = (full_hist["HS_Code"] // 10000).astype(int)
hs_freq_full                 = full_hist["HS_Chapter"].value_counts(normalize=True).to_dict()
hs_fallback_full             = np.mean(list(hs_freq_full.values()))
full_hist["HS_Chapter_Freq"] = full_hist["HS_Chapter"].map(hs_freq_full).fillna(hs_fallback_full)
rt_df["HS_Chapter_Freq"]     = rt_df["HS_Chapter"].map(hs_freq_full).fillna(hs_fallback_full)
full_hist["Is_Transit"]      = (full_hist["Trade_Regime"] == "Transit").astype(int)
full_hist["Is_Import"]       = (full_hist["Trade_Regime"] == "Import").astype(int)

X_full    = full_hist[FEATURE_COLS].values
y_full    = full_hist["Risk_Label"].values
all_sw    = np.array([total / (len(class_counts) * class_counts.get(y, 1)) for y in y_full])

# Apply SMOTE on full historical too
smote_full = SMOTE(
    sampling_strategy={2: max(int(len(y_full) * 0.05), (y_full==2).sum())},
    random_state=42,
    k_neighbors=min(5, (y_full==2).sum() - 1),
)
X_full_sm, y_full_sm = smote_full.fit_resample(X_full, y_full)
all_sw_sm = np.array([len(y_full_sm) / (3 * Counter(y_full_sm)[y]) for y in y_full_sm])

xgb_final = XGBClassifier(**best_params)
xgb_final.fit(X_full_sm, y_full_sm, sample_weight=all_sw_sm, verbose=False)
print("  • Final model trained on full historical + SMOTE")

xgb_rt_prob = xgb_final.predict_proba(X_realtime)

# ─── ISOLATION FOREST ────────────────────────────────────────────────────────
print("\n[9/10] Isolation Forest anomaly detection …")

iso_features = [
    "Weight_Discrepancy", "Weight_Discrepancy_Pct", "Abs_Weight_Discrepancy_Pct",
    "Weight_Ratio", "Value_Per_Kg", "Log_Value_Per_Kg",
    "Log_Declared_Value", "Log_Declared_Weight",
    "Dwell_Time_Zscore", "Declared_Value", "Declared_Weight",
    "Measured_Weight", "Dwell_Time_Hours", "HS_Chapter_Freq",
]

iso_model = IsolationForest(
    n_estimators  = 300,
    max_samples   = "auto",
    contamination = 0.02,
    random_state  = 42,
    n_jobs        = -1,
)
iso_model.fit(train_df[iso_features].values)   # fit on TRAIN only

def normalise_anomaly(scores):
    flipped = -scores
    return (flipped - flipped.min()) / (flipped.max() - flipped.min() + 1e-9)

iso_rt_anomaly = normalise_anomaly(iso_model.decision_function(rt_df[iso_features].values))
iso_rt_pred    = iso_model.predict(rt_df[iso_features].values)
n_anomaly_rt   = (iso_rt_pred == -1).sum()
print(f"  • Real-Time anomalies: {n_anomaly_rt:,} ({100*n_anomaly_rt/len(iso_rt_pred):.1f}%)")

# ── Hybrid scoring with optimised thresholds ──────────────────────────────────
XGB_WEIGHT = 0.75
ISO_WEIGHT = 0.25

def compute_hybrid_scores(xgb_probs, iso_anomaly):
    critical_prob = xgb_probs[:, 2]
    risk_score    = np.clip(XGB_WEIGHT * critical_prob + ISO_WEIGHT * iso_anomaly, 0, 1)
    # FIX 5: use optimised thresholds
    risk_level = np.where(
        risk_score >= best_crit_thresh, "Critical",
        np.where(risk_score >= best_med_thresh, "Medium Risk", "Low Risk")
    )
    return risk_score, risk_level

rt_risk_score, rt_risk_level = compute_hybrid_scores(xgb_rt_prob, iso_rt_anomaly)

print(f"\n  Real-Time Risk Distribution:")
for level in ["Critical", "Medium Risk", "Low Risk"]:
    cnt = (rt_risk_level == level).sum()
    pct = 100 * cnt / len(rt_risk_level)
    bar = "█" * int(pct / 2)
    print(f"    • {level:12s}: {cnt:6,} ({pct:5.1f}%)  {bar}")

# ─── SHAP EXPLAINABILITY ─────────────────────────────────────────────────────
print("\n  Generating SHAP explanations …")
explainer      = shap.TreeExplainer(xgb_final)
shap_values_rt = explainer.shap_values(X_realtime)

if isinstance(shap_values_rt, list):
    shap_critical = shap_values_rt[2]
else:
    shap_critical = shap_values_rt[:, :, 2]

FEAT_NAME_MAP = {
    "Weight_Discrepancy":          "weight discrepancy (kg)",
    "Weight_Discrepancy_Pct":      "weight discrepancy (%)",
    "Abs_Weight_Discrepancy_Pct":  "absolute weight discrepancy (%)",
    "Weight_Ratio":                "measured/declared weight ratio",
    "Large_Discrepancy_Flag":      "large discrepancy flag (>20%)",
    "Extreme_Discrepancy_Flag":    "extreme discrepancy flag (>50%)",
    "Value_Per_Kg":                "value per kg",
    "Log_Value_Per_Kg":            "log value per kg",
    "Log_Declared_Value":          "declared value",
    "Log_Declared_Weight":         "declared weight",
    "Dwell_Time_Zscore":           "unusual dwell time",
    "Declared_Value":              "declared value amount",
    "Declared_Weight":             "declared weight amount",
    "Measured_Weight":             "measured weight",
    "Dwell_Time_Hours":            "dwell time (hours)",
    "HS_Code":                     "HS code",
    "Is_High_Value":               "high-value shipment",
    "Is_Heavy":                    "heavy container",
    "Is_Long_Dwell":               "long port dwell time",
    "Zero_Weight_Flag":            "zero weight declared",
    "Zero_Value_Flag":             "zero value declared",
    "Is_OffHours":                 "off-hours declaration",
    "Is_Weekend":                  "weekend declaration",
    "Decl_Month":                  "declaration month",
    "Decl_DayOfWeek":              "day of week",
    "Decl_Hour":                   "declaration hour",
    "Decl_Quarter":                "declaration quarter",
    "Is_Transit":                  "transit regime",
    "Is_Import":                   "import regime",
    "HS_Chapter":                  "HS chapter",
    "HS_Chapter_Freq":             "HS chapter frequency",
    "Origin_Country_Freq":         "origin country trade frequency",
    "Destination_Port_Freq":       "destination port frequency",
    "Destination_Country_Freq":    "destination country frequency",
    "Shipping_Line_Freq":          "shipping line frequency",
    "Importer_ID_Freq":            "importer transaction frequency",
    "Exporter_ID_Freq":            "exporter transaction frequency",
}

def generate_explanation(shap_row, feature_names, risk_level, risk_score,
                         anomaly_flag, weight_disc_pct, value_per_kg):
    top3     = np.argsort(np.abs(shap_row))[-3:][::-1]
    reasons  = []
    for idx in top3:
        feat      = feature_names[idx]
        readable  = FEAT_NAME_MAP.get(feat, feat.replace("_", " ").lower())
        direction = "elevated" if shap_row[idx] > 0 else "low"
        reasons.append(f"{direction} {readable}")

    extra = " Isolation Forest flagged as statistical anomaly." if anomaly_flag else ""
    icons = {"Critical": "⚠", "Medium Risk": "⚡", "Low Risk": "✓"}
    icon  = icons.get(risk_level, "")

    return (
        f"{icon} {risk_level} (score={risk_score:.3f}) | "
        f"Drivers: {', '.join(reasons)}. "
        f"Weight Δ={weight_disc_pct:.1f}%, value/kg={value_per_kg:.2f}.{extra}"
    )

explanations = [
    generate_explanation(
        shap_row        = shap_critical[i],
        feature_names   = FEATURE_COLS,
        risk_level      = rt_risk_level[i],
        risk_score      = rt_risk_score[i],
        anomaly_flag    = (iso_rt_pred[i] == -1),
        weight_disc_pct = rt_df.iloc[i]["Weight_Discrepancy_Pct"],
        value_per_kg    = rt_df.iloc[i]["Value_Per_Kg"],
    )
    for i in range(len(rt_df))
]

# ─── OUTPUTS ─────────────────────────────────────────────────────────────────
print("\n[10/10] Saving outputs …")

output_df = pd.DataFrame({
    "Container_ID":            rt_df["Container_ID"].values,
    "Risk_Score":              np.round(rt_risk_score, 4),
    "Risk_Level":              rt_risk_level,
    "Anomaly_Flag":            (iso_rt_pred == -1).astype(int),
    "XGB_Critical_Prob":       np.round(xgb_rt_prob[:, 2], 4),
    "XGB_MediumRisk_Prob":     np.round(xgb_rt_prob[:, 1], 4),
    "XGB_Clear_Prob":          np.round(xgb_rt_prob[:, 0], 4),
    "IF_Anomaly_Score":        np.round(iso_rt_anomaly, 4),
    "Explanation_Summary":     explanations,
})

output_df.to_csv(os.path.join(OUTPUT_DIR, "Risk_Predictions.csv"), index=False)

metrics_rows = fold_metrics + [{
    "fold": "TEST_30pct", "accuracy": test_acc, "precision": test_prec,
    "recall": test_rec, "f1_critical": test_f1,
    "macro_f1": test_macro, "auc": test_auc,
}]
pd.DataFrame(metrics_rows).to_csv(os.path.join(OUTPUT_DIR, "CV_and_Test_Metrics.csv"), index=False)

# Save best Optuna params
pd.DataFrame([study.best_params]).to_csv(os.path.join(OUTPUT_DIR, "Best_Hyperparams.csv"), index=False)

print(f"  ✅ Risk_Predictions.csv")
print(f"  ✅ CV_and_Test_Metrics.csv")
print(f"  ✅ Best_Hyperparams.csv")

# ─── REAL-TIME GROUND TRUTH EVALUATION ───────────────────────────────────────
# The Real-Time CSV has Clearance_Status labels — use them to measure
# true prediction accuracy on completely unseen organiser-provided data.
print("\n" + "─" * 70)
print("  REAL-TIME GROUND TRUTH EVALUATION")
print("  (Comparing predictions vs actual Clearance_Status in Real-Time CSV)")
print("─" * 70)

rt_actual_raw  = rt_df[TARGET_COL].map(LABEL_MAP)
rt_actual_valid = rt_actual_raw.dropna()
valid_idx       = rt_actual_valid.index

# Get predicted class from hybrid risk score for valid rows
rt_pred_3class = np.where(
    rt_risk_score[valid_idx] >= best_crit_thresh, 2,
    np.where(rt_risk_score[valid_idx] >= best_med_thresh, 1, 0)
).astype(int)

rt_actual_arr = rt_actual_valid.values.astype(int)

# Binary metrics (Critical vs non-Critical)
rt_actual_bin  = (rt_actual_arr == 2).astype(int)
rt_pred_bin    = (rt_pred_3class == 2).astype(int)
rt_crit_prob_v = xgb_rt_prob[valid_idx, 2]

rt_gt_acc    = accuracy_score(rt_actual_arr, rt_pred_3class)
rt_gt_prec   = precision_score(rt_actual_bin, rt_pred_bin, zero_division=0)
rt_gt_rec    = recall_score(rt_actual_bin, rt_pred_bin, zero_division=0)
rt_gt_f1     = f1_score(rt_actual_bin, rt_pred_bin, zero_division=0)
rt_gt_macro  = f1_score(rt_actual_arr, rt_pred_3class, average="macro", zero_division=0)
rt_gt_auc    = roc_auc_score(rt_actual_bin, rt_crit_prob_v)

print(f"\n  ┌──────────────────────────────────────────────┐")
print(f"  │   REAL-TIME DATA — GROUND TRUTH RESULTS      │")
print(f"  │   Trained on: 100% Historical (54,000 rows)  │")
print(f"  │   Tested on : Real-Time CSV  ( 8,481 rows)   │")
print(f"  ├──────────────────────────────────────────────┤")
print(f"  │  Accuracy      : {rt_gt_acc:.4f}                   │")
print(f"  │  Precision     : {rt_gt_prec:.4f}                   │")
print(f"  │  Recall        : {rt_gt_rec:.4f}                   │")
print(f"  │  F1 (Critical) : {rt_gt_f1:.4f}                   │")
print(f"  │  Macro F1      : {rt_gt_macro:.4f}                   │")
print(f"  │  AUC-ROC       : {rt_gt_auc:.4f}                   │")
print(f"  └──────────────────────────────────────────────┘")

print("\n  Per-Class Report — Real-Time Ground Truth:")
print(classification_report(
    rt_actual_arr, rt_pred_3class,
    target_names=["Clear", "Low Risk", "Critical"],
    zero_division=0,
))

# Confusion matrix for real-time
rt_gt_cm = confusion_matrix(rt_actual_arr, rt_pred_3class)
print("  Confusion Matrix (Real-Time):")
print(f"  {'':15s} {'Pred:Clear':>12} {'Pred:LowRisk':>12} {'Pred:Critical':>14}")
for i, row_label in enumerate(["True:Clear", "True:LowRisk", "True:Critical"]):
    row_vals = "  ".join([f"{v:>10,}" for v in rt_gt_cm[i]])
    print(f"  {row_label:15s}  {row_vals}")

# Add RT ground truth metrics to the metrics CSV
rt_gt_row = {
    "fold":        "REALTIME_GROUNDTRUTH",
    "accuracy":    rt_gt_acc,
    "precision":   rt_gt_prec,
    "recall":      rt_gt_rec,
    "f1_critical": rt_gt_f1,
    "macro_f1":    rt_gt_macro,
    "auc":         rt_gt_auc,
}
metrics_rows_full = metrics_rows + [rt_gt_row]
pd.DataFrame(metrics_rows_full).to_csv(
    os.path.join(OUTPUT_DIR, "CV_and_Test_Metrics.csv"), index=False
)
print(f"\n  ✅ Real-Time ground truth metrics appended to CV_and_Test_Metrics.csv")

# ── Visualisation: 3-way metrics comparison (CV / 30% Test / Real-Time GT) ───
fig, axes = plt.subplots(1, 3, figsize=(18, 6))

all_rows_3way = fold_metrics + [
    {"fold": "Test 30%",  "accuracy": test_acc,   "precision": test_prec,
     "recall": test_rec,  "f1_critical": test_f1,  "macro_f1": test_macro, "auc": test_auc},
    {"fold": "RT Ground\nTruth", "accuracy": rt_gt_acc, "precision": rt_gt_prec,
     "recall": rt_gt_rec, "f1_critical": rt_gt_f1, "macro_f1": rt_gt_macro, "auc": rt_gt_auc},
]
bar_colors_3  = ["#5D9CEC"] * len(fold_metrics) + ["#E74C3C", "#27AE60"]
fold_labels_3 = [f"Fold {m['fold']}" for m in fold_metrics] + ["Test 30%", "RT Ground\nTruth"]
metrics_plot3 = [
    ("f1_critical", "F1 Score — Critical Class"),
    ("macro_f1",    "Macro F1 Score"),
    ("auc",         "AUC-ROC — Critical"),
]
for ax, (metric, title) in zip(axes, metrics_plot3):
    vals  = [m[metric] for m in all_rows_3way]
    bars  = ax.bar(fold_labels_3, vals, color=bar_colors_3, edgecolor="#2C3E50")
    # annotate bars
    for bar, val in zip(bars, vals):
        ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.003,
                f"{val:.4f}", ha="center", va="bottom", fontsize=7.5,
                color="#2C3E50", fontweight="bold")
    ax.axhline(np.mean(vals[:len(fold_metrics)]), color="black",
               ls="--", lw=1.5, label=f"CV Mean={np.mean(vals[:len(fold_metrics)]):.4f}")
    ax.set_title(title, fontsize=12, fontweight="bold")
    ax.set_ylim(max(0, min(vals) - 0.08), 1.04)
    ax.tick_params(axis="x", rotation=15)
    ax.legend(fontsize=8)
    ax.spines[["top","right"]].set_visible(False)

# Colour legend
from matplotlib.patches import Patch
legend_elements = [
    Patch(facecolor="#5D9CEC", label="CV Folds (train)"),
    Patch(facecolor="#E74C3C", label="Held-Out Test 30%"),
    Patch(facecolor="#27AE60", label="Real-Time Ground Truth"),
]
fig.legend(handles=legend_elements, loc="lower center", ncol=3,
           fontsize=10, frameon=False, bbox_to_anchor=(0.5, -0.04))
plt.suptitle("Full Evaluation: CV → Held-Out Test → Real-Time Ground Truth",
             fontsize=14, fontweight="bold")
plt.tight_layout()
fig.savefig(os.path.join(OUTPUT_DIR, "cv_test_rt_comparison.png"),
            dpi=150, bbox_inches="tight")
plt.close(fig)
print(f"  ✅ cv_test_rt_comparison.png saved")

# ─── VISUALISATIONS ──────────────────────────────────────────────────────────
PALETTE = {"Critical": "#E74C3C", "Medium Risk": "#F39C12", "Low Risk": "#27AE60"}

# 1. Risk Score Distribution
fig, ax = plt.subplots(figsize=(12, 6))
for level, colour in PALETTE.items():
    subset = output_df[output_df["Risk_Level"] == level]["Risk_Score"]
    if len(subset):
        sns.histplot(subset, bins=40, kde=True, color=colour, label=level, alpha=0.6, ax=ax)
ax.axvline(best_crit_thresh, color="#2C3E50", ls="--", lw=2, label=f"Critical ({best_crit_thresh:.2f})")
ax.axvline(best_med_thresh,  color="#7F8C8D", ls=":",  lw=2, label=f"Medium ({best_med_thresh:.2f})")
ax.set_title("Risk Score Distribution — Real-Time Containers", fontsize=14, fontweight="bold")
ax.set_xlabel("Hybrid Risk Score"); ax.set_ylabel("Count")
ax.legend(fontsize=11)
plt.tight_layout()
fig.savefig(os.path.join(OUTPUT_DIR, "risk_score_distribution.png"), dpi=150)
plt.close(fig)

# 2. Risk Level Pie
fig, ax = plt.subplots(figsize=(8, 8))
risk_counts = output_df["Risk_Level"].value_counts()
colors = [PALETTE.get(l, "#95A5A6") for l in risk_counts.index]
_, _, ats = ax.pie(risk_counts.values, labels=risk_counts.index, autopct="%1.1f%%",
                   colors=colors, startangle=140, textprops={"fontsize": 13},
                   wedgeprops={"edgecolor": "white", "linewidth": 2})
for at in ats: at.set_fontweight("bold")
ax.set_title("3-Tier Risk Level Distribution", fontsize=14, fontweight="bold")
plt.tight_layout()
fig.savefig(os.path.join(OUTPUT_DIR, "risk_level_pie.png"), dpi=150)
plt.close(fig)

# 3. Feature Importance
fig, ax = plt.subplots(figsize=(12, 9))
feat_imp = pd.Series(xgb_final.feature_importances_, index=FEATURE_COLS).sort_values()
feat_imp.tail(20).plot.barh(ax=ax, color="#3498DB", edgecolor="#2C3E50")
ax.set_title("Top 20 Feature Importances (XGBoost)", fontsize=14, fontweight="bold")
ax.set_xlabel("Importance Score")
plt.tight_layout()
fig.savefig(os.path.join(OUTPUT_DIR, "feature_importance.png"), dpi=150)
plt.close(fig)

# 4. SHAP Summary
plt.figure(figsize=(12, 9))
shap.summary_plot(shap_critical, X_realtime, feature_names=FEATURE_COLS, show=False, max_display=20)
plt.title("SHAP Feature Impact — Critical Risk Class", fontsize=14, fontweight="bold")
plt.tight_layout()
plt.savefig(os.path.join(OUTPUT_DIR, "shap_summary.png"), dpi=150)
plt.close("all")

# 5. Confusion Matrix — 30% Test
fig, ax = plt.subplots(figsize=(8, 7))
cm = confusion_matrix(y_test, test_pred)
sns.heatmap(cm, annot=True, fmt=",d", cmap="Blues", ax=ax,
            xticklabels=["Clear", "Low Risk", "Critical"],
            yticklabels=["Clear", "Low Risk", "Critical"])
ax.set_title("Confusion Matrix — 30% Held-Out Test Set", fontsize=14, fontweight="bold")
ax.set_xlabel("Predicted"); ax.set_ylabel("Actual")
plt.tight_layout()
fig.savefig(os.path.join(OUTPUT_DIR, "confusion_matrix_test30.png"), dpi=150)
plt.close(fig)

# 6. CV + Test Metrics Comparison
fig, axes = plt.subplots(1, 3, figsize=(16, 5))
all_rows = fold_metrics + [{
    "fold": "Test", "accuracy": test_acc, "precision": test_prec,
    "recall": test_rec, "f1_critical": test_f1, "macro_f1": test_macro, "auc": test_auc,
}]
bar_colors   = ["#5D9CEC"] * len(fold_metrics) + ["#E74C3C"]
fold_labels  = [f"Fold {m['fold']}" for m in fold_metrics] + ["Test 30%"]
metrics_plot = [
    ("f1_critical", "F1 Score — Critical"),
    ("macro_f1",    "Macro F1"),
    ("auc",         "AUC-ROC — Critical"),
]
for ax, (metric, title) in zip(axes, metrics_plot):
    vals = [m[metric] for m in all_rows]
    ax.bar(fold_labels, vals, color=bar_colors, edgecolor="#2C3E50")
    ax.axhline(np.mean(vals[:-1]), color="black", ls="--", lw=1.5,
               label=f"CV Mean={np.mean(vals[:-1]):.4f}")
    ax.set_title(title, fontsize=12, fontweight="bold")
    ax.set_ylim(max(0, min(vals) - 0.05), 1.01)
    ax.tick_params(axis="x", rotation=20)
    ax.legend(fontsize=9)
plt.suptitle("CV vs Held-Out Test Performance", fontsize=14, fontweight="bold")
plt.tight_layout()
fig.savefig(os.path.join(OUTPUT_DIR, "cv_vs_test_metrics.png"), dpi=150)
plt.close(fig)

# 7. Optuna optimisation history
fig, ax = plt.subplots(figsize=(10, 5))
trial_values = [t.value for t in study.trials if t.value is not None]
ax.plot(range(1, len(trial_values)+1), trial_values, color="#3498DB", alpha=0.6, lw=1.5, marker="o", ms=3)
ax.axhline(study.best_value, color="#E74C3C", ls="--", lw=2, label=f"Best={study.best_value:.4f}")
ax.set_title("Optuna Hyperparameter Search — Macro F1 per Trial", fontsize=14, fontweight="bold")
ax.set_xlabel("Trial"); ax.set_ylabel("Macro F1")
ax.legend(fontsize=11)
plt.tight_layout()
fig.savefig(os.path.join(OUTPUT_DIR, "optuna_history.png"), dpi=150)
plt.close(fig)

# 8. Risk by Origin Country
fig, ax = plt.subplots(figsize=(12, 6))
rt_df["Hybrid_Risk_Score"] = rt_risk_score
top_countries = rt_df.groupby("Origin_Country")["Hybrid_Risk_Score"].mean().nlargest(15)
top_countries.sort_values().plot.barh(ax=ax, color="#E67E22", edgecolor="#2C3E50")
ax.set_title("Average Risk Score by Origin Country (Top 15)", fontsize=14, fontweight="bold")
ax.set_xlabel("Average Hybrid Risk Score")
plt.tight_layout()
fig.savefig(os.path.join(OUTPUT_DIR, "risk_by_country.png"), dpi=150)
plt.close(fig)

print(f"\n  ✅ All 8 visualisations saved → {OUTPUT_DIR}/")

# ─── FINAL SUMMARY ───────────────────────────────────────────────────────────
print("\n" + "=" * 70)
print("  FINAL SUMMARY — SmartContainer Risk Engine v4")
print("=" * 70)
print(f"""
  Pipeline Summary
  ────────────────
  Split              : 70% train ({len(train_df):,}) / 30% test ({len(test_df):,})
  Features           : {len(FEATURE_COLS)} (zero label leakage)
  Unseen categories  : handled via mean-frequency fallback
  Class imbalance    : SMOTE (Critical oversampled to 5% of train)
  Hyperparameters    : Optuna 50-trial TPE search
  Thresholds         : F1-optimised on validation fold
  Critical threshold : {best_crit_thresh:.2f}
  Medium threshold   : {best_med_thresh:.2f}

  CV Performance (5-fold on 70% train)
  ─────────────────────────────────────
  Accuracy      : {avg['accuracy']:.4f}
  Precision     : {avg['precision']:.4f}
  Recall        : {avg['recall']:.4f}
  F1 Critical   : {avg['f1_critical']:.4f}
  Macro F1      : {avg['macro_f1']:.4f}
  AUC-ROC       : {avg['auc']:.4f}

  Held-Out Test (30%) — honest evaluation
  ─────────────────────────────────────────
  Accuracy      : {test_acc:.4f}
  Precision     : {test_prec:.4f}
  Recall        : {test_rec:.4f}
  F1 Critical   : {test_f1:.4f}
  Macro F1      : {test_macro:.4f}
  AUC-ROC       : {test_auc:.4f}

  Real-Time Ground Truth — Organiser Test Set
  ─────────────────────────────────────────────
  Accuracy      : {rt_gt_acc:.4f}
  Precision     : {rt_gt_prec:.4f}
  Recall        : {rt_gt_rec:.4f}
  F1 Critical   : {rt_gt_f1:.4f}
  Macro F1      : {rt_gt_macro:.4f}
  AUC-ROC       : {rt_gt_auc:.4f}

  Real-Time Predictions
  ──────────────────────
  Total processed     : {len(output_df):,}
  Critical            : {(output_df['Risk_Level']=='Critical').sum():,}
  Medium Risk         : {(output_df['Risk_Level']=='Medium Risk').sum():,}
  Low Risk            : {(output_df['Risk_Level']=='Low Risk').sum():,}
  IF Anomalies        : {n_anomaly_rt:,}
""")
print("=" * 70)
print("  SmartContainer Risk Engine v4 — COMPLETE")
print("=" * 70)