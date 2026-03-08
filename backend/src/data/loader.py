"""
Data Loader Module
Handles loading and validating container shipment data from CSV files.
"""

import pandas as pd
import numpy as np
from pathlib import Path


def load_historical_data(filepath: str = "Problem/Historical Data.csv") -> pd.DataFrame:
    """Load historical training data."""
    df = pd.read_csv(filepath)
    df = _normalize_dates(df)
    df = _validate_schema(df)
    print(f"[Loader] Historical data loaded: {df.shape[0]} rows, {df.shape[1]} columns")
    return df


def load_realtime_data(filepath: str = "Problem/Real-Time Data.csv") -> pd.DataFrame:
    """Load real-time inference data."""
    df = pd.read_csv(filepath)
    df = _normalize_dates(df)
    df = _validate_schema(df)
    print(f"[Loader] Real-time data loaded: {df.shape[0]} rows, {df.shape[1]} columns")
    return df


def _normalize_dates(df: pd.DataFrame) -> pd.DataFrame:
    """Normalize date column to consistent datetime format.
    Historical data uses DD-MM-YYYY, Real-time uses YYYY-MM-DD.
    """
    date_col = "Declaration_Date (YYYY-MM-DD)"
    
    # Try parsing with dayfirst=True first (DD-MM-YYYY), then standard
    try:
        df[date_col] = pd.to_datetime(df[date_col], dayfirst=True)
    except Exception:
        df[date_col] = pd.to_datetime(df[date_col], format="mixed")
    
    return df


def _validate_schema(df: pd.DataFrame) -> pd.DataFrame:
    """Validate that required columns exist."""
    required_columns = [
        "Container_ID", "Declaration_Date (YYYY-MM-DD)", "Declaration_Time",
        "Trade_Regime (Import / Export / Transit)", "Origin_Country",
        "Destination_Port", "Destination_Country", "HS_Code",
        "Importer_ID", "Exporter_ID", "Declared_Value", "Declared_Weight",
        "Measured_Weight", "Shipping_Line", "Dwell_Time_Hours", "Clearance_Status"
    ]
    
    missing = [col for col in required_columns if col not in df.columns]
    if missing:
        raise ValueError(f"Missing required columns: {missing}")
    
    # Force numeric types
    for col in ["Declared_Value", "Declared_Weight", "Measured_Weight", "Dwell_Time_Hours", "HS_Code"]:
        df[col] = pd.to_numeric(df[col], errors="coerce").fillna(0)
    
    print(f"[Loader] Schema validated — all {len(required_columns)} required columns present")
    return df
