# Backend - SmartContainer Risk Engine

Production-grade FastAPI backend with ML-powered anomaly detection, image analysis, and risk assessment.

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- pip

### Local Development Setup

```bash
# Clone/navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (copy from .env.example)
cp .env.example .env

# Seed test admin user
python verify_user.py

# Start development server
python -m uvicorn api.main:app --reload --port 8000
```

**API available at**: `http://localhost:8000`  
**Interactive API docs**: `http://localhost:8000/docs` (Swagger UI)  
**Alternative API docs**: `http://localhost:8000/redoc` (ReDoc)

## 📝 Environment Configuration

### Required for Production

Create a `.env` file in the backend root (copy from `.env.example`):

```bash
cp .env.example .env
# Then edit .env with your values
```

### Environment Variables Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `SECRET_KEY` | ⚠️ YES | `super_secret_key_change_in_production` | JWT signing secret - **MUST change in production** |
| `ALGORITHM` | NO | `HS256` | JWT algorithm (HS256, HS512, RS256) |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | NO | `10080` | JWT token expiration time (default 7 days) |
| `DATABASE_URL` | NO | `sqlite:///./smartcontainer.db` | Database connection string |
| `ENVIRONMENT` | NO | `development` | Deployment environment (development, staging, production) |
| `LOG_LEVEL` | NO | `INFO` | Logging verbosity (DEBUG, INFO, WARNING, ERROR, CRITICAL) |
| `ROBOFLOW_API_KEY` | ⚠️ Optional | `` | Roboflow API key for image analysis (image features disabled if not set) |
| `ROBOFLOW_API_URL` | NO | `https://serverless.roboflow.com` | Roboflow API endpoint |
| `CORS_ORIGINS` | NO | `http://localhost:3000,http://127.0.0.1:3000` | Comma-separated list of allowed origins |
| `XGB_WEIGHT` | NO | `0.40` | XGBoost model weight in ensemble |
| `LGBM_WEIGHT` | NO | `0.35` | LightGBM model weight in ensemble |
| `ANOMALY_WEIGHT` | NO | `0.25` | Isolation Forest weight in ensemble |

### Generating a Secure Secret Key

```bash
# Generate a cryptographically secure secret key
python -c "import secrets; print(secrets.token_urlsafe(32))"

# Output will be something like: "v8x9k2L5m9pQ_w3jN7yR8zX2vB5cD7eF9gH1iJ3"
# Copy this to your .env file as SECRET_KEY
```

### Database Configuration

⚠️ **Important**: SQLite does **NOT** work on Render (filesystem is ephemeral - data is lost on restart). Use **Supabase PostgreSQL** for production.

#### ✅ Development (Local - SQLite)
```env
DATABASE_URL=sqlite:///./smartcontainer.db
```
Simple file-based database, perfect for local development.

#### ✅ Production (Supabase PostgreSQL - RECOMMENDED)

**Step 1: Create Supabase Project**
1. Go to https://supabase.com
2. Click "Sign up" or "Start your project"
3. Create account (free tier available - perfect for testing)
4. Create new project (takes ~2 min)

**Step 2: Get Connection String**
1. In Supabase Dashboard → Project Settings → Database
2. Find "Connection String" section
3. Select "URI" tab (not connection pooler)
4. Copy the string

**Step 3: Add to .env**
```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_ID.supabase.co:5432/postgres
```

Replace:
- `YOUR_PASSWORD` = your Supabase database password
- `YOUR_PROJECT_ID` = your project ID (visible on connections page)

**Example:**
```env
DATABASE_URL=postgresql://postgres:abc123XYZ_password@db.euhxzyx123abc.supabase.co:5432/postgres
```

**Step 4: Test Connection**
```bash
# Just run verify_user.py to create tables
python verify_user.py
```

**Supabase Advantages:**
- ✅ Free tier for development/testing
- ✅ Auto-scales for production
- ✅ Automatic backups
- ✅ Real-time features (if needed)
- ✅ Works perfectly with Render

#### Alternative: Railway PostgreSQL
```env
DATABASE_URL=postgresql://user:password@your-railway-db.railway.app:5432/railway
```

#### Alternative: Standard PostgreSQL (Localhost)
```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/smartcontainer
```

### Roboflow Configuration (for Image Analysis)

1. Create account at https://roboflow.com
2. Get your API key from Settings → Account API
3. Add to .env:
```env
ROBOFLOW_API_KEY=your_actual_api_key_here
```

If not set, image analysis endpoints will return "feature disabled" - the API will still work fine.

## 📁 Project Structure

```
backend/
├── api/                    # FastAPI REST API layer
│   ├── main.py            # FastAPI app, routes, startup logic
│   ├── auth.py            # JWT authentication, password hashing
│   ├── database.py        # Database engine, sessions
│   ├── models_db.py       # SQLAlchemy database models
│   ├── schemas.py         # Pydantic request/response schemas
│   └── task_manager.py    # Background task execution
│
├── src/                   # Core business logic
│   ├── config.py          # Configuration from environment
│   ├── logger.py          # Logging setup
│   ├── pipeline.py        # Data processing pipeline
│   ├── data/              # Data loading & preprocessing
│   │   ├── loader.py      # Load CSVs and historical data
│   │   └── preprocessor.py # Cleaning, encoding, normalization
│   ├── features/          # Feature engineering
│   │   └── engineering.py # Create training features
│   ├── models/            # ML models (inference only)
│   │   ├── xgboost_model.py    # XGBoost risk scorer
│   │   ├── lgbm_model.py       # LightGBM risk scorer
│   │   ├── anomaly.py          # Isolation Forest detector
│   │   └── ensemble.py         # Risk score aggregation
│   └── explainability/    # Model interpretability
│       ├── shap_explainer.py   # SHAP explanations
│       └── rule_explainer.py   # Rule-based explanations
│
├── models/                # Pre-trained ML models & artifacts
│   ├── xgboost_model.joblib
│   ├── lgbm_model.joblib
│   ├── anomaly_detector.joblib
│   ├── encoders.joblib         # Categorical encoders
│   ├── feature_columns.joblib  # Feature list
│   └── behavioral_stats.joblib # Statistical baselines
│
├── output/                # Generated output
│   └── dashboard_data.json     # Pre-computed metrics for frontend
│
├── Problem/               # Training datasets (NOT in production)
│   ├── Historical Data.csv
│   └── Real-Time Data.csv
│
├── .env.example           # Environment variable template
├── .gitignore             # Git ignore configuration
├── requirements.txt       # Python package dependencies
├── runtime.txt            # Python version specification
├── verify_user.py         # Admin user seeding script
└── README.md              # This file
```

## 🔑 Test Credentials

For testing locally only:
```
Username: testadmin
Password: password123
```

⚠️ **IMPORTANT**: Change these immediately before deploying to production!

## 📊 ML Models

All models loaded at startup are **pre-trained** and perform inference only:

### Risk Scoring Ensemble
```
Final Risk Score = (XGB_score × 0.40) + (LGBM_score × 0.35) + (Anomaly_score × 0.25)
```

**Risk Categories:**
- 🟢 **Clear (0-0.33)** - Low risk, routine processing
- 🟡 **Low Risk (0.33-0.67)** - Monitor closely
- 🔴 **Critical (0.67-1.0)** - Escalate for inspection

### Model Files
- `xgboost_model.joblib` - Primary risk classifier
- `lgbm_model.joblib` - Secondary risk classifier  
- `anomaly_detector.joblib` - Isolation Forest oddity detector
- `encoders.joblib` - Categorical feature encoders
- `feature_columns.joblib` - Expected feature list
- `behavioral_stats.joblib` - Statistical baselines

## 🚢 Deployment to Render with Supabase PostgreSQL

⚠️ **IMPORTANT**: Do NOT use SQLite on Render! Use Supabase PostgreSQL instead.

### Quick Setup (Complete Guide Below)

1. **Create Supabase Project** (5 min): https://supabase.com
2. **Get Connection URL** from Project Settings → Database → URI
3. **Deploy to Render.com**:
   - Push code to GitHub
   - Connect repository 
   - Set `DATABASE_URL` environment variable
   - Done!

### Detailed: Setup Supabase

See [SUPABASE_SETUP.md](SUPABASE_SETUP.md) for complete step-by-step guide!

**Quick version:**
1. Go to https://supabase.com → Sign Up
2. Create new project (takes 2-3 min)
3. Settings → Database → Copy Connection String (URI tab)
4. Use this as your `DATABASE_URL`

### Detailed: Deploy to Render

1. **Create Web Service** → Connect GitHub repository
2. **Configuration**:
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python -m uvicorn api.main:app --host 0.0.0.0 --port $PORT`

3. **Environment Variables** (set in Render Dashboard):
   ```
   ENVIRONMENT=production
   SECRET_KEY=generate_with_python_c_import_secrets_print_secrets_token_urlsafe_32
   DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_ID.supabase.co:5432/postgres
   ROBOFLOW_API_KEY=<your_roboflow_key_or_leave_empty>
   CORS_ORIGINS=https://your-frontend.onrender.com,https://yourdomain.com
   LOG_LEVEL=WARNING
   ```

4. **Generate Secure SECRET_KEY**:
   ```bash
   python -c "import secrets; print(secrets.token_urlsafe(32))"
   ```

5. **Click Deploy**
   - Render auto-deploys from GitHub
   - Tables created automatically
   - Check logs to verify

### Python Version

Render automatically uses Python version from `runtime.txt` (already set to 3.11)

### Docker Deployment (Optional)

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "-m", "uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## 🧪 API Testing

### Interactive Testing
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### Example API Calls

```bash
# Login and get token
curl -X POST "http://localhost:8000/login" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=testadmin&password=password123"

# Response includes access_token

# Get all containers
curl -X GET "http://localhost:8000/api/containers" \
  -H "Authorization: Bearer <your_token>"

# Get analytics summary
curl -X GET "http://localhost:8000/api/analytics/summary" \
  -H "Authorization: Bearer <your_token>"
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
python -m uvicorn api.main:app --reload --port 8001

# Or find & kill process on port 8000
# Linux/Mac: lsof -ti:8000 | xargs kill -9
# Windows: netstat -ano | findstr :8000
```

### Database Connection Error
```bash
# Check DATABASE_URL is correct
# For SQLite: sqlite:///./smartcontainer.db (relative path)
# For PostgreSQL: postgresql://user:pass@host:port/db

# If using PostgreSQL, ensure DB exists:
# createdb smartcontainer
```

### Missing Roboflow API Key
```
⚠️ Image analysis disabled. Set ROBOFLOW_API_KEY to enable.
API will still work without it.
```

### Import Errors
```bash
# Reinstall dependencies
pip install --force-reinstall -r requirements.txt

# Check Python version
python --version  # Should be 3.11+
```

## 📋 Production Checklist

- [ ] Create `.env` file with production values
- [ ] Generate new `SECRET_KEY` using `python -c "import secrets; print(secrets.token_urlsafe(32))"`
- [ ] Set `ENVIRONMENT=production`
- [ ] Use PostgreSQL (not SQLite) via `DATABASE_URL`
- [ ] Configure `CORS_ORIGINS` to your frontend domains only
- [ ] Set `LOG_LEVEL=WARNING` or `ERROR`
- [ ] Change test admin password or delete test user
- [ ] Set up `ROBOFLOW_API_KEY` for image features (optional)
- [ ] Test with `python verify_user.py` before deployment
- [ ] Review all database migrations have run
- [ ] Set up monitoring/logging (Sentry, DataDog, etc.)
- [ ] Enable HTTPS/SSL (automatic on Render)

## 🔒 Security Notes

- **Never commit `.env`** file to repository
- **Rotate `SECRET_KEY`** if accidentally exposed
- **Use PostgreSQL in production** (not SQLite)
- **Enable HTTPS** (Render does this automatically)
- **Restrict CORS_ORIGINS** to known frontend domains
- **Use strong passwords** for all database users
- **Regularly rotate API keys** (Roboflow, etc.)
- **Monitor API logs** for suspicious activity

## 📦 Dependencies

### Runtime
- **fastapi** - Async Python web framework
- **uvicorn** - ASGI server
- **sqlalchemy** - Database ORM
- **pydantic-settings** - Configuration from environment
- **python-jose** - JWT authentication

### ML & Data
- **pandas, numpy** - Data processing
- **scikit-learn** - ML preprocessing, Isolation Forest
- **xgboost** - Gradient boosting ensemble
- **lightgbm** - Light gradient boosting model
- **joblib** - Model serialization

### Computer Vision
- **inference-sdk** - Roboflow API client
- **opencv-python-headless** - Image processing

See `requirements.txt` for full list with versions.

---

For full system documentation, see [System Architecture](../docs/ARCHITECTURE.md)


## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/login` | User login (JWT token) |
| GET | `/api/containers` | List all containers |
| GET | `/api/containers/{id}` | Get container details |
| POST | `/api/containers/analyze` | Analyze new container |
| GET | `/api/analytics/summary` | Get analytics dashboard |
| GET | `/api/admin/users` | List users (admin only) |

Full API documentation available at `/docs` endpoint.

## 🧪 Testing

```bash
# Run tests
python -m pytest tests/

# With coverage
python -m pytest --cov=src tests/
```

## 🔧 Development

### Data Exploration
```bash
# Analyze training data distribution
python explore_data.py
```

### Model Training
```bash
# Train ML models
python src/train_pipeline.py
```

### Database Reset
```bash
# Re-seed the database
python verify_user.py
```

## 📦 Dependencies

**Core Framework**:
- FastAPI - Modern async web framework
- Uvicorn - ASGI server

**Machine Learning**:
- scikit-learn - Isolated Forest, preprocessing
- XGBoost - Primary ensemble model
- LightGBM - Secondary ensemble model
- joblib - Model serialization

**Data Processing**:
- pandas - Data manipulation
- numpy - Numerical computing

**Utilities**:
- SQLAlchemy - ORM
- pydantic - Data validation
- python-jose - JWT handling
- roboflow - CV model inference

See `requirements.txt` for complete list with versions.

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
python -m uvicorn api.main:app --reload --port 8001
```

### Database Issues
```bash
# Reset database
rm smartcontainer.db
python verify_user.py
```

### Missing Dependencies
```bash
# Reinstall all dependencies
pip install --upgrade -r requirements.txt
```

## 📝 Notes

- Database is SQLite-based and stored as `smartcontainer.db`
- ML models are pre-trained and stored in `models/` folder
- Background tasks run in-process without external task brokers
- CORS is configured to allow requests from Frontend

---

For full system architecture, see [System Architecture](../docs/ARCHITECTURE.md)
