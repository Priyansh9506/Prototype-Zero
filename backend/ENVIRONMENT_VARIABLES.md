# Environment Variables Documentation

## Overview

The SmartContainer Risk Engine backend uses environment variables for all configuration. This ensures:
- ✅ Security (secrets not in code)
- ✅ Flexibility (different configs per environment)
- ✅ Easy deployment (no code changes needed)

## Quick Setup

### 1. Copy the Template
```bash
cp .env.example .env
```

### 2. Edit Your Values
```bash
# Linux/Mac
nano .env

# Windows
notepad .env
```

### 3. Start the App
```bash
python -m uvicorn api.main:app --reload
```

The app loads variables from `.env` automatically.

---

## Variable Reference

### 🔒 **Security Variables** (CRITICAL)

#### `SECRET_KEY` ⚠️
**Type**: String  
**Required**: YES (production)  
**Default**: `super_secret_key_change_in_production`  

JWT signing secret key. Used to sign and verify authentication tokens.

**Important**:
- **MUST change in production** - this default is publicly known
- Generate with: `python -c "import secrets; print(secrets.token_urlsafe(32))"`
- If exposed, all current tokens become invalid - rotate immediately
- Mix of letters, numbers, and special characters recommended

**Examples**:
```env
SECRET_KEY=v8x9k2L5m9pQ_w3jN7yR8zX2vB5cD7eF9gH1iJ3kL5mN7pQ9sT1uV3wX5yZ7aB9c
SECRET_KEY=MyP@ssw0rd!Secret#Key$%^&*(JwtSigning123)
```

---

#### `ALGORITHM`
**Type**: String  
**Required**: NO  
**Default**: `HS256`  
**Options**: `HS256`, `HS512`, `RS256`

JWT signing algorithm. HS256 (HMAC-SHA256) is recommended for most use cases.

```env
ALGORITHM=HS256  # Symmetric - fast, good for most uses
```

---

#### `ACCESS_TOKEN_EXPIRE_MINUTES`
**Type**: Integer  
**Required**: NO  
**Default**: `10080` (1 week)

How long JWT tokens remain valid before requiring re-login.

```env
ACCESS_TOKEN_EXPIRE_MINUTES=10080   # 7 days (production)
ACCESS_TOKEN_EXPIRE_MINUTES=60      # 1 hour (testing)
ACCESS_TOKEN_EXPIRE_MINUTES=1440    # 1 day
```

---

### 🗄️ **Database Variables**

#### `DATABASE_URL` 
**Type**: String  
**Required**: NO  
**Default**: `sqlite:///./smartcontainer.db`

Database connection string. Determines which database the API connects to.

⚠️ **CRITICAL FOR RENDER**: SQLite does NOT work on Render (ephemeral filesystem). Use PostgreSQL (Supabase recommended).

**SQLite (Development Only)** - file-based, no server:
```env
DATABASE_URL=sqlite:///./smartcontainer.db          # Local file
DATABASE_URL=sqlite:////tmp/smartcontainer.db       # Absolute path
```

**Supabase PostgreSQL (RECOMMENDED for Production)** ✨

Step by step setup:

1. **Create Supabase project** (free): https://supabase.com
2. **Get connection string**:
   - Dashboard → Project Settings → Database
   - Connection String (URI tab)
   - Copy the value

3. **Add to `.env`**:
```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_ID.supabase.co:5432/postgres
```

Replace:
- `YOUR_PASSWORD` = Your Supabase database password (set during project creation)
- `YOUR_PROJECT_ID` = Your Supabase project ID (found in connection string)

**Real Example**:
```env
DATABASE_URL=postgresql://postgres:MySecurePass123@db.euhxzyx123abc.supabase.co:5432/postgres
```

**Why Supabase?**
- ✅ Free tier perfect for testing
- ✅ Scales automatically for production
- ✅ Works great on Render
- ✅ Built-in backups
- ✅ Simple to set up

**Alternative: Standard PostgreSQL**:
```env
# Localhost PostgreSQL
DATABASE_URL=postgresql://postgres:password@localhost:5432/smartcontainer

# With special characters (URL encode @ → %40, : → %3A)
DATABASE_URL=postgresql://user%40domain:p%40sswd@host:5432/db
```

**Alternative: Railway PostgreSQL**:
```env
DATABASE_URL=postgresql://user:password@your-railway-db.railway.app:5432/railway
```

**Connection String Format**:
```
postgresql://username:password@hostname:port/database
           └────┬────┘ └──┬──┘ └───┬─────┘ └┬┘ └───┬──┘
              user    password    host    port  database
```

---

### 📝 **Application Variables**

#### `ENVIRONMENT`
**Type**: String  
**Required**: NO  
**Default**: `development`  
**Options**: `development`, `staging`, `production`

Controls behavior based on deployment stage:
- `development`: Verbose logging, all CORS allowed
- `staging`: Test with production config
- `production`: Strict validation, warnings required

```env
ENVIRONMENT=development   # Local development
ENVIRONMENT=production    # Live server - enables validation
```

---

#### `APP_NAME`
**Type**: String  
**Required**: NO  
**Default**: `SmartContainer Risk Engine API`

Application name shown in API documentation.

```env
APP_NAME=SmartContainer Risk Engine API
```

---

#### `LOG_LEVEL`
**Type**: String  
**Required**: NO  
**Default**: `INFO`  
**Options**: `DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`

Controls logging verbosity:
- `DEBUG`: Very detailed, for debugging (development only)
- `INFO`: Standard, shows key events (recommended)
- `WARNING`: Anomalies and potential issues
- `ERROR`: Error messages only
- `CRITICAL`: System failures only

```env
LOG_LEVEL=INFO          # Production - normal operations
LOG_LEVEL=DEBUG         # Development - detailed troubleshooting
LOG_LEVEL=WARNING       # Minimal logging on live server
```

---

### 🤖 **Roboflow Image Analysis**

#### `ROBOFLOW_API_KEY`
**Type**: String  
**Required**: NO (image analysis optional)  
**Default**: `` (empty)

API key for Roboflow computer vision platform (container damage detection).

**Setup**:
1. Create account: https://roboflow.com
2. Go to Settings → Account → API → Private API Key
3. Copy the key

```env
ROBOFLOW_API_KEY=kqvAIVqKjU0Jmp5Ip0JR

# If not set:
# ⚠️ Image analysis features will be disabled
# API still works - just no damage detection
```

**What it enables**:
- Container damage detection (dents, rust, holes)
- Image-based risk assessment
- Visual inspection capabilities

---

#### `ROBOFLOW_API_URL`
**Type**: String  
**Required**: NO  
**Default**: `https://serverless.roboflow.com`

Roboflow API endpoint. Usually no need to change.

```env
ROBOFLOW_API_URL=https://serverless.roboflow.com
```

---

### 🎯 **ML Model Configuration**

#### `XGB_WEIGHT`
**Type**: Float  
**Required**: NO  
**Default**: `0.40`

Weight given to XGBoost model in risk score ensemble (0.0 to 1.0).

Risk Score = (XGB × 0.40) + (LGBM × 0.35) + (Anomaly × 0.25)

```env
XGB_WEIGHT=0.40    # 40% weight - primary classifier
```

---

#### `LGBM_WEIGHT`
**Type**: Float  
**Required**: NO  
**Default**: `0.35`

Weight given to LightGBM model in risk score ensemble.

```env
LGBM_WEIGHT=0.35   # 35% weight - secondary classifier
```

---

#### `ANOMALY_WEIGHT`
**Type**: Float  
**Required**: NO  
**Default**: `0.25`

Weight given to Isolation Forest anomaly detection.

```env
ANOMALY_WEIGHT=0.25  # 25% weight - oddity detection
```

**Important**: Weights should sum to 1.0 for proper normalization:
```
0.40 + 0.35 + 0.25 = 1.0 ✓
```

---

### 🌐 **CORS Configuration**

#### `CORS_ORIGINS`
**Type**: String (comma-separated)  
**Required**: NO  
**Default**: `http://localhost:3000,http://127.0.0.1:3000`

Allowed frontend domains that can make requests to this API.

```env
# Development - all localhost variants
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# Production - specific domains only
CORS_ORIGINS=https://dashboard.example.com,https://app.example.com

# Multi-domain production
CORS_ORIGINS=https://dashboard.com,https://app.onrender.com,https://yourdomain.com
```

**Important**: 
- Each domain should be complete URL (with protocol + port if non-standard)
- Separate multiple domains with commas (no spaces)
- Use HTTPS in production
- Avoid using `*` (wildcard) in production

---

## Environment-Specific Examples

### 🧪 **Local Development**
```env
ENVIRONMENT=development
SECRET_KEY=dev-key-keep-it-simple-for-testing
DATABASE_URL=sqlite:///./smartcontainer.db
LOG_LEVEL=DEBUG
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
ROBOFLOW_API_KEY=your-dev-key
```

### 🚀 **Production on Render (with Supabase)**
```env
ENVIRONMENT=production
SECRET_KEY=<generated with secrets.token_urlsafe(32)>
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT.supabase.co:5432/postgres
LOG_LEVEL=WARNING
CORS_ORIGINS=https://your-dashboard.onrender.com,https://yourdomain.com
ROBOFLOW_API_KEY=your-production-key
ACCESS_TOKEN_EXPIRE_MINUTES=10080
```

**Setup Steps:**
1. Create Supabase project: https://supabase.com
2. Get DATABASE_URL from Project Settings → Database → Connection String (URI)
3. Copy PASSWORD and PROJECT_ID into the URL
4. Paste into Render environment variables
5. Deploy!

### 🚀 **Alternative: Production with Railway PostgreSQL**
```env
ENVIRONMENT=production
SECRET_KEY=<generated secure key>
DATABASE_URL=postgresql://user:password@your-db.railway.app:5432/railway
LOG_LEVEL=WARNING
CORS_ORIGINS=https://your-dashboard.onrender.com,https://yourdomain.com
ROBOFLOW_API_KEY=your-production-key
```

### **Staging (Test Production Config)**
```env
ENVIRONMENT=staging
SECRET_KEY=<test key - still secure>
DATABASE_URL=postgresql://postgres:password@db.abc123.supabase.co:5432/postgres
LOG_LEVEL=INFO
CORS_ORIGINS=https://staging.example.com
ROBOFLOW_API_KEY=your-staging-key
```

---

## 🚀 **Quick Render Deployment with Supabase**

1. **Create Supabase project** (takes 2 minutes):
   - Go to https://supabase.com
   - Create account
   - Create new project
   - Note your password and project ID

2. **Get connection string**:
   - Supabase Dashboard → Settings → Database
   - Click "CONNECTION STRING"
   - Select "URI" tab
   - Copy the string (format: `postgresql://postgres:PASSWORD@db.PROJECT_ID.supabase.co:5432/postgres`)

3. **Set Render environment variable**:
   - Render Dashboard → Your Service → Environment
   - Click "Add Environment Variable"
   - Name: `DATABASE_URL`
   - Value: Paste your Supabase connection string
   - Click Save

4. **Deploy**:
   - Push to GitHub
   - Render auto-deploys
   - Tables created automatically by SQLAlchemy

5. **Verify**:
   - Check logs: `python verify_user.py` ran
   - Click API URL to open Swagger docs
   - Login with testadmin / password123

---

## 🔍 **Validation & Troubleshooting**

### Check What's Loaded
```bash
# See which values are loaded
python -c "from src.config import settings; print(settings)"
```

### Missing Required Variable
```
ValueError: SECRET_KEY must be changed in production!
→ Set SECRET_KEY environment variable
```

### Database Connection Failed
```
sqlalchemy.exc.OperationalError: Could not connect to database
→ Check DATABASE_URL is correct format
→ For PostgreSQL: postgresql://user:password@host:port/db
```

**Supabase Troubleshooting:**
```
Issue: Connection refused from Supabase
Solution: 
  1. Check password is correct (Project Settings → Database)
  2. Verify project is active (might be auto-paused after 1 week free tier)
  3. Make sure URL format is: postgresql://postgres:PASSWORD@db.PROJECT_ID.supabase.co:5432/postgres

Issue: "peer authentication failed"
Solution:
  1. Ensure you copied the full connection string
  2. Don't use connection pooler URL - use direct connection (URI tab)
  3. Password must match - case sensitive!

Issue: SSL/TLS error
Solution:
  1. Your database.py already handles SSL for Supabase
  2. Error usually means wrong password or inactive project
```

### CORS Errors in Browser
```
Cross-Origin Request Blocked
→ Add your frontend URL to CORS_ORIGINS
→ Example: https://your-frontend.onrender.com
```

### Image Analysis Not Working
```
Image analysis disabled - ROBOFLOW_API_KEY not set
→ Get key from roboflow.com
→ Set ROBOFLOW_API_KEY=your-key-here
```

### SQLite Error: "Attempt to write a readonly database"
```
This happens when using SQLite on Render!
→ Switch to Supabase PostgreSQL instead
→ SQLite files get deleted on Render restart
→ Use: DATABASE_URL=postgresql://postgres:PASSWORD@db.PROJECT_ID.supabase.co:5432/postgres
```

---

## 🔐 **Security Best Practices**

1. **Never commit `.env`** to version control
   - Add `.env` to `.gitignore` ✓
   - Only commit `.env.example`

2. **Generate strong keys**
   ```bash
   python -c "import secrets; print(secrets.token_urlsafe(32))"
   ```

3. **Rotate secrets if exposed**
   - Change `SECRET_KEY` immediately if leaked
   - All current tokens invalidated when changed

4. **Limit CORS origins**
   - Production: List specific domains only
   - Development: localhost only
   - Never use `*` in production

5. **Use PostgreSQL in production**
   - SQLite is file-based, not suitable for production
   - PostgreSQL is battle-tested for scale

6. **Hide sensitive data**
   - Never log `SECRET_KEY` or database passwords
   - Use environment variables for all secrets
   - Rotate API keys (Roboflow, etc.) regularly

---

## 📋 **Complete `.env.example`**

See [`.env.example`](.env.example) for the full template with all variables and descriptions.

---

## 🆘 **Getting Help**

If a variable seems wrong:
1. Check the log output - error message usually explains what's wrong
2. Verify format (e.g., `postgresql://` not `postgres://`)
3. Test connection locally before deploying
4. Review this documentation for your specific case
