import React, { useState, useMemo } from 'react';
import { Search, Download, Filter } from 'lucide-react';
import Papa from 'papaparse';
import { getRiskColor, getRiskGlow } from '../data';

import DetailPanel from '../DetailPanel';

/* ─── Risk Badge ─── */
function RiskBadge({ level }) {
    const c = getRiskColor(level);
    const icons = { Critical: '⚠', 'Medium Risk': '⚡', 'Low Risk': '✓' };
    return (
        <span style={{
            background: getRiskGlow(level), color: c, border: `1px solid ${c}40`,
            borderRadius: 6, padding: '4px 10px', fontSize: 11, fontWeight: 600,
            fontFamily: 'JetBrains Mono', display: 'inline-flex', alignItems: 'center', gap: 4,
        }}>
            {icons[level]} {level.toUpperCase()}
        </span>
    );
}

/* ─── Risk Bar ─── */
function RiskBar({ score }) {
    const c = score >= 0.5 ? '#FF3B30' : score >= 0.25 ? '#FF9500' : '#30D158';
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 80, height: 6, background: '#0A0E1A', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${score * 100}%`, background: c, borderRadius: 3, transition: 'width 0.6s ease-out' }} />
            </div>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: c, fontWeight: 600, minWidth: 40 }}>{score.toFixed(3)}</span>
        </div>
    );
}

export default function Containers({ data }) {
    const [selected, setSelected] = useState(null);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');
    const [sortKey, setSortKey] = useState('Risk_Score');
    const [sortAsc, setSortAsc] = useState(false);

    const filtered = useMemo(() => {
        let d = [...data];
        if (filter !== 'All') d = d.filter(r => r.Risk_Level === filter);
        if (search) d = d.filter(r => String(r.Container_ID).toLowerCase().includes(search.toLowerCase()));
        d.sort((a, b) => {
            const av = a[sortKey], bv = b[sortKey];
            if (typeof av === 'number') return sortAsc ? av - bv : bv - av;
            return sortAsc ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
        });
        return d;
    }, [data, filter, search, sortKey, sortAsc]);

    const handleSort = (key) => { if (sortKey === key) setSortAsc(!sortAsc); else { setSortKey(key); setSortAsc(false); } };

    const handleExport = () => {
        const csv = Papa.unparse(filtered.map(d => ({ Container_ID: d.Container_ID, Risk_Score: d.Risk_Score, Risk_Level: d.Risk_Level, Anomaly_Flag: d.Anomaly_Flag, Explanation_Summary: d.Explanation_Summary })));
        const blob = new Blob([csv], { type: 'text/csv' }); const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = 'Risk_Predictions_Export.csv'; a.click();
    };

    return (
        <div style={{ animation: 'fadeInUp 0.4s ease-out', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)' }}>
            {selected && <DetailPanel container={selected} onClose={() => setSelected(null)} />}

            <h2 style={{ fontFamily: 'Orbitron', fontSize: 20, color: '#E8EDF5', marginBottom: 24, fontWeight: 700, letterSpacing: 1 }}>CONTAINER DATABASE</h2>

            {/* ── TABLE HEADER CONTROLS ── */}
            <div style={{
                background: 'rgba(20,28,46,0.7)', backdropFilter: 'blur(10px)', border: '1px solid #1E2D45',
                borderRadius: '12px 12px 0 0', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0
            }}>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid #1E2D45', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontFamily: 'Orbitron', fontSize: 12, color: '#00D4FF', letterSpacing: 2 }}>
                            FILTER & SEARCH
                        </span>
                        <span style={{ color: '#8B9AB5', fontFamily: 'JetBrains Mono', fontSize: 11, background: '#0A0E1A', padding: '4px 8px', borderRadius: 4, border: '1px solid #1E2D45' }}>
                            {filtered.length.toLocaleString()} records matched
                        </span>
                    </div>

                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={14} color="#8B9AB5" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search ID..."
                                style={{
                                    background: '#0A0E1A', border: '1px solid #1E2D45', borderRadius: 6, padding: '8px 12px 8px 32px',
                                    color: '#E8EDF5', fontFamily: 'JetBrains Mono', fontSize: 12, width: 220, outline: 'none',
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#00D4FF'} onBlur={(e) => e.target.style.borderColor = '#1E2D45'}
                            />
                        </div>
                        {['All', 'Critical', 'Medium Risk', 'Low Risk'].map((f) => (
                            <button key={f} onClick={() => setFilter(f)} style={{
                                background: filter === f ? (f === 'Critical' ? '#FF3B3020' : f === 'Medium Risk' ? '#FF950020' : f === 'Low Risk' ? '#30D15820' : '#00D4FF15') : 'transparent',
                                border: `1px solid ${filter === f ? (f === 'Critical' ? '#FF3B3060' : f === 'Medium Risk' ? '#FF950060' : f === 'Low Risk' ? '#30D15860' : '#00D4FF40') : '#1E2D45'}`,
                                borderRadius: 6, padding: '6px 12px', fontFamily: 'Inter', fontSize: 11, fontWeight: 500,
                                color: filter === f ? (getRiskColor(f) || '#00D4FF') : '#8B9AB5', cursor: 'pointer',
                            }}>
                                {f}
                            </button>
                        ))}
                        <button onClick={handleExport} style={{
                            background: 'rgba(255,255,255,0.05)', border: '1px solid #1E2D45', borderRadius: 6,
                            padding: '6px 12px', fontFamily: 'Orbitron', fontSize: 11, color: '#E8EDF5',
                            cursor: 'pointer', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 6, marginLeft: 8
                        }}>
                            <Download size={12} /> EXPORT
                        </button>
                    </div>
                </div>

                {/* ── TABLE SCROLL VIEW ── */}
                <div style={{ flex: 1, overflowY: 'auto', overflowX: 'auto', borderRadius: '0 0 12px 12px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ position: 'sticky', top: 0, background: 'rgba(20,28,46,0.95)', backdropFilter: 'blur(8px)', zIndex: 10 }}>
                            <tr style={{ borderBottom: '1px solid #1E2D45' }}>
                                {[
                                    { key: 'Container_ID', label: 'CONTAINER ID' },
                                    { key: 'Risk_Score', label: 'RISK SCORE' },
                                    { key: 'Risk_Level', label: 'RISK LEVEL' },
                                    { key: 'Anomaly_Flag', label: 'ANOMALY' },
                                    { key: 'Declared_Weight', label: 'DECL. WT (KG)' },
                                    { key: 'Origin_Country', label: 'ORIGIN' },
                                    { key: null, label: 'ACTION' },
                                ].map((col, i) => (
                                    <th key={i} onClick={() => col.key && handleSort(col.key)} style={{
                                        padding: '16px', textAlign: 'left', fontFamily: 'Orbitron', fontSize: 10,
                                        color: '#8B9AB5', letterSpacing: 1.5, cursor: col.key ? 'pointer' : 'default',
                                        background: sortKey === col.key ? 'rgba(0,212,255,0.05)' : 'transparent',
                                        whiteSpace: 'nowrap', userSelect: 'none',
                                    }}>
                                        {col.label} {sortKey === col.key && <span style={{ color: '#00D4FF' }}>{sortAsc ? '▲' : '▼'}</span>}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.slice(0, 300).map((row, i) => (
                                <tr key={row.Container_ID + '-' + i}
                                    onClick={() => setSelected(row)}
                                    style={{
                                        borderBottom: '1px solid #1E2D4525', cursor: 'pointer',
                                        animation: `fadeInUp 0.35s ease-out ${Math.min(i * 15, 400)}ms both`,
                                        transition: 'background 0.2s, box-shadow 0.2s',
                                        background: row.Risk_Level === 'Critical' ? 'rgba(255,59,48,0.04)' : 'transparent',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = '#1A244040'; e.currentTarget.style.boxShadow = 'inset 4px 0 0 #00D4FF'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = row.Risk_Level === 'Critical' ? 'rgba(255,59,48,0.04)' : 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    <td style={{ padding: '16px', fontFamily: 'JetBrains Mono', fontSize: 13, fontWeight: 500, color: '#E8EDF5' }}>
                                        {row.Container_ID}
                                    </td>
                                    <td style={{ padding: '16px' }}><RiskBar score={row.Risk_Score} /></td>
                                    <td style={{ padding: '16px' }}><RiskBadge level={row.Risk_Level} /></td>
                                    <td style={{ padding: '16px' }}>
                                        {row.Anomaly_Flag ? (
                                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#FF3B30', fontFamily: 'JetBrains Mono', fontSize: 11 }}>
                                                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF3B30', animation: 'pulse-dot 1.5s infinite', display: 'inline-block' }} /> MATCH
                                            </span>
                                        ) : <span style={{ color: '#8B9AB5', fontFamily: 'JetBrains Mono', fontSize: 11 }}>— CLEAR</span>}
                                    </td>
                                    <td style={{ padding: '16px', fontFamily: 'JetBrains Mono', fontSize: 12, color: '#E8EDF5' }}>
                                        {Number(row.Declared_Weight).toLocaleString()}
                                    </td>
                                    <td style={{ padding: '16px', fontFamily: 'JetBrains Mono', fontSize: 12, color: '#8B9AB5' }}>
                                        {row.Origin_Country || '—'}
                                    </td>
                                    <td style={{ padding: '16px' }}>
                                        <button style={{
                                            background: 'transparent', border: '1px solid #00D4FF50', borderRadius: 4,
                                            padding: '4px 12px', fontFamily: 'Orbitron', fontSize: 10, color: '#00D4FF',
                                            cursor: 'pointer', letterSpacing: 1,
                                        }}>
                                            INSPECT
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filtered.length === 0 && (
                        <div style={{ padding: 64, textAlign: 'center', color: '#8B9AB5', fontFamily: 'JetBrains Mono', fontSize: 13 }}>
                            NO CONTAINERS FOUND MATCHING YOUR CRITERIA
                        </div>
                    )}
                    {filtered.length > 300 && (
                        <div style={{ padding: 16, textAlign: 'center', fontSize: 12, color: '#5C6A82', fontFamily: 'JetBrains Mono', borderTop: '1px solid #1E2D45' }}>
                            Showing top 300 of {filtered.length.toLocaleString()} matching records. Use narrower search.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
