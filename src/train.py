"""
Training Script
Full training pipeline: Load → Preprocess → Engineer Features → Train Models → Save
"""

import sys
import os
import json
import time
from pathlib import Path

# Add project root to path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.data.loader import load_historical_data
from src.data.preprocessor import preprocess_training_data, save_encoders
from src.features.engineering import engineer_features, compute_behavioral_stats, get_feature_columns
from src.models.xgboost_model import XGBoostRiskModel
from src.models.lgbm_model import LightGBMRiskModel
from src.models.anomaly import AnomalyDetector
import joblib


def main():
    start_time = time.time()
    print("=" * 60)
    print("SmartContainer Risk Engine — Training Pipeline")
    print("=" * 60)
    
    # ---- Step 1: Load Data ----
    print("\n📥 Step 1: Loading Historical Data...")
    df = load_historical_data()
    
    # ---- Step 2: Preprocess ----
    print("\n🔧 Step 2: Preprocessing...")
    df, encoders = preprocess_training_data(df)
    save_encoders(encoders)
    
    # ---- Step 3: Feature Engineering ----
    print("\n⚙️ Step 3: Engineering Features...")
    df = engineer_features(df)
    
    # Compute and save behavioral stats for inference
    behavioral_stats = compute_behavioral_stats(df)
    Path("models").mkdir(parents=True, exist_ok=True)
    joblib.dump(behavioral_stats, "models/behavioral_stats.joblib")
    print(f"[Train] Behavioral stats saved")
    
    # ---- Step 4: Get Feature Columns ----
    feature_columns = get_feature_columns(df)
    print(f"\n📋 Feature columns ({len(feature_columns)}): {feature_columns[:10]}...")
    
    # Save feature columns list
    joblib.dump(feature_columns, "models/feature_columns.joblib")
    
    y = df["target"]
    
    # ---- Step 5: Train XGBoost ----
    print("\n🌲 Step 5: Training XGBoost...")
    xgb_model = XGBoostRiskModel()
    xgb_model.train(df, y, feature_columns)
    xgb_model.save()
    
    # ---- Step 6: Train LightGBM ----
    print("\n💡 Step 6: Training LightGBM...")
    lgbm_model = LightGBMRiskModel()
    lgbm_model.train(df, y, feature_columns)
    lgbm_model.save()
    
    # ---- Step 7: Train Anomaly Detector ----
    print("\n🔍 Step 7: Training Anomaly Detector...")
    anomaly_detector = AnomalyDetector()
    anomaly_detector.fit(df)
    anomaly_detector.save()
    
    # ---- Summary ----
    elapsed = time.time() - start_time
    print("\n" + "=" * 60)
    print(f"✅ Training Complete in {elapsed:.1f}s")
    print(f"   Models saved to ./models/")
    print(f"   Features: {len(feature_columns)}")
    print(f"   Training samples: {len(df)}")
    
    # Save training metadata
    metadata = {
        "training_samples": len(df),
        "feature_count": len(feature_columns),
        "feature_columns": feature_columns,
        "class_distribution": {
            "Clear": int((y == 0).sum()),
            "Low Risk": int((y == 1).sum()),
            "Critical": int((y == 2).sum()),
        },
        "training_time_seconds": round(elapsed, 1),
    }
    
    with open("models/training_metadata.json", "w") as f:
        json.dump(metadata, f, indent=2)
    
    print("=" * 60)


if __name__ == "__main__":
    main()
