# 🔧 Deployment Troubleshooting & Reference Guide

Comprehensive reference for all deployment issues, debugging, and configuration.

---

## 🚨 Critical Issues

### Issue 1: "Service Spins Down" on Render Free Tier

**Problem:**
- Backend becomes unavailable after 15 minutes of no traffic
- First request takes 30-60 seconds
- Not good for user experience

**Root Cause:**
- Render deletes free tier services after inactivity
- Reduces their infrastructure costs

**Solutions:**

#### Solution A: Setup Keep-Alive (Recommended - Free)
```bash
# In Render dashboard, create a Cron Job
Name: keep-api-alive
Schedule: */14 * * * * (every 14 minutes)
Command: curl https://your-api.onrender.com/health
```

#### Solution B: Upgrade to Paid
```
Plan: Standard ($7/month minimum)
Benefit: No spin-down, auto-scaling
Cost: ~$7/month
```

**How to Implement:**
1. Render Dashboard → Pricing
2. Click "Upgrade"
3. Select Standard plan
4. Confirm monthly charge

**Prevention:**
- Monitor response times in Vercel analytics
- Setup alerts if responses exceed 30 seconds
- Plan upgrade before going to many users

---

### Issue 2: Database Connection Errors

**Problem:**
```
Error: could not connect to server: Connection timed out
```

**Root Causes:**
- Wrong connection string
- Wrong password
- Supabase project not initialized
- Network/firewall issue

**Debug Checklist:**
- [ ] Is Supabase project "online" (green status)?
- [ ] Is DATABASE_URL set in Render environment?
- [ ] Does CONNECTION_URL have correct format?
  ```
  ✓ postgresql://postgres:PASSWORD@db.xxxx.supabase.co:5432/postgres
  ✗ postgresql://postgres:PASSWORD@db.xxxx.supabase.co:5432 (missing database)
  ✗ postgres://postgres:PASSWORD@db.xxxx (wrong protocol)
  ```
- [ ] Is password correct (copy from Supabase)?
- [ ] Can you test locally?
  ```bash
  psql "postgresql://postgres:PASSWORD@db.xxxx.supabase.co:5432/postgres" \
    -c "SELECT 1"
  # Should return (1 row)
  ```

**Solutions:**

#### Solution 1: Get Fresh Connection String
```
1. Supabase Dashboard
2. Settings → Database
3. Connection String
4. Select "URI" tab (!!important)
5. Copy exact string
6. Update DATABASE_URL in Render
7. Check spelling - especially password
```

#### Solution 2: Reset Database Password
```
1. Supabase Settings → Database
2. "Reset Database Password"
3. Generate new password
4. Get new connection string
5. Update Render environment
```

#### Solution 3: Verify Connectivity Locally
```bash
# Test if you can connect from your computer
export DB_URL="postgresql://postgres:PASSWORD@db.xxxx.supabase.co:5432/postgres"
psql "$DB_URL" -c "SELECT version();"

# Should return PostgreSQL version if working
```

**Prevention:**
- Save connection string securely
- Don't share with others
- Rotate password regularly
- Test before deploying

---

### Issue 3: "Module Not Found" on Backend Startup

**Problem:**
```
ModuleNotFoundError: No module named 'fastapi'
```

**Root Cause:**
- Missing dependency in requirements.txt
- Wrong Python version
- Installation failed during build

**Solutions:**

#### Solution 1: Check requirements.txt
Ensure your backend has these minimum dependencies:
```
fastapi==0.115.8
uvicorn==0.34.0
sqlalchemy==2.0.36
psycopg2-binary==2.9.9
python-dotenv==1.0.1
pydantic-settings==2.7.1
```

#### Solution 2: Add Missing Dependencies
```bash
# Test locally first
pip install -r backend/requirements.txt

# See what's missing if there are import errors
python backend/api/main.py
```

#### Solution 3: Force Render Rebuild
```
1. Render Dashboard
2. Select your service
3. Click "Clear build cache"
4. Click "Deploy" to rebuild
```

**Check Requirements Format:**
```
# ✓ Correct format
fastapi==0.115.8
numpy==1.26.4

# ✗ Wrong format
fastapi (too vague)
fastapi==latest (invalid version)
```

---

### Issue 4: CORS Errors in Frontend

**Problem:**
```
Access to XMLHttpRequest at 'https://api.onrender.com/login' 
from origin 'https://dashboard.vercel.app' 
has been blocked by CORS policy
```

**Root Cause:**
- Backend CORS not configured for frontend URL
- Frontend trying to reach wrong backend URL
- Typo in CORS configuration

**Solutions:**

#### Solution 1: Update Backend CORS Configuration
Edit `backend/api/main.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://smartcontainer-dashboard.vercel.app",  # Add your Vercel URL
        "http://localhost:3000",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**Then deploy:**
```bash
git add backend/api/main.py
git commit -m "Update CORS for Vercel domain"
git push origin main
# Wait for Render auto-redeploy
```

#### Solution 2: Verify Frontend API URL
In Vercel or local `.env`:
```
NEXT_PUBLIC_API_URL=https://smartcontainer-api.onrender.com
```

Check:
- [ ] No trailing slash: Good: `https://api.onrender.com`, Bad: `https://api.onrender.com/`
- [ ] Is it the correct Render URL?
- [ ] Is it accessible from browser?

#### Solution 3: Test CORS Manually
```bash
# Test if CORS headers are present
curl -H "Origin: https://smartcontainer-dashboard.vercel.app" \
     -H "Access-Control-Request-Method: POST" \
     -H "Access-Control-Request-Headers: Content-Type" \
     -X OPTIONS https://smartcontainer-api.onrender.com/auth/login \
     -v

# Should see "Access-Control-Allow-Origin" in response
```

---

## 🐛 Debugging Guide

### Backend Debugging

#### Check Render Logs
```
1. Render Dashboard
2. Select service
3. Click "Logs" tab
4. Scroll through recent logs
5. Look for ERROR or Exception lines
```

**Common log patterns:**
```
✓ "✓ Service live at" = Successfully started
✓ "GET /health 200" = Working correctly
✗ "ModuleNotFoundError" = Missing dependency
✗ "Connection refused" = Database issue
✗ "SSL: CERTIFICATE_VERIFY_FAILED" = SSL issue with database
```

#### Test Backend Directly
```bash
# Test health endpoint
curl https://smartcontainer-api.onrender.com/health -v

# Test with authentication
curl -X POST https://smartcontainer-api.onrender.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}' \
  -v
```

#### Check Environment Variables
```
1. Render Dashboard → Service
2. Settings → Environment
3. Verify each variable is correct
4. Look for typos or missing values
```

### Frontend Debugging

#### Check Vercel Logs
```
1. Vercel Dashboard
2. Select project
3. Deployments → click deployment
4. Logs tab
```

#### Check Browser Console
```
1. Visit frontend URL
2. Press F12 (Developer Tools)
3. Console tab
4. Look for red errors
5. Check Network tab for failed API calls
```

#### Test Frontend API
```javascript
// In browser console
fetch('https://your-api.onrender.com/health')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error)
```

### Database Debugging

#### Test Connection Directly
```bash
psql "postgresql://postgres:PASSWORD@db.xxxx.supabase.co:5432/postgres"

# Should show SQL prompt
postgres=>

# Try a query
SELECT * FROM users;
```

#### Check Database in Supabase UI
```
1. Supabase Dashboard
2. Table Editor
3. Select each table
4. Verify data exists
5. Look for errors
```

#### Run SQL Queries
```sql
-- Check table structure
\d users

-- Count rows
SELECT COUNT(*) FROM containers;

-- Check latest predictions
SELECT * FROM predictions ORDER BY created_at DESC LIMIT 10;

-- Check for errors
SELECT * FROM error_logs ORDER BY created_at DESC LIMIT 5;
```

---

## 📋 Configuration Reference

### Backend Environment Variables (Render)

**Required:**
```
DATABASE_URL=postgresql://postgres:PASSWORD@db.xxxx.supabase.co:5432/postgres
SECRET_KEY=your-generated-secret-key
```

**Recommended:**
```
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=10080
LOG_LEVEL=INFO
```

**Optional (Image Analysis):**
```
ROBOFLOW_API_KEY=your-api-key
ROBOFLOW_API_URL=https://api.roboflow.com
```

### Frontend Environment Variables (Vercel)

**Required:**
```
NEXT_PUBLIC_API_URL=https://your-api.onrender.com
```

**Optional:**
```
NEXT_PUBLIC_APP_NAME=SmartContainer
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

### Generate SECRET_KEY

```bash
# Option 1: Python (recommended)
python -c "import secrets; print(secrets.token_urlsafe(32))"

# Option 2: OpenSSL
openssl rand -hex 32

# Option 3: Ruby
ruby -e "require 'securerandom'; puts SecureRandom.base64(24)"

# Result should be ~43 characters
```

---

## ⚙️ Build Configuration Reference

### Render Build Settings

| Setting | Value |
|---------|-------|
| Build Command | `pip install -r requirements.txt` |
| Start Command | `uvicorn api.main:app --host 0.0.0.0 --port $PORT` |
| Python Version | 3.10 (in runtime.txt) |

### Vercel Build Settings

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Build Command | `npm run build` |
| Install Command | `npm install` |
| Root Directory | `frontend` |

---

## 🧪 Testing Checklist

### Pre-Deployment Tests (Local)

Run before pushing to GitHub:

```bash
# 1. Test backend locally
cd backend
python -m uvicorn api.main:app --reload

# 2. In another terminal, test health
curl http://localhost:8000/health

# 3. Test frontend locally
cd frontend
npm install
npm run dev

# 4. Visit http://localhost:3000 in browser
```

### Post-Deployment Tests (Staging)

After deployment:

- [ ] Backend health endpoint returns 200
- [ ] Frontend page loads without console errors
- [ ] Login endpoint responds
- [ ] Database tables exist in Supabase
- [ ] CORS headers present in responses
- [ ] Images load without errors
- [ ] API responses have correct content-type

---

## 📊 Monitoring Checklist

### Daily Checks
- [ ] Backend responding (curl health)
- [ ] Frontend loads (visual check)
- [ ] No spike in error rates (check logs)

### Weekly Checks
- [ ] Database size reasonable (Supabase)
- [ ] No failed deployments
- [ ] Response times acceptable

### Monthly Checks
- [ ] Security audit (secrets rotated?)
- [ ] Backup verification
- [ ] Performance trends
- [ ] Cost analysis (in case of upgrades)

---

## 🚀 Performance Tips

### Backend (Render)

**Optimize for cold starts:**
- Lazy load heavy imports
- Use connection pooling (Supabase → Settings → Database)
- Cache frequent queries
- Upgrade from free tier if slow

**Monitor response times:**
```bash
# Check latency
time curl https://api.onrender.com/health
# Should be <1000ms normally
# <5000ms acceptable on cold start
```

### Frontend (Vercel)

**Vercel automatically optimizes:**
- Static code splitting
- Image optimization
- Edge caching
- No additional config needed

### Database (Supabase)

**Ensure good performance:**
- Add indexes on frequently queried columns
- Use connection pooling for more than 20 connections
- Monitor query times in SQL Editor
- Upgrade to Pro for better performance

---

## 🔐 Security Checklist

### Before Going Live

- [ ] Change all default passwords
- [ ] Generate new SECRET_KEY (not example)
- [ ] Enable HTTPS (automatic in Vercel/Render)
- [ ] Configure CORS for specific domains (not *)
- [ ] Remove debug mode (if applicable)
- [ ] Audit all environment variables
- [ ] Check for hardcoded secrets in code

### Ongoing

- [ ] Rotate SECRET_KEY every 90 days
- [ ] Monitor for failed login attempts
- [ ] Review database access logs
- [ ] Update dependencies for security patches
- [ ] Monitor for unusual database queries

---

## 💰 Cost Estimation

| Service | Free Tier | Cost |
|---------|-----------|------|
| Vercel | Included | Free (generous) |
| Render | Included | Free + $7/month (upgrade) |
| Supabase | 500MB storage | Free for start |

**Total Monthly Cost:**
- Minimum: $0 (all free tiers)
- Recommended: ~$7 (upgrade Render to avoid spin-downs)
- Large Scale: $20-50+ (after growth)

---

## 📞 Getting Help

### Resources
- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **FastAPI Docs**: https://fastapi.tiangolo.com
- **Next.js Docs**: https://nextjs.org/docs

### Check These First
1. **Search GitHub Issues** - Someone may have had same issue
2. **Check Status Pages** - Services might be down
   - https://status.vercel.com
   - https://status.render.com
   - https://status.supabase.com
3. **Review Logs** - Most issues visible in logs
4. **Test Locally** - Reproduce issue before deploying

---

**Last Updated**: March 7, 2026
