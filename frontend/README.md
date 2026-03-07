# Frontend - SmartContainer Risk Engine

React/Next.js dashboard for the SmartContainer Risk Engine with real-time analytics and risk visualization.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

**Dashboard available at**: `http://localhost:3000`

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js app router
│   │   ├── layout.jsx    # Root layout wrapper
│   │   ├── page.jsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   └── api.js        # API client configuration
│   │
│   ├── components/       # Reusable React components
│   │   ├── Login.jsx              # Authentication portal
│   │   ├── Overview.jsx           # Dashboard overview
│   │   ├── Containers.jsx         # Container registry
│   │   ├── Analytics.jsx          # Risk analytics
│   │   ├── ImageAnalysis.jsx      # Image damage analysis
│   │   ├── UploadData.jsx         # Data upload interface
│   │   ├── Settings.jsx           # User settings
│   │   ├── Admin.jsx              # Admin control panel
│   │   ├── DetailPanel.jsx        # Risk detail sidebar
│   │   └── Sidebar.jsx            # Navigation sidebar
│   │
│   ├── assets/           # Images, icons, static files
│   ├── data.js           # Data fetching & state management
│   ├── auth.js           # JWT authentication logic
│   └── App.css           # App-level styles
│
├── public/               # Static files (favicon, etc.)
├── package.json          # Dependencies & scripts
├── eslint.config.js      # ESLint configuration
└── .gitignore            # Git ignore rules
```

## 🔑 Test Credentials

```
Username: testadmin
Password: password123
```

## 📺 Key Features

- **Secure JWT Authentication** - Token-based login system
- **Real-time Dashboard** - Live metrics and risk tracking
- **Container Registry** - Detailed risk scoring and analysis
- **Analytics Module** - Charts, correlations, and insights
- **Image Analysis** - AI-powered container damage detection
- **Bulk Data Upload** - CSV import with drag-and-drop
- **Admin Panel** - User and role management

## 🚢 Render Deployment

### Quick Setup

1. Create **Web Service** on render.com
2. Connect GitHub repository  
3. **Root Directory**: `frontend`
4. **Build Command**: `npm install && npm run build`
5. **Start Command**: `npm run start`
6. **Environment**: `NEXT_PUBLIC_API_URL=https://your-backend.onrender.com`

## 📦 Key Dependencies

- **Next.js 14+** - React framework with SSR
- **React 18+** - UI library
- **Recharts** - Data visualization & charts
- **Lucide Icons** - Icon library

## 🔧 Development

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build
npm run start

# Lint code
npm run lint
```

## 📡 API Integration

The frontend communicates with your backend API:
- **Environment Variable**: `NEXT_PUBLIC_API_URL`
- **Default (local)**: `http://localhost:8000`
- **Production**: Set on Render dashboard

## 🐛 Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies issues?**
```bash
rm -r node_modules package-lock.json
npm install
```

**API not connecting?**
- Check backend is running
- Verify `NEXT_PUBLIC_API_URL` is correct
- Check browser console for CORS errors

---

For detailed docs, see [Backend README](../backend/README.md) and [System Architecture](../docs/ARCHITECTURE.md)
