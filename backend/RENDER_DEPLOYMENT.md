# 🚀 Deploy to Render with Supabase - Complete Guide

Complete step-by-step guide to deploy SmartContainer Risk Engine to Render with Supabase PostgreSQL.

---

## 📋 Prerequisites

- GitHub account with code pushed
- Supabase project created (see SUPABASE_SETUP.md)
- Supabase connection string ready
- Render account (free): https://render.com

---

## ⚠️ CRITICAL: Why NOT SQLite on Render?

❌ SQLite on Render = **Data Loss**
- Render deletes files on restart
- You lose your database
- Not suitable for production

✅ Supabase PostgreSQL = **Persistent Data**
- Database survives restarts
- Auto-backups
- Scales automatically

**If you try SQLite on Render, you'll get errors and data loss!**

---

## Step-by-Step Deployment

### Phase 1: Prepare Supabase (5 minutes)

#### 1.1 Create Supabase Project

1. Go to https://supabase.com
2. Click **Sign Up** or **Start Your Project**
3. Sign in with GitHub/Google/Email
4. Click **New Project**
5. Fill in:
   - Organization: (default or new)
   - Project Name: `smartcontainer`
   - Database Password: **SAVE THIS PASSWORD!**
   - Region: Closest to you
   - Pricing: Free tier
6. Click **Create new project**
7. **⏱️ Wait 2-3 minutes** for initialization

#### 1.2 Get Connection String

Once project is ready (check email or dashboard):

1. In Supabase Dashboard, go to **Settings** (⚙️ bottom left)
2. Click **Database**
3. Find **Connection String** section
4. **IMPORTANT**: Select **URI** tab (not Connection Pooler!)
5. Under PostgreSQL, click the copy icon
6. Save it somewhere safe - you'll use it soon

**Your connection string looks like:**
```
postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_ID.supabase.co:5432/postgres
```

---

### Phase 2: Prepare Your Backend Code (Already Done!)

✅ Your code is already Supabase-ready:
- Database.py has SSL support
- requirements.txt includes psycopg2-binary
- .env.example has Supabase examples
- Full documentation included

**Nothing to change in your code!**

---

### Phase 3: Push Code to GitHub

1. Make sure your latest code is committed:
   ```bash
   cd d:\Prototype\Prototype-Zero-v2
   git add -A
   git commit -m "Add Supabase support"
   git push origin main
   ```

2. Verify GitHub has your latest code:
   - Go to https://github.com/your-username/your-repo
   - Check `backend/` folder has all files

---

### Phase 4: Configure Render

#### 4.1 Create New Web Service

1. Go to https://dashboard.render.com
2. Click **New +**
3. Select **Web Service**
4. **Connect to GitHub**
   - Search for your repository
   - Click **Connect**

#### 4.2 Configure Service

1. Fill in the form:
   - **Name**: `smartcontainer-api` (or any name)
   - **Root Directory**: `backend` ← **IMPORTANT!**
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python -m uvicorn api.main:app --host 0.0.0.0 --port $PORT`
   - **Environment**: Python
   - **Pricing Plan**: Free

2. Click **Create Web Service**

**⏱️ Build takes 3-5 minutes...**

#### 4.3 Set Environment Variables

While it's building, add your environment variables:

1. Go to **Environment** tab (in your service dashboard)
2. Click **Add Environment Variable** for each:

| Name | Value |
|------|-------|
| `ENVIRONMENT` | `production` |
| `DATABASE_URL` | `postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_ID.supabase.co:5432/postgres` |
| `SECRET_KEY` | Generate with: `python -c "import secrets; print(secrets.token_urlsafe(32))"` |
| `CORS_ORIGINS` | `https://your-frontend.onrender.com,https://yourdomain.com` |
| `ROBOFLOW_API_KEY` | (leave empty if not using image analysis) |
| `LOG_LEVEL` | `WARNING` |

**For DATABASE_URL**: Copy the full string from Supabase step 1.2, paste it exactly.

Click **Save changes**

#### 4.4 Verify Deployment

1. Go to **Logs** tab in Render dashboard
2. Watch the logs in real-time
3. Look for success messages like:
   ```
   ✓ Test admin user created successfully
   Web service started successfully
   ```

4. Once complete, you'll see a green checkmark

**Deployment done!** 🎉

---

## ✅ Test Your Deployment

### Test 1: Check the API is Running

1. In Render dashboard, find your service
2. Copy the **Service URL** (like: https://smartcontainer-api.onrender.com)
3. Open in browser: `https://your-service-url/docs`
4. You should see Swagger API documentation

### Test 2: Try to Login

1. In Swagger UI, click **Authorize** button
2. Fill in:
   - Username: `testadmin`
   - Password: `password123`
3. Click **Authorize**
4. You should get a JWT token

### Test 3: Make an API Call

1. In Swagger, find `/api/containers` endpoint
2. Click **Try it out**
3. Click **Execute**
4. Should return a list (empty or with data)

**If all 3 tests pass: Your API is live!** ✅

---

## 🌐 Connect Frontend to Backend

### Update Frontend Environment Variable

In your frontend project:

1. Create `.env.local` in `frontend/` folder:
   ```env
   NEXT_PUBLIC_API_URL=https://your-service-url.onrender.com
   ```

2. Replace `your-service-url` with your actual Render service URL

3. Redeploy frontend on Render

4. Frontend will now communicate with your backend Supabase database!

---

## 📊 Monitor Your Deployment

### View Logs

In Render Dashboard:
- **Logs** tab: See real-time API logs
- **Metrics** tab: See CPU, memory, requests
- **Events** tab: Deployment history

### Check Database

In Supabase Dashboard:
- **Table Editor**: View your data in real-time
- **Logs**: See all database connections
- **Usage**: Monitor storage and connections

### Check Uptime

In Render Dashboard:
- **Health** check indicator (green = good)
- `https://your-service-url/docs` should be responsive

---

## 🐛 Troubleshooting Deployment

### Issue: "Build failed"

**Check the logs:**
1. Click **Logs** tab in Render
2. Look for error message
3. Common causes:
   - Typo in Python code
   - Missing import
   - Syntax error

**Solution**:
1. Fix the error locally
2. Commit and push to GitHub
3. Render auto-redeploys
4. Check logs again

### Issue: "Database connection refused"

**Cause**: Supabase connection string wrong or project paused

**Solution**:
1. Check DATABASE_URL in Render environment
2. Verify it came from Supabase (not made up)
3. Check Supabase project is active (Settings → Pause Project)
4. If paused, toggle wake-up
5. Wait 30 seconds, then redeploy in Render

### Issue: "401 Unauthorized" errors

**Cause**: SECRET_KEY not set correctly

**Solution**:
1. Generate new SECRET_KEY: `python -c "import secrets; print(secrets.token_urlsafe(32))"`
2. Update in Render environment variables
3. Click **Manual Deploy** to restart

### Issue: CORS errors in browser console

**Cause**: CORS_ORIGINS not set to your frontend URL

**Solution**:
1. Get your frontend URL from Render (e.g., https://my-frontend.onrender.com)
2. Update CORS_ORIGINS in Render env vars
3. Include protocol (https://) and no trailing slash
4. Redeploy

### Issue: "Pool timeout exceeded"

**Cause**: Too many simultaneous connections

**Solution**:
1. This is normal on free tier with limited connections
2. Upgrade Supabase to Pro plan ($25/month)
3. Or optimize code to reuse connections

---

## 🔐 Security Checklist

- [ ] SECRET_KEY is random and strong (not default)
- [ ] DATABASE_PASSWORD is in Supabase only (not in code)
- [ ] CORS_ORIGINS are your actual domains (not wildcard)
- [ ] ENVIRONMENT=production
- [ ] No `.env` file committed to GitHub
- [ ] Password rotated if accidentally exposed

---

## 💰 Cost Breakdown

**Monthly Cost for Production:**

| Service | Free Tier | Paid Tier | Notes |
|---------|-----------|-----------|-------|
| Supabase | $0 | $25+ | 500MB free, 1GB+ paid |
| Render | $0* | $7+ | 750 free hours/month |
| Total | $0/month | $32+/month | Includes all hosting |

*Render free tier works but auto-pauses after 15 min inactivity

---

## 🎯 Next Steps

1. ✅ Create Supabase project
2. ✅ Deploy to Render
3. ✅ Test API endpoints
4. ✅ Connect frontend to backend
5. 🎉 Your system is live!

---

## 📚 If Something Goes Wrong

1. **Check logs**: Render **Logs** tab and Supabase **Logs** tab
2. **Test locally**: `python verify_user.py` and `python -m uvicorn...`
3. **Read guides**: SUPABASE_SETUP.md and ENVIRONMENT_VARIABLES.md
4. **Common issues**: See troubleshooting section above

---

## ✨ Smart Tips

### Auto-Redeploy on GitHub Push

Render automatically redeploys when you push to GitHub! Just:
```bash
git add -A
git commit -m "Update API"
git push origin main
```

Render will rebuild and deploy automatically.

### Scale Without Downtime

When you need more power:
1. Supabase: Settings → Billing → Upgrade to Pro
2. Render: Settings → Pricing Plan → Choose higher tier
3. No data loss or downtime!

### Monitor Errors

Set up error tracking (optional):
- Sentry: https://sentry.io (free tier)
- DataDog: https://datadog.com
- NewRelic: https://newrelic.com

---

## 🎉 Success!

Your SmartContainer Risk Engine is now:
- ✅ Running on Render (scalable cloud)
- ✅ Using Supabase PostgreSQL (persistent database)
- ✅ Deployed globally
- ✅ Production-ready
- ✅ Monitoring-enabled

**Your API is live and ready for users!**

---

**Questions?** Read SUPABASE_SETUP.md or check the logs!
