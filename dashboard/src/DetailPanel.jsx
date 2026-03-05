import React from 'react';
import { X, AlertTriangle, Shield, Zap } from 'lucide-react';
import { getRiskColor, getRiskGlow } from './data';

export default function DetailPanel({ container, onClose }) {
    if (!container) return null;
    const color = getRiskColor(container.Risk_Level);
    const glow = getRiskGlow(container.Risk_Level);

    const discPct = container.Declared_Weight > 0
        ? (((container.Measured_Weight - container.Declared_Weight) / container.Declared_Weight) * 100)
        : 0;
    const vpk = container.Declared_Weight > 0 ? container.Declared_Value / container.Declared_Weight : 0;

    const shapFeatures = [
        { name: 'Weight Discrepancy', value: Math.min(Math.abs(discPct) / 50, 1), direction: discPct > 10 ? 'risk' : 'safe' },
        { name: 'Dwell Time', value: Math.min(container.Dwell_Time_Hours / 150, 1), direction: container.Dwell_Time_Hours > 80 ? 'risk' : 'safe' },
        { name: 'Value per KG', value: Math.min(vpk / 5000, 1), direction: vpk > 1000 ? 'risk' : 'safe' },
        { name: 'Declared Value', value: Math.min(container.Declared_Value / 5000000, 1), direction: container.Declared_Value > 1000000 ? 'risk' : 'safe' },
        { name: 'Declaration Hour', value: (() => { const h = parseInt((container.Declaration_Time || '12:00').split(':')[0]); return (h < 6 || h > 20) ? 0.7 : 0.15; })(), direction: (() => { const h = parseInt((container.Declaration_Time || '12:00').split(':')[0]); return (h < 6 || h > 20) ? 'risk' : 'safe'; })() },
    ].sort((a, b) => b.value - a.value);

    const icon = container.Risk_Level === 'Critical' ? <AlertTriangle size={20} /> : container.Risk_Level === 'Medium Risk' ? <Zap size={20} /> : <Shield size={20} />;

    return (
        <>
            <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 998, backdropFilter: 'blur(4px)' }} />
            <div style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '520px', maxWidth: '95vw',
                background: 'rgba(20, 28, 46, 0.95)', backdropFilter: 'blur(20px)',
                borderLeft: `1px solid ${color}40`, zIndex: 999,
                animation: 'slideInRight 0.35s ease-out', overflowY: 'auto',
                boxShadow: `-8px 0 40px rgba(0,0,0,0.5)`,
            }}>
                {/* Header */}
                <div style={{ padding: '24px', borderBottom: '1px solid #1E2D45', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#8B9AB5', marginBottom: 4 }}>CONTAINER DETAIL</div>
                        <div style={{ fontFamily: 'Orbitron', fontSize: '18px', fontWeight: 700, color: '#E8EDF5' }}>{container.Container_ID}</div>
                    </div>
                    <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #1E2D45', borderRadius: 6, padding: 8, cursor: 'pointer', color: '#8B9AB5' }}>
                        <X size={16} />
                    </button>
                </div>

                {/* Risk Badge */}
                <div style={{ padding: '0 24px', marginTop: 20 }}>
                    <div style={{
                        background: glow, border: `1px solid ${color}50`, borderRadius: 12, padding: '20px',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        boxShadow: container.Risk_Level === 'Critical' ? `0 0 20px ${glow}` : 'none',
                    }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color, fontFamily: 'Orbitron', fontWeight: 700, fontSize: 16 }}>
                                {icon} {container.Risk_Level.toUpperCase()}
                            </div>
                            <div style={{ color: '#8B9AB5', fontSize: 12, marginTop: 4 }}>
                                Anomaly: {container.Anomaly_Flag ? '🔴 DETECTED' : '⚪ None'}
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 32, fontWeight: 700, color }}>{container.Risk_Score.toFixed(3)}</div>
                            <div style={{ fontSize: 11, color: '#8B9AB5' }}>RISK SCORE</div>
                        </div>
                    </div>
                </div>

                {/* SHAP Breakdown */}
                <div style={{ padding: '20px 24px' }}>
                    <div style={{ fontFamily: 'Orbitron', fontSize: 11, color: '#00D4FF', marginBottom: 16, letterSpacing: 2 }}>RISK BREAKDOWN</div>
                    {shapFeatures.map((f, i) => (
                        <div key={i} style={{ marginBottom: 14 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                <span style={{ fontSize: 12, color: '#E8EDF5' }}>{f.name}</span>
                                <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: f.direction === 'risk' ? '#FF3B30' : '#00D4FF' }}>
                                    {f.direction === 'risk' ? '▲ HIGH' : '▼ LOW'}
                                </span>
                            </div>
                            <div style={{ height: 6, background: '#0A0E1A', borderRadius: 3, overflow: 'hidden' }}>
                                <div style={{
                                    height: '100%', borderRadius: 3, width: `${f.value * 100}%`,
                                    background: f.direction === 'risk'
                                        ? 'linear-gradient(90deg, #FF3B30, #FF6B5E)'
                                        : 'linear-gradient(90deg, #0094B3, #00D4FF)',
                                    transition: 'width 0.8s ease-out',
                                }} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* AI Explanation */}
                <div style={{ padding: '0 24px 20px' }}>
                    <div style={{ fontFamily: 'Orbitron', fontSize: 11, color: '#00D4FF', marginBottom: 12, letterSpacing: 2 }}>AI EXPLANATION</div>
                    <div style={{
                        background: '#0A0E1A', border: '1px solid #1E2D45', borderRadius: 8, padding: 16,
                        fontFamily: 'JetBrains Mono', fontSize: 12, lineHeight: 1.6, color: '#E8EDF5',
                    }}>
                        {container.Explanation_Summary}
                    </div>
                </div>

                {/* Raw Data */}
                <div style={{ padding: '0 24px 32px' }}>
                    <div style={{ fontFamily: 'Orbitron', fontSize: 11, color: '#00D4FF', marginBottom: 12, letterSpacing: 2 }}>RAW DATA</div>
                    <div style={{ background: '#0A0E1A', border: '1px solid #1E2D45', borderRadius: 8, overflow: 'hidden' }}>
                        {[
                            ['Declared Weight', `${Number(container.Declared_Weight).toLocaleString()} kg`],
                            ['Measured Weight', `${Number(container.Measured_Weight).toLocaleString()} kg  (${discPct >= 0 ? '+' : ''}${discPct.toFixed(1)}%)`],
                            ['Declared Value', `$${Number(container.Declared_Value).toLocaleString()}`],
                            ['Value per KG', `$${vpk.toFixed(2)}`],
                            ['Dwell Time', `${container.Dwell_Time_Hours} hours`],
                            ['Origin', container.Origin_Country],
                            ['Destination', container.Destination_Country],
                            ['HS Code', container.HS_Code],
                            ['Trade Regime', container.Trade_Regime],
                            ['Shipping Line', container.Shipping_Line],
                            ['Declaration', `${container.Declaration_Date} ${container.Declaration_Time || ''}`],
                        ].map(([label, value], i) => (
                            <div key={i} style={{
                                display: 'flex', justifyContent: 'space-between', padding: '10px 16px',
                                borderBottom: i < 10 ? '1px solid #1E2D4530' : 'none',
                                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                            }}>
                                <span style={{ color: '#8B9AB5', fontSize: 12 }}>{label}</span>
                                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#E8EDF5' }}>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
