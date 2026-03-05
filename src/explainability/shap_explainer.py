"""
SHAP Explainability Module
Provides feature-level explanations for each prediction using SHAP values.
"""

import numpy as np
import pandas as pd


class ShapExplainer:
    """SHAP-based model explainability."""
    
    def __init__(self):
        self.shap_values = None
        self.feature_columns = None
    
    def explain(self, model, X: pd.DataFrame, feature_columns: list, max_samples: int = None) -> dict:
        """
        Compute SHAP explanations for predictions.
        
        Args:
            model: Trained XGBoost or LightGBM model  
            X: Feature matrix
            feature_columns: List of feature names
            max_samples: Limit samples for speed (None = all)
        
        Returns:
            dict with shap_values and top_features per sample
        """
        import shap
        
        self.feature_columns = feature_columns
        X_explain = X[feature_columns]
        
        if max_samples and len(X_explain) > max_samples:
            X_explain = X_explain.iloc[:max_samples]
        
        # TreeExplainer is fast for tree-based models
        explainer = shap.TreeExplainer(model)
        shap_values = explainer.shap_values(X_explain.values)
        
        # Handle different SHAP return formats:
        # - Older SHAP: list of arrays [class0, class1, class2]
        # - Newer SHAP (0.51+): 3D array (n_samples, n_features, n_classes)
        if isinstance(shap_values, list):
            critical_shap = np.array(shap_values[2])
        elif isinstance(shap_values, np.ndarray) and shap_values.ndim == 3:
            # Shape: (n_samples, n_features, n_classes) — take class 2 (Critical)
            critical_shap = shap_values[:, :, 2]
        else:
            critical_shap = np.array(shap_values)
        
        # Ensure 2D: (n_samples, n_features)
        if critical_shap.ndim == 1:
            critical_shap = critical_shap.reshape(1, -1)
        
        self.shap_values = critical_shap
        
        # Get top 3 features for each sample
        top_features = self._get_top_features(critical_shap, feature_columns, X_explain)
        
        print(f"[SHAP] Computed explanations for {len(X_explain)} samples")
        return {
            "shap_values": critical_shap,
            "top_features": top_features,
            "feature_columns": feature_columns,
        }
    
    def _get_top_features(self, shap_values: np.ndarray, feature_names: list, X: pd.DataFrame, top_n: int = 3) -> list:
        """Extract top N contributing features for each sample."""
        top_features_list = []
        
        for i in range(len(shap_values)):
            row_shap = np.array(shap_values[i]).flatten()
            abs_shap = np.abs(row_shap)
            top_indices = np.argsort(abs_shap)[-top_n:][::-1]
            
            features = []
            for idx in top_indices:
                idx = int(idx)  # Ensure integer indexing
                features.append({
                    "feature": feature_names[idx],
                    "shap_value": round(float(row_shap[idx]), 4),
                    "feature_value": round(float(X.iloc[i, idx]), 4) if not pd.isna(X.iloc[i, idx]) else 0,
                    "direction": "increases risk" if row_shap[idx] > 0 else "decreases risk",
                })
            
            top_features_list.append(features)
        
        return top_features_list
    
    def get_global_feature_importance(self) -> dict:
        """Get global feature importance from SHAP values."""
        if self.shap_values is None or self.feature_columns is None:
            return {}
        
        mean_abs_shap = np.mean(np.abs(self.shap_values), axis=0)
        importance = dict(zip(self.feature_columns, mean_abs_shap))
        
        # Sort by importance
        return dict(sorted(importance.items(), key=lambda x: x[1], reverse=True))
