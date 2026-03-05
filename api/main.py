"""
FastAPI Server
REST API for the SmartContainer Risk Engine.
Provides endpoints for predictions, dashboard data, and container details.
"""

import sys
import os
import json
import tempfile
from pathlib import Path

# Add project root to path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi import FastAPI, UploadFile, File, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd

app = FastAPI(
    title="SmartContainer Risk Engine API",
    description="AI/ML-based container shipment risk assessment system",
    version="1.0.0",
)

# CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---- Load pre-computed results on startup ----
DASHBOARD_DATA = None
PREDICTIONS_DF = None


def load_precomputed_data():
    """Load pre-computed dashboard data and predictions."""
    global DASHBOARD_DATA, PREDICTIONS_DF
    
    json_path = Path("output/dashboard_data.json")
    csv_path = Path("output/predictions.csv")
    
    if json_path.exists():
        with open(json_path) as f:
            DASHBOARD_DATA = json.load(f)
        print(f"[API] Dashboard data loaded ({len(DASHBOARD_DATA.get('predictions', []))} containers)")
    
    if csv_path.exists():
        PREDICTIONS_DF = pd.read_csv(csv_path)
        print(f"[API] Predictions CSV loaded ({len(PREDICTIONS_DF)} rows)")


@app.on_event("startup")
async def startup_event():
    load_precomputed_data()


# ---- API Endpoints ----

@app.get("/")
async def root():
    """Health check and API info."""
    return {
        "name": "SmartContainer Risk Engine API",
        "version": "1.0.0",
        "status": "running",
        "endpoints": ["/stats", "/results", "/predictions", "/container/{container_id}", "/predict"],
    }


@app.get("/stats")
async def get_stats():
    """Get dashboard summary statistics."""
    if DASHBOARD_DATA is None:
        raise HTTPException(status_code=404, detail="No pre-computed data found. Run inference first.")
    
    return {
        "summary": DASHBOARD_DATA.get("summary", {}),
        "risk_distribution": DASHBOARD_DATA.get("risk_distribution", {}),
        "anomaly_distribution": DASHBOARD_DATA.get("anomaly_distribution", {}),
        "feature_importance": dict(list(DASHBOARD_DATA.get("feature_importance", {}).items())[:15]),
        "country_risk": DASHBOARD_DATA.get("country_risk", [])[:20],
    }


@app.get("/results")
async def get_results(
    page: int = Query(1, ge=1),
    page_size: int = Query(50, ge=10, le=500),
    risk_level: str = Query(None),
    sort_by: str = Query("risk_score"),
    sort_order: str = Query("desc"),
    search: str = Query(None),
):
    """Get paginated prediction results with filtering and sorting."""
    if DASHBOARD_DATA is None:
        raise HTTPException(status_code=404, detail="No pre-computed data found.")
    
    predictions = DASHBOARD_DATA.get("predictions", [])
    
    # Filter by risk level
    if risk_level:
        predictions = [p for p in predictions if p["risk_level"] == risk_level]
    
    # Search by container ID
    if search:
        predictions = [p for p in predictions if search.lower() in str(p["container_id"]).lower()]
    
    # Sort
    reverse = sort_order == "desc"
    sort_key = sort_by.replace("risk_score", "risk_score")
    predictions = sorted(predictions, key=lambda x: x.get(sort_key, 0), reverse=reverse)
    
    # Paginate
    total = len(predictions)
    start = (page - 1) * page_size
    end = start + page_size
    
    return {
        "data": predictions[start:end],
        "total": total,
        "page": page,
        "page_size": page_size,
        "total_pages": (total + page_size - 1) // page_size,
    }


@app.get("/container/{container_id}")
async def get_container(container_id: str):
    """Get detailed information for a specific container."""
    if DASHBOARD_DATA is None:
        raise HTTPException(status_code=404, detail="No pre-computed data found.")
    
    predictions = DASHBOARD_DATA.get("predictions", [])
    
    # Find the container
    container = None
    for p in predictions:
        if str(p["container_id"]) == str(container_id):
            container = p
            break
    
    if container is None:
        raise HTTPException(status_code=404, detail=f"Container {container_id} not found")
    
    return container


@app.get("/predictions")
async def get_predictions_csv():
    """Get predictions in CSV-compatible JSON format."""
    if PREDICTIONS_DF is None:
        raise HTTPException(status_code=404, detail="No predictions file found.")
    
    return PREDICTIONS_DF.to_dict(orient="records")


@app.post("/predict")
async def predict_from_upload(file: UploadFile = File(...)):
    """
    Upload a CSV file and get predictions.
    This runs the full inference pipeline on the uploaded data.
    """
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only CSV files are accepted")
    
    try:
        # Save uploaded file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=".csv") as tmp:
            content = await file.read()
            tmp.write(content)
            tmp_path = tmp.name
        
        # Run inference
        from src.pipeline import run_inference
        predictions_df, dashboard_data = run_inference(
            data_path=tmp_path,
            output_dir="output"
        )
        
        # Update cached data
        global DASHBOARD_DATA, PREDICTIONS_DF
        DASHBOARD_DATA = dashboard_data
        PREDICTIONS_DF = predictions_df
        
        # Clean up
        os.unlink(tmp_path)
        
        return {
            "status": "success",
            "message": f"Processed {len(predictions_df)} containers",
            "summary": dashboard_data["summary"],
            "predictions": predictions_df.to_dict(orient="records"),
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")


@app.get("/feature-importance")
async def get_feature_importance():
    """Get global feature importance ranking."""
    if DASHBOARD_DATA is None:
        raise HTTPException(status_code=404, detail="No pre-computed data found.")
    
    return DASHBOARD_DATA.get("feature_importance", {})


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
