"""
Feature Engineering Module
Creates 40+ features from raw container shipment data.
This is the core differentiator of our solution.
"""

import pandas as pd
import numpy as np


def engineer_features(df: pd.DataFrame, historical_stats: dict = None) -> pd.DataFrame:
    """
    Engineer all features from preprocessed data.
    
    Args:
        df: Preprocessed dataframe
        historical_stats: Pre-computed stats from training data (for inference)
    
    Returns:
        DataFrame with all engineered features
    """
    df = df.copy()
    
    # ========== WEIGHT ANOMALY FEATURES ==========
    df = _weight_features(df)
    
    # ========== VALUE FEATURES ==========
    df = _value_features(df)
    
    # ========== HS CODE FEATURES ==========
    df = _hs_code_features(df)
    
    # ========== TIME FEATURES ==========
    df = _time_features(df)
    
    # ========== DWELL TIME FEATURES ==========
    df = _dwell_features(df)
    
    # ========== INTERACTION FEATURES ==========
    df = _interaction_features(df)
    
    # ========== BEHAVIORAL / ENTITY FEATURES ==========
    if historical_stats:
        df = _behavioral_features_from_stats(df, historical_stats)
    else:
        df = _behavioral_features_self(df)
    
    # Replace infinities and fill NaN
    df = df.replace([np.inf, -np.inf], np.nan)
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    df[numeric_cols] = df[numeric_cols].fillna(0)
    
    feature_count = len(get_feature_columns(df))
    print(f"[Features] Engineered {feature_count} features")
    return df


def _weight_features(df: pd.DataFrame) -> pd.DataFrame:
    """Weight discrepancy features — key anomaly signals."""
    safe_weight = df["Declared_Weight"].replace(0, np.nan).fillna(1e-6)
    
    # Absolute difference
    df["weight_diff_abs"] = abs(df["Declared_Weight"] - df["Measured_Weight"])
    
    # Percentage difference 
    df["weight_diff_pct"] = df["weight_diff_abs"] / safe_weight * 100
    df["weight_diff_pct"] = df["weight_diff_pct"].clip(upper=500)  # cap extreme outliers
    
    # Ratio
    df["weight_ratio"] = df["Measured_Weight"] / safe_weight
    df["weight_ratio"] = df["weight_ratio"].clip(0, 10)
    
    # Direction of discrepancy
    df["is_overweight"] = (df["Measured_Weight"] > df["Declared_Weight"] * 1.05).astype(int)
    df["is_underweight"] = (df["Measured_Weight"] < df["Declared_Weight"] * 0.95).astype(int)
    
    # Binary flags for thresholds
    df["weight_diff_gt10"] = (df["weight_diff_pct"] > 10).astype(int)
    df["weight_diff_gt20"] = (df["weight_diff_pct"] > 20).astype(int)
    
    # Log of measured weight
    df["log_measured_weight"] = np.log1p(df["Measured_Weight"])
    
    # Zero weight flags
    df["is_zero_declared_weight"] = (df["Declared_Weight"] == 0).astype(int)
    df["is_zero_measured_weight"] = (df["Measured_Weight"] < 0.01).astype(int)
    
    return df


def _value_features(df: pd.DataFrame) -> pd.DataFrame:
    """Value-based features."""
    safe_weight = df["Declared_Weight"].replace(0, np.nan).fillna(1e-6)
    
    # Value per kg
    df["value_per_kg"] = df["Declared_Value"] / safe_weight
    df["value_per_kg"] = df["value_per_kg"].clip(upper=1e7)
    
    # Log value
    df["log_declared_value"] = np.log1p(df["Declared_Value"])
    
    # Zero value flag
    df["is_zero_value"] = (df["Declared_Value"] == 0).astype(int)
    
    # Extremely high value flag
    value_99 = df["Declared_Value"].quantile(0.99)
    df["is_extreme_value"] = (df["Declared_Value"] > value_99).astype(int)
    
    # Value Z-score
    mean_val = df["Declared_Value"].mean()
    std_val = df["Declared_Value"].std()
    df["value_zscore"] = ((df["Declared_Value"] - mean_val) / (std_val + 1e-6)).clip(-5, 5)
    
    # Value per kg Z-score
    mean_vpk = df["value_per_kg"].mean()
    std_vpk = df["value_per_kg"].std()
    df["value_per_kg_zscore"] = ((df["value_per_kg"] - mean_vpk) / (std_vpk + 1e-6)).clip(-5, 5)
    
    return df


def _hs_code_features(df: pd.DataFrame) -> pd.DataFrame:
    """HS Code classification features."""
    hs = df["HS_Code"].astype(str).str.zfill(6)
    
    # Chapter (first 2 digits) — broad category
    df["hs_chapter"] = hs.str[:2].astype(int)
    
    # Heading (first 4 digits) — sub-category  
    df["hs_heading"] = hs.str[:4].astype(int)
    
    # Chapter-level risk rate (from training data aggregation)
    chapter_counts = df.groupby("hs_chapter").size()
    df["hs_chapter_frequency"] = df["hs_chapter"].map(chapter_counts).fillna(0)
    
    return df


def _time_features(df: pd.DataFrame) -> pd.DataFrame:
    """Temporal features from declaration time."""
    hour = df.get("Declaration_Hour", pd.Series([12] * len(df)))
    
    # Night-time declarations (suspicious: 10PM - 6AM)
    df["is_night_declaration"] = ((hour >= 22) | (hour <= 6)).astype(int)
    
    # Business hours
    df["is_business_hours"] = ((hour >= 9) & (hour <= 17)).astype(int)
    
    # Weekend
    dow = df.get("Declaration_DayOfWeek", pd.Series([0] * len(df)))
    df["is_weekend"] = (dow >= 5).astype(int)
    
    # Cyclical encoding of hour (captures 23:00 close to 00:00)
    df["hour_sin"] = np.sin(2 * np.pi * hour / 24)
    df["hour_cos"] = np.cos(2 * np.pi * hour / 24)
    
    # Cyclical encoding of month
    month = df.get("Declaration_Month", pd.Series([1] * len(df)))
    df["month_sin"] = np.sin(2 * np.pi * month / 12)
    df["month_cos"] = np.cos(2 * np.pi * month / 12)
    
    return df


def _dwell_features(df: pd.DataFrame) -> pd.DataFrame:
    """Dwell time features."""
    dwell = df["Dwell_Time_Hours"]
    
    # Z-score
    mean_dwell = dwell.mean()
    std_dwell = dwell.std()
    df["dwell_zscore"] = ((dwell - mean_dwell) / (std_dwell + 1e-6)).clip(-5, 5)
    
    # Unusually long dwell (>2 std above mean)
    df["is_long_dwell"] = (dwell > mean_dwell + 2 * std_dwell).astype(int)
    
    # Unusually short dwell
    df["is_short_dwell"] = (dwell < mean_dwell - 1.5 * std_dwell).astype(int)
    
    # Log dwell
    df["log_dwell"] = np.log1p(dwell)
    
    # Dwell time per port average
    port_avg_dwell = df.groupby("Destination_Port")["Dwell_Time_Hours"].transform("mean")
    df["dwell_vs_port_avg"] = dwell / (port_avg_dwell + 1e-6)
    
    return df


def _interaction_features(df: pd.DataFrame) -> pd.DataFrame:
    """Cross-feature interactions to capture compound risk signals."""
    # Weight discrepancy × Value anomaly
    df["weight_diff_x_value_zscore"] = df["weight_diff_pct"] * df.get("value_zscore", 0)
    
    # Dwell × Weight discrepancy
    df["dwell_x_weight_diff"] = df["Dwell_Time_Hours"] * df["weight_diff_pct"]
    
    # Zero value + high weight = very suspicious
    df["zero_value_high_weight"] = (
        df["is_zero_value"] * (df["Declared_Weight"] > df["Declared_Weight"].median())
    ).astype(int)
    
    # Night + high value = suspicious
    df["night_high_value"] = (
        df["is_night_declaration"] * df.get("is_extreme_value", 0)
    ).astype(int)
    
    # Composite anomaly signal
    df["composite_anomaly_signal"] = (
        df["weight_diff_gt10"].astype(float) +
        df["is_zero_value"].astype(float) +
        df["is_long_dwell"].astype(float) +
        df["is_night_declaration"].astype(float)
    )
    
    return df


def _behavioral_features_self(df: pd.DataFrame) -> pd.DataFrame:
    """Behavioral profiling computed from the same dataset (training)."""
    # Importer frequency
    importer_counts = df.groupby("Importer_ID").size()
    df["importer_frequency"] = df["Importer_ID"].map(importer_counts).fillna(0)
    
    # Exporter frequency
    exporter_counts = df.groupby("Exporter_ID").size()
    df["exporter_frequency"] = df["Exporter_ID"].map(exporter_counts).fillna(0)
    
    # Importer avg value
    importer_avg_val = df.groupby("Importer_ID")["Declared_Value"].mean()
    df["importer_avg_value"] = df["Importer_ID"].map(importer_avg_val).fillna(0)
    
    # Origin country frequency
    country_counts = df.groupby("Origin_Country").size()
    df["origin_country_frequency"] = df["Origin_Country"].map(country_counts).fillna(0)
    
    # Route pair (origin-destination) 
    df["route_pair"] = df["Origin_Country"] + "_" + df["Destination_Country"]
    route_counts = df.groupby("route_pair").size()
    df["route_pair_frequency"] = df["route_pair"].map(route_counts).fillna(0)
    
    # Importer risk rate (if target available)
    if "target" in df.columns:
        importer_risk = df.groupby("Importer_ID")["target"].mean()
        df["importer_risk_rate"] = df["Importer_ID"].map(importer_risk).fillna(0)
        
        exporter_risk = df.groupby("Exporter_ID")["target"].mean()
        df["exporter_risk_rate"] = df["Exporter_ID"].map(exporter_risk).fillna(0)
        
        country_risk = df.groupby("Origin_Country")["target"].mean()
        df["origin_country_risk_rate"] = df["Origin_Country"].map(country_risk).fillna(0)
        
        hs_risk = df.groupby("hs_chapter")["target"].mean()
        df["hs_chapter_risk_rate"] = df["hs_chapter"].map(hs_risk).fillna(0)
        
        port_risk = df.groupby("Destination_Port")["target"].mean()
        df["port_risk_rate"] = df["Destination_Port"].map(port_risk).fillna(0)
    
    return df


def _behavioral_features_from_stats(df: pd.DataFrame, stats: dict) -> pd.DataFrame:
    """Apply pre-computed behavioral stats from training data to inference data."""
    df["importer_frequency"] = df["Importer_ID"].map(stats.get("importer_frequency", {})).fillna(0)
    df["exporter_frequency"] = df["Exporter_ID"].map(stats.get("exporter_frequency", {})).fillna(0)
    df["importer_avg_value"] = df["Importer_ID"].map(stats.get("importer_avg_value", {})).fillna(0)
    df["origin_country_frequency"] = df["Origin_Country"].map(stats.get("origin_country_frequency", {})).fillna(0)
    
    df["route_pair"] = df["Origin_Country"] + "_" + df["Destination_Country"]
    df["route_pair_frequency"] = df["route_pair"].map(stats.get("route_pair_frequency", {})).fillna(0)
    
    df["importer_risk_rate"] = df["Importer_ID"].map(stats.get("importer_risk_rate", {})).fillna(0)
    df["exporter_risk_rate"] = df["Exporter_ID"].map(stats.get("exporter_risk_rate", {})).fillna(0)
    df["origin_country_risk_rate"] = df["Origin_Country"].map(stats.get("origin_country_risk_rate", {})).fillna(0)
    df["hs_chapter_risk_rate"] = df["hs_chapter"].map(stats.get("hs_chapter_risk_rate", {})).fillna(0)
    df["port_risk_rate"] = df["Destination_Port"].map(stats.get("port_risk_rate", {})).fillna(0)
    
    return df


def compute_behavioral_stats(df: pd.DataFrame) -> dict:
    """Compute behavioral statistics from training data to use during inference."""
    stats = {}
    
    stats["importer_frequency"] = df.groupby("Importer_ID").size().to_dict()
    stats["exporter_frequency"] = df.groupby("Exporter_ID").size().to_dict()
    stats["importer_avg_value"] = df.groupby("Importer_ID")["Declared_Value"].mean().to_dict()
    stats["origin_country_frequency"] = df.groupby("Origin_Country").size().to_dict()
    
    df_temp = df.copy()
    df_temp["route_pair"] = df_temp["Origin_Country"] + "_" + df_temp["Destination_Country"]
    stats["route_pair_frequency"] = df_temp.groupby("route_pair").size().to_dict()
    
    if "target" in df.columns:
        stats["importer_risk_rate"] = df.groupby("Importer_ID")["target"].mean().to_dict()
        stats["exporter_risk_rate"] = df.groupby("Exporter_ID")["target"].mean().to_dict()
        stats["origin_country_risk_rate"] = df.groupby("Origin_Country")["target"].mean().to_dict()
        
        hs = df["HS_Code"].astype(str).str.zfill(6).str[:2].astype(int)
        df_hs = df.copy()
        df_hs["hs_chapter"] = hs
        stats["hs_chapter_risk_rate"] = df_hs.groupby("hs_chapter")["target"].mean().to_dict()
        
        stats["port_risk_rate"] = df.groupby("Destination_Port")["target"].mean().to_dict()
    
    print(f"[Features] Computed behavioral stats for {len(stats)} categories")
    return stats


def get_feature_columns(df: pd.DataFrame) -> list:
    """Return the list of feature columns used for modeling."""
    exclude_cols = {
        "Container_ID", "Declaration_Date (YYYY-MM-DD)", "Declaration_Time",
        "Trade_Regime (Import / Export / Transit)", "Origin_Country",
        "Destination_Port", "Destination_Country", "HS_Code",
        "Importer_ID", "Exporter_ID", "Shipping_Line",
        "Clearance_Status", "target", "route_pair"
    }
    
    feature_cols = [
        col for col in df.columns 
        if col not in exclude_cols and df[col].dtype in [np.float64, np.int64, np.float32, np.int32]
    ]
    
    return sorted(feature_cols)
