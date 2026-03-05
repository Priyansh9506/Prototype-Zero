"""
LightGBM Risk Prediction Model
Second model in our ensemble — fast and effective on imbalanced data.
"""

import numpy as np
import pandas as pd
import lightgbm as lgb
from sklearn.model_selection import StratifiedKFold
from sklearn.metrics import f1_score
import joblib
from pathlib import Path


class LightGBMRiskModel:
    def __init__(self):
        self.model = None
        self.feature_columns = None
        self.best_params = {
            "objective": "multiclass",
            "num_class": 3,
            "metric": "multi_logloss",
            "boosting_type": "gbdt",
            "max_depth": 8,
            "learning_rate": 0.05,
            "n_estimators": 500,
            "num_leaves": 63,
            "subsample": 0.8,
            "colsample_bytree": 0.8,
            "min_child_samples": 20,
            "reg_alpha": 0.1,
            "reg_lambda": 1.0,
            "is_unbalance": True,
            "random_state": 42,
            "verbose": -1,
        }
    
    def train(self, X: pd.DataFrame, y: pd.Series, feature_columns: list):
        """Train LightGBM with built-in class imbalance handling."""
        self.feature_columns = feature_columns
        X_train = X[feature_columns].values
        
        self.model = lgb.LGBMClassifier(**self.best_params)
        self.model.fit(X_train, y)
        
        # Cross-validation
        self._cross_validate(X_train, y)
        
        print(f"[LightGBM] Model trained on {X_train.shape[0]} samples, {X_train.shape[1]} features")
        return self
    
    def predict_proba(self, X: pd.DataFrame) -> np.ndarray:
        """Predict class probabilities."""
        X_pred = X[self.feature_columns].values
        return self.model.predict_proba(X_pred)
    
    def predict(self, X: pd.DataFrame) -> np.ndarray:
        """Predict class labels."""
        X_pred = X[self.feature_columns].values
        return self.model.predict(X_pred)
    
    def _cross_validate(self, X, y):
        """Quick 3-fold stratified CV."""
        skf = StratifiedKFold(n_splits=3, shuffle=True, random_state=42)
        f1_scores = []
        
        for train_idx, val_idx in skf.split(X, y):
            X_tr, X_val = X[train_idx], X[val_idx]
            y_tr, y_val = y.iloc[train_idx], y.iloc[val_idx]
            
            model = lgb.LGBMClassifier(**self.best_params)
            model.fit(X_tr, y_tr)
            y_pred = model.predict(X_val)
            f1 = f1_score(y_val, y_pred, average="weighted")
            f1_scores.append(f1)
        
        print(f"[LightGBM] 3-Fold CV Weighted F1: {np.mean(f1_scores):.4f} (+/- {np.std(f1_scores):.4f})")
    
    def feature_importance(self) -> dict:
        """Return feature importance dict."""
        if self.model is None:
            return {}
        importance = self.model.feature_importances_
        return dict(zip(self.feature_columns, importance))
    
    def save(self, path: str = "models/lgbm_model.joblib"):
        """Save model to disk."""
        Path(path).parent.mkdir(parents=True, exist_ok=True)
        joblib.dump({"model": self.model, "feature_columns": self.feature_columns}, path)
        print(f"[LightGBM] Model saved to {path}")
    
    def load(self, path: str = "models/lgbm_model.joblib"):
        """Load model from disk."""
        data = joblib.load(path)
        self.model = data["model"]
        self.feature_columns = data["feature_columns"]
        print(f"[LightGBM] Model loaded from {path}")
        return self
