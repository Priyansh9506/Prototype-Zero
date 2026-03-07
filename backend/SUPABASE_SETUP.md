# 🚀 Supabase Setup Guide for SmartContainer Risk Engine

Complete step-by-step guide to set up Supabase PostgreSQL for production deployment on Render.

## Why Supabase?

✅ **Free tier** - perfect for testing  
✅ **PostgreSQL** - production-grade database  
✅ **Works on Render** - unlike SQLite (ephemeral)  
✅ **Auto-scales** - grows with your needs  
✅ **Built-in backups** - automatic  
✅ **Easy setup** - 5 minutes  

---

## ⚠️ Why NOT SQLite on Render?

SQLite doesn't work on Render because:
- Render's filesystem is **ephemeral** (temporary)
- Every restart deletes your database file
- Your data disappears after 15 minutes of inactivity (free tier)
- Perfect for development, not production

**Solution**: Use Supabase PostgreSQL instead!

---

## 📋 Quick Setup (5 minutes)

### Step 1: Create Supabase Project

1. Open https://supabase.com
2. Click **Sign Up** (or **Start Your Project** if already have account)
3. Choose sign-up method (GitHub, Google, Email)
4. Create new Project:
   - Organization: Leave default or create new
   - Database Name: `smartcontainer` (or any name)
   - Password: **SAVE THIS** - you'll need it (or regenerate)
   - Region: Pick closest to your location
   - Click **Create new project**

**⏱️ Wait 2-3 minutes for project to initialize**

### Step 2: Get Connection String

Once project is ready:

1. Go to **Settings** (bottom left) → **Database**
2. Find **CONNECTION STRING** section
3. Make sure **URI** tab is selected (not Connection Pooler)
4. Under "PostgreSQL" section, **Copy** the full string

**Example of what you'll copy:**
```
postgresql://postgres:abc123XYZ_securepass@db.euhxzyx123abc.supabase.co:5432/postgres
```

**Parts of this string:**
- `postgres` = username (always postgres for Supabase)
- `abc123XYZ_securepass` = your database password
- `db.euhxzyx123abc.supabase.co` = your Supabase host
- `5432` = PostgreSQL port
- `postgres` = database name

### Step 3: Update Your .env File

**For Local Development:**

```bash
cd backend
nano .env  # or open in your editor
```

Change the `DATABASE_URL` line:

```env
DATABASE_URL=postgresql://postgres:abc123XYZ_securepass@db.euhxzyx123abc.supabase.co:5432/postgres
```

Replace with YOUR actual connection string from Step 2.

**Save the file** (`Ctrl+S` in nano, then `Ctrl+X` to exit)

### Step 4: Test Locally

```bash
cd backend

# Verify the connection
python verify_user.py
```

**Expected output:**
```
✓ Admin user 'testadmin' already exists
```

Or if first time:
```
✓ Test admin user 'testadmin' created successfully
  Login credentials:
    Username: testadmin
    Password: password123
```

**Success!** Your local Supabase connection works!

### Step 5: Deploy to Render

1. Go to Render Dashboard (https://dashboard.render.com)
2. Select your **SmartContainer** service
3. Go to **Settings** tab
4. Find **Environment** section
5. Click **Edit** next to DATABASE_URL
6. Replace value with your Supabase connection string
7. Click **Save**
8. Render auto-deploys

**Check the logs:**
- Click **Logs** tab
- You should see: `✓ Test admin user created successfully`
- Open the API URL and login!

---

## 🔐 Security Best Practices

### Protect Your Password

Your Supabase password is SECRET. Never:
- ❌ Commit `.env` to GitHub
- ❌ Share connection string online
- ❌ Post screenshots with password visible
- ❌ Have password in frontend code

Good practices:
- ✅ Store in `.env` (which is in `.gitignore`)
- ✅ Use Render's environment variable UI
- ✅ Rotate password if accidentally exposed
- ✅ Use strong passwords

### Rotate Password if Exposed

If you accidentally share your connection string:

1. Go to Supabase → Settings → Database
2. Click **Reset Database Password**
3. Update `.env` and Render with new password

---

## 🧪 Verify Everything Works

### Test From Command Line

```bash
# Connect to database
python -c "from src.config import settings; print(f'Database: {settings.DATABASE_URL}')"

# Should show: postgresql://postgres:...@db.xxx.supabase.co:5432/postgres
```

### Test From Browser

Once deployed to Render:

1. Go to your Render API URL
2. Add `/docs` - should see Swagger UI
3. **Login** with: testadmin / password123
4. **Authorize** with the token
5. Try `/api/containers` endpoint
6. Should return empty list (or your data)

### Check Database

In Supabase Dashboard:

1. Go to **SQL Editor** (left sidebar)
2. Click **New Query**
3. Run:
```sql
SELECT * FROM user;
```

Should see your `testadmin` user!

---

## 🆘 Troubleshooting

### "Connection refused" or "timeout"

**Cause**: Project is paused (free tier pauses after 1 week)

**Solution**:
1. Go to Supabase Dashboard
2. Settings → General → Pause Project (toggle on)
3. Wait 30 seconds for project to wake up
4. Try again

### "auth failed" or "password authentication failed"

**Cause**: Wrong password in connection string

**Solution**:
1. Go to Supabase → Settings → Database
2. Click **Reset Database Password**
3. Copy new password
4. Update `.env` with full new connection string

### "peer authentication failed"

**Cause**: Using connection pooler URL instead of direct URL

**Solution**:
1. In Supabase → Settings → Database
2. Make sure you copied from **URI** tab
3. Not from **Connection Pooler** tab
4. Or use direct URL format

### Still can't connect?

1. **Check format**:
   ```
   postgresql://postgres:PASSWORD@db.PROJECT_ID.supabase.co:5432/postgres
   ```

2. **Verify password** - is case-sensitive:
   - Copy from Supabase again if unsure
   - Special characters need to match exactly

3. **Test in Python**:
   ```python
   from sqlalchemy import create_engine
   engine = create_engine("YOUR_DATABASE_URL")
   with engine.connect() as conn:
       result = conn.execute("SELECT 1")
       print("Connection works!")
   ```

4. **Check Supabase status**: https://status.supabase.com

---

## 📊 Monitoring Your Database

### View Data in Supabase

1. Supabase Dashboard → **Table Editor** (left)
2. Select table (e.g., `user`, `container`)
3. See all your data in real-time

### Check Connection Logs

1. Supabase → **Logs** (left sidebar)
2. Filter by Database
3. See all connections and queries

### Monitor Usage

1. Supabase → Settings → **Usage**
2. See database size, connections, etc.
3. Free tier has generous limits

---

## 🎯 What's Created Automatically

When you run `python verify_user.py`, these tables are created:

```
user          - User accounts (admin, officer, pending)
container     - Shipment containers and risk scores
dashboard_log - Analytics data
```

No manual schema setup needed - SQLAlchemy creates everything!

---

## 🚀 Next Steps

1. ✅ Set up Supabase (done!)
2. ✅ Update DATABASE_URL in .env (done!)
3. ✅ Deploy to Render (done!)
4. **Now**: Start using your API!
   - Login with testadmin / password123
   - Upload container data
   - Analyze and score risks
   - View analytics

---

## 💡 Pro Tips

**Backup your data:**
```
Settings → Backups → Download backup manually
```

**Upgrade to paid** (when ready):
```
Settings → Billing → Switch to Pro ($25/month)
Keep free tier and paid tier at same time!
```

**Add more databases** (multiple projects):
```
Just create another Supabase project
Each gets its own CONNECTION_STRING
```

**Use pgAdmin** (advanced):
```
Connect pgAdmin to your Supabase database
SQL IDE for advanced queries
```

---

## 📚 Resources

- **Supabase Docs**: https://supabase.com/docs
- **PostgreSQL Docs**: https://www.postgresql.org/docs/
- **SQLAlchemy ORM**: https://docs.sqlalchemy.org/

---

**Your database is now production-ready!** 🎉

Questions? Check ENVIRONMENT_VARIABLES.md for more config examples.
