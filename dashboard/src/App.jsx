import React, { useState, useEffect, useCallback } from 'react';
import Papa from 'papaparse';
import './index.css';

// Data configs
import { SAMPLE_DATA, computeMockRisk } from './data';

// Components
import Login from './pages/Login';
import Sidebar from './pages/Sidebar';

// Pages
import Overview from './pages/Overview';
import UploadData from './pages/UploadData';
import Containers from './pages/Containers';
import Settings from './pages/Settings';

/* ─── Loading Overlay ─── */
function LoadingOverlay({ progress, message }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9000, background: 'rgba(10,14,26,0.92)', backdropFilter: 'blur(12px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: 120, height: 120, marginBottom: 32 }}>
        <div style={{ position: 'absolute', inset: 0, border: '2px solid #1E2D45', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', inset: 0, border: '2px solid transparent', borderTop: '2px solid #00D4FF', borderRadius: '50%', animation: 'radarSpin 1.5s linear infinite' }} />
        <div style={{ position: 'absolute', inset: 15, border: '1px solid #1E2D45', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', inset: 15, border: '2px solid transparent', borderTop: '2px solid #FF3B30', borderRadius: '50%', animation: 'radarSpin 2s linear infinite reverse' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Orbitron', fontSize: 18, fontWeight: 700, color: '#00D4FF' }}>
          {progress}%
        </div>
      </div>
      <div style={{ fontFamily: 'Orbitron', fontSize: 14, color: '#00D4FF', letterSpacing: 3, marginBottom: 8 }}>ANALYSING</div>
      <div style={{ fontSize: 12, color: '#8B9AB5' }}>{message}</div>
      <div style={{ width: 280, height: 4, background: '#1E2D45', borderRadius: 2, marginTop: 20, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #0094B3, #00D4FF)', transition: 'width 0.3s', borderRadius: 2 }} />
      </div>
    </div>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');

  const [currentView, setCurrentView] = useState('overview');
  const [data, setData] = useState(SAMPLE_DATA);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadMsg, setLoadMsg] = useState('');

  const [clock, setClock] = useState(new Date());

  // Clock tick for header
  useEffect(() => { const t = setInterval(() => setClock(new Date()), 1000); return () => clearInterval(t); }, []);

  const handleLogin = (uid) => {
    setUserId(uid);
    setIsAuthenticated(true);
    setCurrentView('overview');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserId('');
  };

  // Shared generic CSV parser
  const processCSV = useCallback((file) => {
    setLoading(true); setProgress(0); setLoadMsg('Parsing CSV…');
    Papa.parse(file, {
      header: true, skipEmptyLines: true,
      complete: (result) => {
        const rows = result.data;
        setLoadMsg(`Processing ${rows.length.toLocaleString()} containers…`);
        let idx = 0; const scored = []; const batch = Math.max(1, Math.floor(rows.length / 50));
        const process = () => {
          const end = Math.min(idx + batch, rows.length);
          for (; idx < end; idx++) scored.push(computeMockRisk(rows[idx]));
          setProgress(Math.floor((idx / rows.length) * 100));
          setLoadMsg(`Scoring container ${idx.toLocaleString()} of ${rows.length.toLocaleString()}…`);
          if (idx < rows.length) requestAnimationFrame(process);
          else {
            setTimeout(() => {
              setData(scored);
              setLoading(false);
              setCurrentView('overview'); // redirect to overview on success
            }, 600);
          }
        };
        setTimeout(process, 400);
      },
    });
  }, []);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Determine current page component
  let ViewComponent;
  switch (currentView) {
    case 'overview': ViewComponent = <Overview data={data} />; break;
    case 'containers': ViewComponent = <Containers data={data} />; break;
    case 'upload': ViewComponent = <UploadData onFileLoaded={processCSV} />; break;
    case 'settings': ViewComponent = <Settings />; break;
    default: ViewComponent = <Overview data={data} />;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {loading && <LoadingOverlay progress={progress} message={loadMsg} />}

      <Sidebar currentView={currentView} setView={setCurrentView} onLogout={handleLogout} userId={userId} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        {/* Top Header */}
        <header style={{
          display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
          padding: '16px 32px', borderBottom: '1px solid #1E2D45',
          background: 'rgba(15,22,40,0.8)', backdropFilter: 'blur(10px)',
          position: 'sticky', top: 0, zIndex: 100, height: 60
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#30D158', animation: 'glow-green 2s infinite' }} />
              <span style={{ fontFamily: 'Orbitron', fontSize: 10, color: '#30D158', letterSpacing: 2 }}>NODE ACTIVE</span>
            </div>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#8B9AB5' }}>
              {clock.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} {clock.toLocaleTimeString('en-GB')}
            </span>
            <span style={{ fontFamily: 'Orbitron', fontSize: 9, color: '#0A0E1A', background: '#00D4FF', borderRadius: 4, padding: '3px 8px', letterSpacing: 1, fontWeight: 700 }}>VERIFIED</span>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '32px 40px', position: 'relative' }}>
          {ViewComponent}
        </main>
      </div>
    </div>
  );
}
