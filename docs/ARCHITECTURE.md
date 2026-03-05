# 🏗️ System Architecture

## High-Level Overview

```
┌────────────────────────────────────────────────────────────────────┐
│                        USER / JUDGE                                │
│                   (Browser / API Client)                           │
└──────────────────────────┬─────────────────────────────────────────┘
                           │
              ┌────────────▼────────────┐
              │    Next.js Frontend      │
              │    (Vercel Deployed)      │
              │                          │
              │  ┌────────────────────┐  │
              │  │  Dashboard Page    │  │
              │  │  Upload Page       │  │
              │  │  Container Detail  │  │
              │  │  Analytics Page    │  │
              │  └────────────────────┘  │
              │                          │
              │  ┌────────────────────┐  │
              │  │  Next.js API       │  │
              │  │  Routes (Proxy)    │  │
              │  └─────────┬──────────┘  │
              └────────────┼─────────────┘
                           │ HTTP/REST
              ┌────────────▼─────────────┐
              │    FastAPI Backend        │
              │    (Railway Deployed)     │
              │                          │
              │  ┌────────────────────┐  │
              │  │  /stats            │  │
              │  │  /results          │  │
              │  │  /container/{id}   │  │
              │  │  /predict (upload) │  │
              │  └─────────┬──────────┘  │
              └────────────┼─────────────┘
                           │
              ┌────────────▼─────────────┐
              │    ML Pipeline            │
              │                          │
              │  ┌──────────────┐        │
              │  │ Data Loader  │        │
              │  └──────┬───────┘        │
              │         ▼                │
              │  ┌──────────────┐        │
              │  │ Preprocessor │        │
              │  └──────┬───────┘        │
              │         ▼                │
              │  ┌──────────────┐        │
              │  │  Feature     │        │
              │  │  Engineering │        │
              │  │  (40+ feats) │        │
              │  └──────┬───────┘        │
              │         ▼                │
              │  ┌──────────────────┐    │
              │  │   Ensemble       │    │
              │  │                  │    │
              │  │  XGBoost (40%)   │    │
              │  │  LightGBM (35%) │    │
              │  │  Anomaly (25%)   │    │
              │  └──────┬───────────┘    │
              │         ▼                │
              │  ┌──────────────┐        │
              │  │ Explainability│       │
              │  │ SHAP + Rules  │       │
              │  └──────┬───────┘        │
              │         ▼                │
              │  ┌──────────────┐        │
              │  │   Output     │        │
              │  │ CSV + JSON   │        │
              │  └──────────────┘        │
              └──────────────────────────┘
```

## Data Flow

### Training Flow

```
Historical Data (54K records)
    → Data Loader (schema validation, date normalization)
    → Preprocessor (label encoding, type casting)
    → Feature Engineering (40+ features)
    → Model Training (XGBoost + LightGBM + Isolation Forest)
    → Save Models + Encoders + Behavioral Stats (.joblib)
```

### Inference Flow

```
Real-Time Data (8.5K records) OR Uploaded CSV
    → Data Loader (schema validation)
    → Preprocessor (use fitted encoders)
    → Feature Engineering (use behavioral stats from training)
    → Model Prediction (load saved models)
    → Ensemble Risk Scoring (weighted combination)
    → SHAP Explainability (top-3 features per container)
    → Rule-Based NL Explanations (human-readable summaries)
    → Output: predictions.csv + dashboard_data.json
```

## API Endpoints

| Method | Endpoint                              | Description                                     |
| ------ | ------------------------------------- | ----------------------------------------------- |
| `GET`  | `/`                                   | Health check                                    |
| `GET`  | `/stats`                              | Dashboard summary statistics                    |
| `GET`  | `/results?page=1&risk_level=Critical` | Paginated results with filtering                |
| `GET`  | `/container/{id}`                     | Single container detail + SHAP explanation      |
| `GET`  | `/predictions`                        | All predictions (CSV format)                    |
| `POST` | `/predict`                            | Upload CSV → run inference → return predictions |
| `GET`  | `/feature-importance`                 | Global feature importance ranking               |

## Ensemble Model Architecture

```
                    Input Features (40+)
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
        ┌──────────┐ ┌──────────┐ ┌──────────────┐
        │ XGBoost  │ │ LightGBM │ │ Anomaly      │
        │ (multi-  │ │ (multi-  │ │ Detection    │
        │  class)  │ │  class)  │ │ (Isolation   │
        │          │ │          │ │  Forest +    │
        │          │ │          │ │  Stats +     │
        │          │ │          │ │  Rules)      │
        └────┬─────┘ └────┬─────┘ └──────┬───────┘
             │            │              │
         P(class)     P(class)     Anomaly Score
          (40%)        (35%)         (25%)
             │            │              │
             └────────────┼──────────────┘
                          ▼
                ┌──────────────────┐
                │  Weighted Avg    │
                │  Risk Score      │
                │  (0 - 100)       │
                └────────┬─────────┘
                         ▼
                ┌──────────────────┐
                │  Thresholding    │
                │  ≥55 → Critical  │
                │  <55 → Low Risk  │
                └──────────────────┘
```
