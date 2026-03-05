import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

function StatCard({ label, value, sub, color, icon, pulse }) {
    return (
        <div style={{
            background: 'rgba(20,28,46,0.7)', backdropFilter: 'blur(10px)', border: `1px solid ${pulse ? color + '60' : '#1E2D45'}`,
            borderRadius: 12, padding: '20px 24px', flex: 1, minWidth: 150,
            animation: `fadeInUp 0.5s ease-out both`,
            boxShadow: pulse ? `0 0 20px ${color}25` : 'none',
            transition: 'all 0.3s ease',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontFamily: 'Orbitron', fontSize: 10, color: '#8B9AB5', letterSpacing: 2 }}>{label}</span>
                <span style={{ fontSize: 16 }}>{icon}</span>
            </div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 28, fontWeight: 700, color: color || '#E8EDF5' }}>
                {value.toLocaleString()}
            </div>
            <div style={{ fontSize: 11, color: '#8B9AB5', marginTop: 4 }}>{sub}</div>
        </div>
    );
}

export default function Overview({ data }) {
    const stats = useMemo(() => {
        const total = data.length;
        const critical = data.filter(d => d.Risk_Level === 'Critical').length;
        const medium = data.filter(d => d.Risk_Level === 'Medium Risk').length;
        const low = data.filter(d => d.Risk_Level === 'Low Risk').length;
        const anomalies = data.filter(d => d.Anomaly_Flag).length;
        return { total, critical, medium, low, anomalies };
    }, [data]);

    const pieData = useMemo(() => [
        { name: 'Critical', value: stats.critical, color: '#FF3B30' },
        { name: 'Medium Risk', value: stats.medium, color: '#FF9500' },
        { name: 'Low Risk', value: stats.low, color: '#30D158' },
    ].filter(d => d.value > 0), [stats]);

    return (
        <div style={{ animation: 'fadeInUp 0.4s ease-out' }}>
            <h2 style={{ fontFamily: 'Orbitron', fontSize: 20, color: '#E8EDF5', marginBottom: 24, fontWeight: 700, letterSpacing: 1 }}>SYSTEM OVERVIEW</h2>

            {/* ── STATS CARDS ── */}
            <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
                <StatCard label="TOTAL" value={stats.total} sub="containers processed" icon="📦" />
                <StatCard label="CRITICAL" value={stats.critical} sub={`⚠ ${stats.total ? (100 * stats.critical / stats.total).toFixed(1) : 0}%`} color="#FF3B30" icon="🔴" pulse={stats.critical > 0} />
                <StatCard label="MEDIUM" value={stats.medium} sub={`⚡ ${stats.total ? (100 * stats.medium / stats.total).toFixed(1) : 0}%`} color="#FF9500" icon="🟠" />
                <StatCard label="LOW RISK" value={stats.low} sub={`✓ ${stats.total ? (100 * stats.low / stats.total).toFixed(1) : 0}%`} color="#30D158" icon="🟢" />
                <StatCard label="ANOMALIES" value={stats.anomalies} sub={`🔍 ${stats.total ? (100 * stats.anomalies / stats.total).toFixed(1) : 0}%`} color="#00D4FF" icon="🔎" />
            </div>

            {/* ── CHARTS ROW ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {/* Donut Chart */}
                <div style={{ background: 'rgba(20,28,46,0.7)', backdropFilter: 'blur(10px)', border: '1px solid #1E2D45', borderRadius: 12, padding: 24 }}>
                    <div style={{ fontFamily: 'Orbitron', fontSize: 11, color: '#00D4FF', letterSpacing: 2, marginBottom: 16 }}>RISK DISTRIBUTION</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                        <ResponsiveContainer width="50%" height={220}>
                            <PieChart>
                                <Pie data={pieData} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={3} strokeWidth={0}>
                                    {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
                                </Pie>
                                <Tooltip contentStyle={{ background: '#141C2E', border: '1px solid #1E2D45', borderRadius: 8, fontFamily: 'JetBrains Mono', fontSize: 12 }} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div style={{ flex: 1 }}>
                            {pieData.map((d, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                                    <div style={{ width: 12, height: 12, borderRadius: 3, background: d.color }} />
                                    <span style={{ fontSize: 13, color: '#8B9AB5', flex: 1 }}>{d.name}</span>
                                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: 16, color: '#E8EDF5', fontWeight: 600 }}>{d.value.toLocaleString()}</span>
                                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#8B9AB5', width: 40, textAlign: 'right' }}>
                                        {stats.total ? (100 * d.value / stats.total).toFixed(1) : 0}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity Mock */}
                <div style={{ background: 'rgba(20,28,46,0.7)', backdropFilter: 'blur(10px)', border: '1px solid #1E2D45', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontFamily: 'Orbitron', fontSize: 11, color: '#00D4FF', letterSpacing: 2, marginBottom: 16 }}>RECENT CRITICAL ALERTS</div>
                    <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {data.filter(d => d.Risk_Level === 'Critical').slice(0, 4).map((d, i) => (
                            <div key={i} style={{ padding: 12, background: 'rgba(255,59,48,0.05)', border: '1px solid rgba(255,59,48,0.2)', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, fontWeight: 600, color: '#FF3B30' }}>{d.Container_ID}</div>
                                    <div style={{ fontSize: 11, color: '#8B9AB5', marginTop: 4 }}>Weight Discrepancy Flag</div>
                                </div>
                                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 16, color: '#FF3B30', fontWeight: 700 }}>{d.Risk_Score.toFixed(3)}</div>
                            </div>
                        ))}
                        {data.filter(d => d.Risk_Level === 'Critical').length === 0 && (
                            <div style={{ color: '#8B9AB5', fontSize: 13, textAlign: 'center', marginTop: 40, fontFamily: 'JetBrains Mono' }}>
                                No critical alerts detected in the current dataset.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
