import React, { useMemo } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
    ScatterChart, Scatter, Cell, PieChart, Pie, Legend,
    AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { getRiskColor } from '../data';
import { TrendingUp, Globe, Weight, Clock, BarChart3, Target } from 'lucide-react';

const CARD = {
    background: '#FFFDF8', border: '1px solid #D9CDBA', borderRadius: 12,
    padding: 24, boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
};
const LABEL = {
    fontFamily: 'Quicksand', fontSize: 12, color: '#C06820',
    letterSpacing: 2, marginBottom: 16, fontWeight: 700,
    display: 'flex', alignItems: 'center', gap: 8
};
const TT = {
    background: '#FFFDF8', border: '1px solid #D9CDBA', borderRadius: 8,
    fontFamily: 'Quicksand', fontSize: 13, color: '#2C2418'
};

export default function Analytics({ data }) {

    // 1 — Risk score histogram (buckets of 0.1)
    const histogram = useMemo(() => {
        const buckets = Array.from({ length: 10 }, (_, i) => ({
            range: `${(i * 0.1).toFixed(1)}–${((i + 1) * 0.1).toFixed(1)}`,
            count: 0, low: i * 0.1
        }));
        data.forEach(d => {
            const idx = Math.min(Math.floor(d.Risk_Score * 10), 9);
            buckets[idx].count++;
        });
        return buckets;
    }, [data]);

    // 2 — Top origin countries
    const origins = useMemo(() => {
        const map = {};
        data.forEach(d => {
            const c = d.Origin_Country || 'Unknown';
            map[c] = (map[c] || 0) + 1;
        });
        return Object.entries(map)
            .map(([country, count]) => ({ country, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);
    }, [data]);

    // 3 — Weight discrepancy scatter data
    const weightData = useMemo(() => {
        return data.map(d => {
            const decl = Number(d.Declared_Weight) || 1;
            const meas = Number(d.Measured_Weight) || 0;
            const discrepancy = ((meas - decl) / decl * 100);
            return {
                id: d.Container_ID,
                riskScore: d.Risk_Score,
                discrepancy: parseFloat(discrepancy.toFixed(1)),
                level: d.Risk_Level
            };
        });
    }, [data]);

    // 4 — Dwell time distribution
    const dwellData = useMemo(() => {
        const buckets = [
            { range: '0–24h', count: 0 },
            { range: '24–48h', count: 0 },
            { range: '48–72h', count: 0 },
            { range: '72–120h', count: 0 },
            { range: '120h+', count: 0 },
        ];
        data.forEach(d => {
            const h = d.Dwell_Time_Hours || 0;
            if (h <= 24) buckets[0].count++;
            else if (h <= 48) buckets[1].count++;
            else if (h <= 72) buckets[2].count++;
            else if (h <= 120) buckets[3].count++;
            else buckets[4].count++;
        });
        return buckets;
    }, [data]);

    // 5 — Risk by trade regime
    const regimeData = useMemo(() => {
        const map = {};
        data.forEach(d => {
            const r = d.Trade_Regime || 'Unknown';
            if (!map[r]) map[r] = { regime: r, total: 0, critical: 0, medium: 0, low: 0 };
            map[r].total++;
            if (d.Risk_Level === 'Critical') map[r].critical++;
            else if (d.Risk_Level === 'Medium Risk') map[r].medium++;
            else map[r].low++;
        });
        return Object.values(map);
    }, [data]);

    // 6 — Summary stats for the top KPI row
    const kpis = useMemo(() => {
        const avgScore = data.length ? (data.reduce((s, d) => s + d.Risk_Score, 0) / data.length) : 0;
        const avgDwell = data.length ? (data.reduce((s, d) => s + (d.Dwell_Time_Hours || 0), 0) / data.length) : 0;
        const anomalyRate = data.length ? (data.filter(d => d.Anomaly_Flag).length / data.length * 100) : 0;
        const avgDisc = data.length ? (data.reduce((s, d) => {
            const decl = Number(d.Declared_Weight) || 1;
            const meas = Number(d.Measured_Weight) || 0;
            return s + Math.abs((meas - decl) / decl * 100);
        }, 0) / data.length) : 0;
        const uniqueOrigins = new Set(data.map(d => d.Origin_Country)).size;
        const criticalPct = data.length ? (data.filter(d => d.Risk_Level === 'Critical').length / data.length * 100) : 0;
        return { avgScore, avgDwell, anomalyRate, avgDisc, uniqueOrigins, criticalPct };
    }, [data]);

    return (
        <div style={{ animation: 'fadeInUp 0.4s ease-out' }}>
            <h2 style={{ fontFamily: 'Quicksand', fontSize: 22, color: '#2C2418', marginBottom: 24, fontWeight: 700, letterSpacing: 1 }}>
                RISK ANALYTICS
            </h2>

            {/* ── KPI CARDS ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 24 }}>
                {[
                    { label: 'AVG RISK', value: kpis.avgScore.toFixed(3), color: kpis.avgScore >= 0.5 ? '#C62828' : '#C06820', icon: <Target size={16} /> },
                    { label: 'CRITICAL %', value: `${kpis.criticalPct.toFixed(1)}%`, color: '#C62828', icon: <TrendingUp size={16} /> },
                    { label: 'ANOMALY RATE', value: `${kpis.anomalyRate.toFixed(1)}%`, color: '#E65100', icon: <BarChart3 size={16} /> },
                    { label: 'AVG WT DELTA', value: `${kpis.avgDisc.toFixed(1)}%`, color: '#C06820', icon: <Weight size={16} /> },
                    { label: 'AVG DWELL', value: `${kpis.avgDwell.toFixed(0)}h`, color: '#7A6E5D', icon: <Clock size={16} /> },
                    { label: 'ORIGINS', value: kpis.uniqueOrigins, color: '#2E7D32', icon: <Globe size={16} /> },
                ].map((k, i) => (
                    <div key={i} style={{
                        ...CARD, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 4
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#7A6E5D', marginBottom: 4 }}>
                            {React.cloneElement(k.icon, { color: k.color })}
                            <span style={{ fontFamily: 'Quicksand', fontSize: 10, letterSpacing: 1.5, fontWeight: 700 }}>{k.label}</span>
                        </div>
                        <div style={{ fontFamily: 'Quicksand', fontSize: 24, fontWeight: 700, color: k.color }}>{k.value}</div>
                    </div>
                ))}
            </div>

            {/* ── ROW 1: Histogram + Origins ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>

                {/* Risk Score Distribution */}
                <div style={CARD}>
                    <div style={LABEL}><BarChart3 size={16} color="#C06820" /> RISK SCORE DISTRIBUTION</div>
                    <ResponsiveContainer width="100%" height={260}>
                        <BarChart data={histogram} barSize={28}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#EDE7DB" />
                            <XAxis dataKey="range" tick={{ fontSize: 11, fill: '#7A6E5D', fontFamily: 'Quicksand' }} />
                            <YAxis tick={{ fontSize: 11, fill: '#7A6E5D', fontFamily: 'Quicksand' }} allowDecimals={false} />
                            <Tooltip contentStyle={TT} />
                            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                                {histogram.map((b, i) => (
                                    <Cell key={i} fill={b.low >= 0.5 ? '#C62828' : b.low >= 0.25 ? '#E65100' : '#2E7D32'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Top Origin Countries */}
                <div style={CARD}>
                    <div style={LABEL}><Globe size={16} color="#C06820" /> TOP ORIGIN COUNTRIES</div>
                    <ResponsiveContainer width="100%" height={260}>
                        <BarChart data={origins} layout="vertical" barSize={18}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#EDE7DB" />
                            <XAxis type="number" tick={{ fontSize: 11, fill: '#7A6E5D', fontFamily: 'Quicksand' }} allowDecimals={false} />
                            <YAxis dataKey="country" type="category" tick={{ fontSize: 12, fill: '#2C2418', fontFamily: 'Quicksand', fontWeight: 600 }} width={50} />
                            <Tooltip contentStyle={TT} />
                            <Bar dataKey="count" fill="#C06820" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* ── ROW 2: Weight Discrepancy Scatter + Dwell Time ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>

                {/* Weight Discrepancy vs Risk Score */}
                <div style={CARD}>
                    <div style={LABEL}><Weight size={16} color="#C06820" /> WEIGHT DISCREPANCY vs RISK SCORE</div>
                    <ResponsiveContainer width="100%" height={260}>
                        <ScatterChart>
                            <CartesianGrid strokeDasharray="3 3" stroke="#EDE7DB" />
                            <XAxis dataKey="discrepancy" name="Wt Δ%" tick={{ fontSize: 11, fill: '#7A6E5D', fontFamily: 'Quicksand' }}
                                label={{ value: 'Weight Δ%', position: 'insideBottom', offset: -5, style: { fontSize: 11, fill: '#7A6E5D', fontFamily: 'Quicksand' } }} />
                            <YAxis dataKey="riskScore" name="Risk" tick={{ fontSize: 11, fill: '#7A6E5D', fontFamily: 'Quicksand' }}
                                label={{ value: 'Risk Score', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#7A6E5D', fontFamily: 'Quicksand' } }} />
                            <Tooltip contentStyle={TT} formatter={(v, name) => [typeof v === 'number' ? v.toFixed(3) : v, name]} />
                            <Scatter data={weightData}>
                                {weightData.map((d, i) => (
                                    <Cell key={i} fill={getRiskColor(d.level)} opacity={0.7} />
                                ))}
                            </Scatter>
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>

                {/* Dwell Time Distribution */}
                <div style={CARD}>
                    <div style={LABEL}><Clock size={16} color="#C06820" /> DWELL TIME DISTRIBUTION</div>
                    <ResponsiveContainer width="100%" height={260}>
                        <AreaChart data={dwellData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#EDE7DB" />
                            <XAxis dataKey="range" tick={{ fontSize: 11, fill: '#7A6E5D', fontFamily: 'Quicksand' }} />
                            <YAxis tick={{ fontSize: 11, fill: '#7A6E5D', fontFamily: 'Quicksand' }} allowDecimals={false} />
                            <Tooltip contentStyle={TT} />
                            <defs>
                                <linearGradient id="dwellGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#C06820" stopOpacity={0.3} />
                                    <stop offset="100%" stopColor="#C06820" stopOpacity={0.02} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="count" stroke="#C06820" strokeWidth={2} fill="url(#dwellGrad)" dot={{ fill: '#C06820', r: 4 }} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* ── ROW 3: Risk by Trade Regime ── */}
            <div style={CARD}>
                <div style={LABEL}><TrendingUp size={16} color="#C06820" /> RISK BREAKDOWN BY TRADE REGIME</div>
                <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={regimeData} barSize={32}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#EDE7DB" />
                        <XAxis dataKey="regime" tick={{ fontSize: 12, fill: '#2C2418', fontFamily: 'Quicksand', fontWeight: 600 }} />
                        <YAxis tick={{ fontSize: 11, fill: '#7A6E5D', fontFamily: 'Quicksand' }} allowDecimals={false} />
                        <Tooltip contentStyle={TT} />
                        <Legend wrapperStyle={{ fontFamily: 'Quicksand', fontSize: 12, fontWeight: 600 }} />
                        <Bar dataKey="critical" name="Critical" stackId="a" fill="#C62828" radius={[0, 0, 0, 0]} />
                        <Bar dataKey="medium" name="Medium Risk" stackId="a" fill="#E65100" />
                        <Bar dataKey="low" name="Low Risk" stackId="a" fill="#2E7D32" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
