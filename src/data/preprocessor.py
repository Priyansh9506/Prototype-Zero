"""
Data Preprocessor Module
Handles cleaning, encoding, and preparing data for modeling.
"""

import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
import joblib
from pathlib import Path


# Target mapping
CLEARANCE_MAP = {"Clear": 0, "Low Risk": 1, "Critical": 2}
CLEARANCE_MAP_REVERSE = {v: k for k, v in CLEARANCE_MAP.items()}


def preprocess_training_data(df: pd.DataFrame) -> tuple:
    """
    Preprocess historical data for training.
    Returns: (processed_df, label_encoders_dict)
    """
    df = df.copy()
    
    # Map target variable
    df["target"] = df["Clearance_Status"].map(CLEARANCE_MAP)
    
    # Encode categoricals
    encoders = {}
    categorical_cols = [
        "Trade_Regime (Import / Export / Transit)",
        "Origin_Country", "Destination_Port", "Destination_Country",
        "Shipping_Line"
    ]
    
    for col in categorical_cols:
        le = LabelEncoder()
        df[f"{col}_encoded"] = le.fit_transform(df[col].astype(str))
        encoders[col] = le
    
    # Parse time features from Declaration_Time
    df["Declaration_Hour"] = pd.to_datetime(df["Declaration_Time"], format="%H:%M:%S", errors="coerce").dt.hour
    df["Declaration_Hour"] = df["Declaration_Hour"].fillna(12).astype(int)
    
    # Parse date features
    date_col = "Declaration_Date (YYYY-MM-DD)"
    df["Declaration_Month"] = df[date_col].dt.month
    df["Declaration_DayOfWeek"] = df[date_col].dt.dayofweek
    df["Declaration_Day"] = df[date_col].dt.day
    
    print(f"[Preprocessor] Training data preprocessed: {df.shape}")
    return df, encoders


def preprocess_inference_data(df: pd.DataFrame, encoders: dict) -> pd.DataFrame:
    """
    Preprocess real-time data for inference using fitted encoders.
    """
    df = df.copy()
    
    # Encode categoricals using pre-fitted encoders
    categorical_cols = [
        "Trade_Regime (Import / Export / Transit)",
        "Origin_Country", "Destination_Port", "Destination_Country",
        "Shipping_Line"
    ]
    
    for col in categorical_cols:
        le = encoders[col]
        # Handle unseen categories gracefully
        df[f"{col}_encoded"] = df[col].astype(str).apply(
            lambda x: le.transform([x])[0] if x in le.classes_ else -1
        )
    
    # Parse time features
    df["Declaration_Hour"] = pd.to_datetime(df["Declaration_Time"], format="%H:%M:%S", errors="coerce").dt.hour
    df["Declaration_Hour"] = df["Declaration_Hour"].fillna(12).astype(int)
    
    # Parse date features
    date_col = "Declaration_Date (YYYY-MM-DD)"
    df["Declaration_Month"] = df[date_col].dt.month
    df["Declaration_DayOfWeek"] = df[date_col].dt.dayofweek
    df["Declaration_Day"] = df[date_col].dt.day
    
    print(f"[Preprocessor] Inference data preprocessed: {df.shape}")
    return df


def save_encoders(encoders: dict, path: str = "models/encoders.joblib"):
    """Save label encoders to disk."""
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    joblib.dump(encoders, path)
    print(f"[Preprocessor] Encoders saved to {path}")


def load_encoders(path: str = "models/encoders.joblib") -> dict:
    """Load label encoders from disk."""
    encoders = joblib.load(path)
    print(f"[Preprocessor] Encoders loaded from {path}")
    return encoders
