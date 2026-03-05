import React, { useState } from 'react';
import { Shield, Zap, Sliders, Database, Server, RefreshCw } from 'lucide-react';

export default function Settings() {
    const [threshold, setThreshold] = useState(0.5);
    const [modelType, setModelType] = useState('EnsV4');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div style={{ animation: 'fadeInUp 0.4s ease-out', maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Orbitron', fontSize: 20, color: '#E8EDF5', marginBottom: 24, fontWeight: 700, letterSpacing: 1 }}>SYSTEM SETTINGS</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* Risk Thresholds */}
                <div style={{ background: 'rgba(20,28,46,0.7)', backdropFilter: 'blur(10px)', border: '1px solid #1E2D45', borderRadius: 12, padding: 32 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <Sliders size={20} color="#00D4FF" />
                        <h3 style={{ fontFamily: 'Orbitron', fontSize: 14, color: '#E8EDF5', letterSpacing: 1 }}>RISK THRESHOLDS</h3>
                    </div>

                    <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#8B9AB5' }}>Critical Risk Boundary</span>
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#FF3B30', fontWeight: 600 }}>≥ {threshold.toFixed(2)}</span>
                    </div>
                    <input
                        type="range" min="0.1" max="0.9" step="0.01" value={threshold} onChange={(e) => setThreshold(parseFloat(e.target.value))}
                        style={{ width: '100%', accentColor: '#00D4FF', cursor: 'grab' }}
                    />
                    <p style={{ fontSize: 11, color: '#5C6A82', marginTop: 12 }}>Note: Modifying systemic thresholds requires Level 5 Commander clearance to take effect on operational databases.</p>
                </div>

                {/* Model Configuration */}
                <div style={{ background: 'rgba(20,28,46,0.7)', backdropFilter: 'blur(10px)', border: '1px solid #1E2D45', borderRadius: 12, padding: 32 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <Database size={20} color="#00D4FF" />
                        <h3 style={{ fontFamily: 'Orbitron', fontSize: 14, color: '#E8EDF5', letterSpacing: 1 }}>ACTIVE MODEL</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                        {[
                            { id: 'EnsV3', name: 'v3 (XGB Baseline)', perf: 'F1: 94.2%' },
                            { id: 'EnsV4', name: 'v4 (XGB+IF SMOTE)', perf: 'F1: 97.4%' },
                            { id: 'DLV1', name: 'DL v1 (Exp)', perf: 'F1: 95.1%' }
                        ].map(m => (
                            <div
                                key={m.id}
                                onClick={() => setModelType(m.id)}
                                style={{
                                    border: `1px solid ${modelType === m.id ? '#00D4FF' : '#1E2D45'}`,
                                    background: modelType === m.id ? 'rgba(0,212,255,0.05)' : '#0A0E1A',
                                    borderRadius: 8, padding: 16, cursor: 'pointer', transition: 'all 0.2s',
                                    position: 'relative', overflow: 'hidden'
                                }}
                            >
                                {modelType === m.id && <div style={{ position: 'absolute', top: 0, right: 0, padding: '4px 8px', background: '#00D4FF', color: '#0A0E1A', fontFamily: 'Orbitron', fontSize: 8, fontWeight: 800 }}>ACTIVE</div>}
                                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: '#E8EDF5', marginBottom: 4 }}>{m.name}</div>
                                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#8B9AB5' }}>{m.perf}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Server Connection */}
                <div style={{ background: 'rgba(20,28,46,0.7)', backdropFilter: 'blur(10px)', border: '1px solid #1E2D45', borderRadius: 12, padding: 32 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <Server size={20} color="#00D4FF" />
                        <h3 style={{ fontFamily: 'Orbitron', fontSize: 14, color: '#E8EDF5', letterSpacing: 1 }}>NODE STATUS</h3>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: '#0A0E1A', border: '1px solid #1E2D45', borderRadius: 8, marginBottom: 8 }}>
                        <span style={{ color: '#8B9AB5', fontSize: 13 }}>Primary HQ Database (US-EAST)</span>
                        <span style={{ color: '#30D158', fontFamily: 'JetBrains Mono', fontSize: 12 }}>● CONNECTED (14ms)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: '#0A0E1A', border: '1px solid #1E2D45', borderRadius: 8 }}>
                        <span style={{ color: '#8B9AB5', fontSize: 13 }}>Global Threat Intelligence Feed</span>
                        <span style={{ color: '#30D158', fontFamily: 'JetBrains Mono', fontSize: 12 }}>● SYNCED (2m ago)</span>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 16, marginTop: 16 }}>
                    {saved && <span style={{ fontFamily: 'Orbitron', fontSize: 11, color: '#30D158', letterSpacing: 1, animation: 'fadeInUp 0.3s' }}>SETTINGS APPLIED.</span>}
                    <button
                        onClick={handleSave}
                        style={{
                            background: 'linear-gradient(135deg, #0094B3, #00D4FF)', border: 'none', borderRadius: 8,
                            padding: '12px 32px', fontFamily: 'Orbitron', fontSize: 12, color: '#0A0E1A', fontWeight: 800,
                            cursor: 'pointer', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 8
                        }}
                    >
                        <RefreshCw size={14} /> APPLY CONFIGURATION
                    </button>
                </div>

            </div>
        </div>
    );
}
