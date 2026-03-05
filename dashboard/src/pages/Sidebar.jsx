import React from 'react';
import { Hexagon, LayoutDashboard, Database, List, Settings, LogOut } from 'lucide-react';

export default function Sidebar({ currentView, setView, onLogout, userId }) {
    const menuItems = [
        { id: 'overview', label: 'OVERVIEW', icon: <LayoutDashboard size={18} /> },
        { id: 'containers', label: 'CONTAINERS', icon: <List size={18} /> },
        { id: 'upload', label: 'DATA UPLOAD', icon: <Database size={18} /> },
        { id: 'settings', label: 'SETTINGS', icon: <Settings size={18} /> },
    ];

    return (
        <div style={{
            width: 260,
            background: 'rgba(15,22,40,0.95)',
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid #1E2D45',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            position: 'sticky',
            top: 0
        }}>
            {/* Brand */}
            <div style={{ padding: '24px 24px 32px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid rgba(30,45,69,0.5)' }}>
                <Hexagon size={28} color="#00D4FF" strokeWidth={2.5} />
                <div>
                    <div style={{ fontFamily: 'Orbitron', fontSize: 14, fontWeight: 700, color: '#E8EDF5', letterSpacing: 0.5 }}>Risk Engine</div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#00D4FF' }}>v4.0.0-PROD</div>
                </div>
            </div>

            {/* User Info */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontFamily: 'Orbitron', fontSize: 10, color: '#8B9AB5', letterSpacing: 2 }}>CURRENT SESSION</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#0A0E1A', padding: '12px', borderRadius: 8, border: '1px solid #1E2D45' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#30D158', animation: 'glow-green 2s infinite' }} />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, fontWeight: 600, color: '#E8EDF5' }}>{userId || 'OFFICER_XYZ'}</div>
                        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#8B9AB5' }}>Clearance: LEVEL 4</div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, padding: '0 16px', marginTop: 16 }}>
                <div style={{ fontFamily: 'Orbitron', fontSize: 10, color: '#8B9AB5', letterSpacing: 2, marginBottom: 16, paddingLeft: 8 }}>NAVIGATION</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {menuItems.map(item => {
                        const isActive = currentView === item.id;
                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => setView(item.id)}
                                    style={{
                                        width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                                        padding: '12px 16px', borderRadius: 8, cursor: 'pointer',
                                        background: isActive ? 'rgba(0,212,255,0.1)' : 'transparent',
                                        border: `1px solid ${isActive ? 'rgba(0,212,255,0.3)' : 'transparent'}`,
                                        color: isActive ? '#00D4FF' : '#8B9AB5',
                                        fontFamily: 'Orbitron', fontSize: 12, letterSpacing: 1, fontWeight: isActive ? 600 : 400,
                                        textAlign: 'left', transition: 'all 0.2s', position: 'relative', overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = '#E8EDF5';
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = '#8B9AB5';
                                            e.currentTarget.style.background = 'transparent';
                                        }
                                    }}
                                >
                                    {isActive && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: '#00D4FF', boxShadow: '0 0 10px #00D4FF' }} />}
                                    {item.icon}
                                    {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Logout */}
            <div style={{ padding: '24px' }}>
                <button
                    onClick={onLogout}
                    style={{
                        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        padding: '12px', borderRadius: 8, cursor: 'pointer',
                        background: 'transparent', border: '1px solid #1E2D45',
                        color: '#8B9AB5', fontFamily: 'Orbitron', fontSize: 11, letterSpacing: 1,
                        transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FF3B30';
                        e.currentTarget.style.borderColor = 'rgba(255,59,48,0.4)';
                        e.currentTarget.style.background = 'rgba(255,59,48,0.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#8B9AB5';
                        e.currentTarget.style.borderColor = '#1E2D45';
                        e.currentTarget.style.background = 'transparent';
                    }}
                >
                    <LogOut size={16} /> END SESSION
                </button>
            </div>
        </div>
    );
}
