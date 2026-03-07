"""
Configuration Management for SmartContainer Risk Engine API
Loads all settings from environment variables with sensible defaults.
"""

from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path

class Settings(BaseSettings):
    """
    Production-grade configuration with environment variable support.
    Load from .env file if present, otherwise use environment variables.
    """
    
    # ============================================
    # Application Configuration
    # ============================================
    APP_NAME: str = "SmartContainer Risk Engine API"
    APP_VERSION: str = "1.0.0"
    ENVIRONMENT: str = "development"  # development, staging, production
    
    # ============================================
    # Directory Paths (Auto-resolved)
    # ============================================
    BASE_DIR: Path = Path(__file__).resolve().parent.parent
    DATA_DIR: Path = BASE_DIR / "data"
    MODELS_DIR: Path = BASE_DIR / "models"
    OUTPUT_DIR: Path = BASE_DIR / "output"
    
    # ============================================
    # Logging Configuration
    # ============================================
    LOG_LEVEL: str = "INFO"  # DEBUG, INFO, WARNING, ERROR, CRITICAL
    
    # ============================================
    # JWT & Security Configuration
    # ============================================
    SECRET_KEY: str = "super_secret_key_change_in_production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 10080  # 7 days
    
    # ============================================
    # Database Configuration
    # ============================================
    DATABASE_URL: str = "sqlite:///./smartcontainer.db"
    
    # ============================================
    # ML Model Ensemble Weights
    # ============================================
    # Risk scoring: (XGB_score * XGB_WEIGHT) + (LGBM_score * LGBM_WEIGHT) + (Anomaly_score * ANOMALY_WEIGHT)
    # Weights must sum to 1.0 for proper normalization (0.40 + 0.35 + 0.25 = 1.0)
    XGB_WEIGHT: float = 0.40      # XGBoost model weight
    LGBM_WEIGHT: float = 0.35     # LightGBM model weight
    ANOMALY_WEIGHT: float = 0.25  # Isolation Forest anomaly weight
    
    # ============================================
    # Roboflow Image Analysis API
    # ============================================
    ROBOFLOW_API_KEY: str = ""  # Get from https://roboflow.com - Required for image analysis
    ROBOFLOW_API_URL: str = "https://serverless.roboflow.com"
    
    # ============================================
    # CORS Configuration
    # ============================================
    CORS_ORIGINS: str = "http://localhost:3000,http://127.0.0.1:3000"
    
    # ============================================
    # Pydantic Configuration
    # ============================================
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


# Initialize singleton settings instance
settings = Settings()

# ============================================
# Post-initialization Setup
# ============================================

# Ensure required directories exist
settings.DATA_DIR.mkdir(parents=True, exist_ok=True)
settings.MODELS_DIR.mkdir(parents=True, exist_ok=True)
settings.OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Validate critical settings for production
if settings.ENVIRONMENT == "production":
    if settings.SECRET_KEY == "super_secret_key_change_in_production":
        raise ValueError("⚠️ CRITICAL: SECRET_KEY must be changed in production! Set via SECRET_KEY environment variable.")
    if not settings.ROBOFLOW_API_KEY:
        print("⚠️ WARNING: ROBOFLOW_API_KEY not set. Image analysis will be disabled.")
