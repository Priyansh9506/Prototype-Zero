# ✅ Deployment Checklist: Complete Step-by-Step

Use this checklist to track your progress through the complete deployment process.

---

## 🎯 Overview

**Total Time**: ~35-45 minutes  
**Services**: 3 (Supabase, Render, Vercel)  
**Complexity**: Beginner-friendly with copy-paste commands

---

# PHASE 1: Supabase Database Setup (5 minutes)

## [ ] 1.1 Create Supabase Account
- [ ] Go to https://supabase.com
- [ ] Sign up with GitHub/Google/Email
- [ ] Confirm email if needed

## [ ] 1.2 Create Project in Supabase
- [ ] Click "New Project"
- [ ] **Project Name**: `smartcontainer-prod`
- [ ] **Password**: Generate strong password or use auto-generated
- [ ] **Region**: Select closest region to your users
- [ ] **Pricing**: Free tier selected
- [ ] Click "Create new project"
- [ ] ⏱️ **Wait 2-3 minutes** for initialization

## [ ] 1.3 Verify Project is Online
- [ ] Go to Supabase Dashboard
- [ ] See "online" status (green)
- [ ] Can access Settings and Database menus

## [ ] 1.4 Get Connection String
- [ ] Go to: Settings (⚙️) → Database
- [ ] Find: "Connection String" section
- [ ] **⚠️ CRITICAL**: Click "URI" tab (NOT "Connection Pooler")
- [ ] Copy PostgreSQL connection string
- [ ] **SAVE IT**: Use in next phase
   ```
   Example: postgresql://postgres:PASSWORD@db.xxxxxxxxxxxx.supabase.co:5432/postgres
   ```

✅ **Checkpoint 1**: Connection string saved and verified

---

# PHASE 2: Backend Deployment on Render (15 minutes)

## [ ] 2.1 Commit Code to GitHub
- [ ] Open terminal in project folder
- [ ] Run: `git status` (see what changed)
- [ ] Run: `git add -A` (stage everything)
- [ ] Run: `git commit -m "Prepare for production deployment"`
- [ ] Run: `git push origin main` (push to GitHub)
- [ ] Verify on GitHub: Code looks good, latest commits visible

## [ ] 2.2 Create Render Account
- [ ] Go to https://render.com
- [ ] Sign up with GitHub (recommended)
- [ ] Authorize connection
- [ ] Verify email if needed

## [ ] 2.3 Connect GitHub to Render
- [ ] In Render Dashboard, look for GitHub connection
- [ ] If not connected: Click "Connect account"
- [ ] Authorize Render to access your GitHub repos
- [ ] Grant repository access

## [ ] 2.4 Create Web Service on Render
- [ ] Click "New +" button
- [ ] Select "Web Service"
- [ ] Select your GitHub repository
- [ ] Click "Connect"

## [ ] 2.5 Configure Web Service
- [ ] **Name**: `smartcontainer-api`
- [ ] **Environment**: Python 3
- [ ] **Region**: Closest to your users
- [ ] **Branch**: main
- [ ] **Build Command**: `pip install -r requirements.txt`
- [ ] **Start Command**: `uvicorn api.main:app --host 0.0.0.0 --port $PORT`
- [ ] **Instance Type**: Free (sufficient for start)

## [ ] 2.6 Add Environment Variables to Render
**Click "Advanced" or "Environment" section and add each:**

### Database Connection
```
DATABASE_URL=<PASTE YOUR SUPABASE CONNECTION STRING HERE>
```

### Security (Generate new!)
```
SECRET_KEY=<RUN COMMAND BELOW AND PASTE RESULT>
```
Generate SECRET_KEY:
```bash
python -c "import secrets; print(secrets.token_urlsafe(32))"
```

### Other Environment Variables
```
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=10080
```

### Optional (if using image analysis)
```
ROBOFLOW_API_KEY=<your-key-if-available>
ROBOFLOW_API_URL=https://api.roboflow.com
```

## [ ] 2.7 Deploy Backend
- [ ] Click "Create Web Service"
- [ ] Watch deployment logs scroll
- [ ] Wait for green "✓ Service live at" message (3-5 min)
- [ ] **SAVE YOUR API URL**: Will be like `https://smartcontainer-api.onrender.com`

## [ ] 2.8 Verify Backend Deployment
- [ ] Copy your Render URL
- [ ] Test in terminal or browser:
  ```bash
  curl https://your-smartcontainer-api.onrender.com/health
  ```
- [ ] Should see: `{"status":"healthy"}`

## [ ] 2.9 Set Up Keep-Alive for Free Tier (Important!)
**Free tier services spin down after 15 minutes. Choose one option:**

### Option A: Setup Cron Job (Recommended)
- [ ] In Render Dashboard, click "New +"
- [ ] Select "Cron Job"
- [ ] **Name**: `keep-api-alive`
- [ ] **Schedule**: `*/14 * * * *` (every 14 minutes)
- [ ] **Command**: 
  ```bash
  curl https://your-smartcontainer-api.onrender.com/health
  ```
- [ ] Click "Create Cron Job"

### Option B: Upgrade Plan
- [ ] Go to Render pricing
- [ ] Upgrade to Standard ($7/month) - removes spin-down

✅ **Checkpoint 2**: Backend running and accessible at your Render URL

---

# PHASE 3: Frontend Deployment on Vercel (10 minutes)

## [ ] 3.1 Create Vercel Account
- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub (recommended)
- [ ] Authorize GitHub connection

## [ ] 3.2 Import Project to Vercel
- [ ] Click "Add New" button
- [ ] Select "Project"
- [ ] Find your GitHub repository
- [ ] Click "Import"

## [ ] 3.3 Configure Frontend Project
- [ ] **Project Name**: `smartcontainer-dashboard` (or choose name)
- [ ] **Framework Preset**: Next.js (should auto-detect)
- [ ] **Root Directory**: Change to `./frontend`
- [ ] **Build Command**: `npm run build`
- [ ] **Install Command**: `npm install`
- [ ] **Output Directory**: `.next`

## [ ] 3.4 Add Environment Variables to Vercel
**In "Environment Variables" section:**
```
NEXT_PUBLIC_API_URL=https://your-smartcontainer-api.onrender.com
```

⚠️ **MUST start with `NEXT_PUBLIC_`** to be available in browser!

## [ ] 3.5 Deploy Frontend
- [ ] Click "Deploy"
- [ ] Wait for build and deployment (2-3 minutes)
- [ ] See "Congratulations" message
- [ ] **SAVE YOUR FRONTEND URL**: Should be like `https://smartcontainer-dashboard.vercel.app`

## [ ] 3.6 Verify Frontend Loads
- [ ] Click the Vercel preview link
- [ ] Should see dashboard load in browser
- [ ] Check if page loads without errors (open browser console)

✅ **Checkpoint 3**: Frontend accessible at your Vercel URL

---

# PHASE 4: Connect Frontend & Backend (5 minutes)

## [ ] 4.1 Update Backend CORS Settings
**Edit file**: `backend/api/main.py`

Find the CORS configuration (should be near top of file):
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://smartcontainer-dashboard.vercel.app",  # Add this line
        "http://localhost:3000",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## [ ] 4.2 Commit CORS Changes
- [ ] In terminal:
  ```bash
  git add backend/api/main.py
  git commit -m "Update CORS for Vercel production domain"
  git push origin main
  ```

## [ ] 4.3 Wait for Render Auto-Redeploy
- [ ] Go to Render Dashboard
- [ ] Watch "Recent Deployments"
- [ ] Wait for new deployment to complete (green status)
- [ ] This usually takes 2-3 minutes

## [ ] 4.4 Test Frontend-Backend Connection
- [ ] Visit your Vercel frontend URL
- [ ] Try to login or perform an action
- [ ] Check browser console (F12) for errors
- [ ] Should see successful API requests to your Render URL

✅ **Checkpoint 4**: Frontend can communicate with backend

---

# PHASE 5: End-to-End Testing (5 minutes)

## [ ] 5.1 Test Login
- [ ] Go to frontend: `https://your-domain.vercel.app`
- [ ] Try login with test credentials
- [ ] Should see authenticated dashboard

## [ ] 5.2 Test Data Upload (If available)
- [ ] Look for "Upload Data" or similar feature
- [ ] Upload test CSV file
- [ ] Should process without errors

## [ ] 5.3 Test Predictions
- [ ] Trigger a prediction or analysis
- [ ] Wait for results
- [ ] Check if data appears in dashboard

## [ ] 5.4 Verify Database (Supabase)
- [ ] Go to Supabase Dashboard
- [ ] Click "Table Editor"
- [ ] Check tables have data:
  - [ ] `users` table has your test account
  - [ ] `predictions` table has results
  - [ ] Other relevant tables populated

## [ ] 5.5 Test Data Persistence
- [ ] Refresh frontend page
- [ ] Data should still be visible (not lost)
- [ ] This confirms database is working

✅ **Checkpoint 5**: Complete end-to-end flow works!

---

# PHASE 6: Security & Best Practices (5 minutes)

## [ ] 6.1 Security Review
- [ ] [ ] Verify SECRET_KEY is strong and unique
- [ ] [ ] Check no hardcoded secrets in code (search for "password", "key", "token")
- [ ] [ ] Confirm all secrets are in Render environment variables
- [ ] [ ] Verify database password is not in any file

## [ ] 6.2 Supabase Security
- [ ] Go to Supabase project Settings
- [ ] Verify backups are enabled (should be auto)
- [ ] Note backup retention policy
- [ ] Optional: Enable row-level security for sensitive tables

## [ ] 6.3 Vercel Security
- [ ] Go to Vercel Project Settings → Domains
- [ ] Verify HTTPS is enabled (automatic)
- [ ] Check that only authorized people can deploy

## [ ] 6.4 Documentation
- [ ] [ ] Update README.md with:
  - [ ] Frontend URL
  - [ ] Backend API URL
  - [ ] How to access admin dashboard
  - [ ] Contact for support
- [ ] [ ] Save all URLs and credentials in secure location
- [ ] [ ] Document any custom environment variables

## [ ] 6.5 Monitoring Setup (Optional but recommended)
- [ ] [ ] Render: Enable email notifications for deployments
- [ ] [ ] Vercel: Check analytics dashboard periodically
- [ ] [ ] Supabase: Review backup status monthly

✅ **Checkpoint 6**: Deployment is secure and documented

---

# PHASE 7: Troubleshooting (If Issues Occur)

## Common Issues & Solutions

### ❌ "Frontend shows blank page"
**Debug steps:**
- [ ] Open browser console (F12)
- [ ] Check for errors
- [ ] Verify `NEXT_PUBLIC_API_URL` in Vercel environment
- [ ] Check backend is running (curl health endpoint)
- [ ] Ensure CORS is configured for your Vercel domain

**Fix:**
1. Verify backend URL is correct
2. Check CORS configuration in `api/main.py`
3. Redeploy both services
4. Clear browser cache (Ctrl+Shift+Delete)

---

### ❌ "Backend connection error"
**Debug steps:**
- [ ] Test backend directly: `curl https://your-api.onrender.com/health`
- [ ] Check Render logs for errors
- [ ] Verify DATABASE_URL environment variable
- [ ] Test database connection locally

**Fix:**
1. Check Render logs for detailed error
2. Verify Supabase connection string format
3. Test: `psql "your-connection-string"`
4. Check SECRET_KEY is set

---

### ❌ "Database connection timeout"
**Debug steps:**
- [ ] Go to Supabase → Settings → Database
- [ ] Check project status is "online"
- [ ] Verify connection string format
- [ ] Test connection: `psql "your-db-url"`

**Fix:**
1. Get fresh connection string from Supabase
2. Use "URI" tab, not "Connection Pooler"
3. Wait a few minutes and retry
4. Check Supabase status page

---

### ❌ "Service spins down" (Free Render tier)
**Expected behavior:**
- Free tier services spin down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds

**Fix:**
:
- [ ] Setup cron job to keep service alive (Phase 2.9 Option A)
- [ ] Or upgrade to paid plan ($7/month)

---

### ❌ "Tables not found in database"
**Debug steps:**
- [ ] Check backend logs in Render
- [ ] Verify DATABASE_URL is correct
- [ ] Check if backend started successfully

**Fix:**
1. Tables auto-create when backend starts
2. Check for error messages in Render logs
3. Manually verify connection: Open Supabase SQL Editor and run `SELECT * FROM users;`
4. If tables don't exist, backend might not have started correctly

---

## Getting Help

1. **Check Logs:**
   - Render: Dashboard → Logs tab
   - Vercel: Deployments → click deployment → logs
   - Supabase: SQL Editor for database queries

2. **Common places to look:**
   - GitHub commits (to see what changed)
   - Environment variables (for typos)
   - Connection strings (for format issues)

3. **Test utilities:**
   ```bash
   # Test backend health
   curl https://your-api.onrender.com/health
   
   # Test database
   psql "postgresql://postgres:PASSWORD@db.xxx.supabase.co:5432/postgres"
   
   # Check environment variables (Render)
   # Go to dashboard and review what was set
   ```

✅ **Completed**: Full deployment is operational!

---

## 🎉 Success Indicators

Your deployment is successful when:

- ✅ Frontend loads without errors at Vercel URL
- ✅ Backend health check responds (200 status)
- ✅ Database shows tables and data
- ✅ Login works with test credentials
- ✅ Data persists after page refresh
- ✅ No console errors in browser
- ✅ API requests show in network tab

---

## 📊 Deployment Summary Template

**Paste this into a file for your records:**

```
PRODUCTION DEPLOYMENT - COMPLETED ✅

Date: ________________
Deployed by: ________________

URLS:
- Frontend: https://your-dashboard.vercel.app
- Backend: https://your-api.onrender.com
- Database: Supabase project "smartcontainer-prod"

IMPORTANT CREDENTIALS (Secure Storage):
- Database Password: [Supabase → Settings → Database]
- SECRET_KEY: [Stored in Render environment]
- Supabase API URL: https://your-project.supabase.co

MONITORING:
- Backend logs: Render Dashboard → Logs
- Frontend logs: Vercel Dashboard → Analytics
- Database: Supabase Dashboard → Table Editor

NEXT STEPS:
- [ ] Setup uptime monitoring
- [ ] Configure custom domain
- [ ] Enable Supabase backups (Pro)
- [ ] Setup error alerts
- [ ] Monthly security review
```

---

**Last Updated**: March 7, 2026  
**Total Estimated Time**: 35-45 minutes  
**Difficulty**: Beginner-friendly with clear steps
