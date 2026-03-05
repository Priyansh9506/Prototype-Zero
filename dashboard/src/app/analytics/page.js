'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, ScatterChart, Scatter, ZAxis, CartesianGrid, Treemap } from 'recharts';
import { loadDashboardData } from '@/lib/data';

const COLORS = {
  cyan: '#06b6d4', purple: '#8b5cf6', emerald: '#10b981',
  red: '#ef4444', amber: '#f59e0b', pink: '#ec4899',
  blue: '#3b82f6', indigo: '#6366f1', teal: '#14b8a6',
};

const PALETTE = [COLORS.cyan, COLORS.purple, COLORS.emerald, COLORS.red, COLORS.amber, COLORS.pink, COLORS.blue, COLORS.indigo, COLORS.teal];

export default function AnalyticsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="progress-overlay" style={{ position: 'relative', background: 'transparent' }}><div className="progress-card glass-card"><div className="spinner" /></div></div>;
  if (!data) return <div style={{ textAlign: 'center', padding: 80, color: 'var(--text-muted)' }}>No data available</div>;

  const predictions = data.predictions || [];
  const countryRisk = data.country_risk || [];

  // Country Risk Ranking (top 15 by avg risk)
  const topCountries = countryRisk
    .filter(c => c.count >= 5)
    .sort((a, b) => b.mean - a.mean)
    .slice(0, 15)
    .map(c => ({ ...c, mean: Number(c.mean?.toFixed(1)), origin_country: c.origin_country }));

  // Value vs Weight Scatter
  const scatterData = predictions
    .filter((_, i) => i % 3 === 0)
    .map(p => ({
      x: Math.log10(Math.max(p.declared_value || 1, 1)),
      y: Math.log10(Math.max(p.declared_weight || 1, 1)),
      risk: p.risk_score,
      id: p.container_id,
    }));

  // Dwell time distribution by risk
  const dwellBins = [
    { range: '0-10', critical: 0, low: 0 },
    { range: '10-30', critical: 0, low: 0 },
    { range: '30-60', critical: 0, low: 0 },
    { range: '60-90', critical: 0, low: 0 },
    { range: '90+', critical: 0, low: 0 },
  ];
  predictions.forEach(p => {
    const d = p.dwell_time || 0;
    const idx = d < 10 ? 0 : d < 30 ? 1 : d < 60 ? 2 : d < 90 ? 3 : 4;
    if (p.risk_level === 'Critical') dwellBins[idx].critical++;
    else dwellBins[idx].low++;
  });

  // Shipping line distribution
  const shipLineCounts = {};
  predictions.forEach(p => {
    const line = p.shipping_line || 'Unknown';
    shipLineCounts[line] = (shipLineCounts[line] || 0) + 1;
  });
  const shipLineData = Object.entries(shipLineCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }));

  // Risk by trade hour
  const hourlyRisk = Array.from({ length: 24 }, (_, i) => ({ hour: i, avg_risk: 0, count: 0 }));
  predictions.forEach(p => {
    const time = p.declaration_time || '12:00:00';
    const hour = parseInt(time.split(':')[0]) || 12;
    if (hour >= 0 && hour <= 23) {
      hourlyRisk[hour].avg_risk += p.risk_score || 0;
      hourlyRisk[hour].count++;
    }
  });
  hourlyRisk.forEach(h => { if (h.count > 0) h.avg_risk = Number((h.avg_risk / h.count).toFixed(1)); });

  return (
    <div>
      <div className="page-header">
        <h1>Deep Analytics</h1>
        <p>Advanced risk pattern analysis and data exploration</p>
      </div>

      <div className="charts-grid">
        {/* Country Risk Ranking */}
        <div className="glass-card chart-card">
          <h3>🌍 Origin Country Risk Ranking</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={topCountries} layout="vertical" margin={{ left: 10 }}>
              <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="origin_country" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} width={50} />
              <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f1f5f9' }}
                formatter={(value, name) => [`${value} avg risk`, name === 'mean' ? 'Avg Risk Score' : 'Count']} />
              <Bar dataKey="mean" radius={[0, 6, 6, 0]}>
                {topCountries.map((entry, i) => (
                  <Cell key={i} fill={entry.mean > 10 ? COLORS.red : entry.mean > 5 ? COLORS.amber : COLORS.emerald} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Dwell Time vs Risk */}
        <div className="glass-card chart-card">
          <h3>⏱️ Dwell Time vs Risk Level</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={dwellBins}>
              <XAxis dataKey="range" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f1f5f9' }} />
              <Bar dataKey="low" name="Low Risk" fill={COLORS.emerald} radius={[4, 4, 0, 0]} stackId="a" />
              <Bar dataKey="critical" name="Critical" fill={COLORS.red} radius={[4, 4, 0, 0]} stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Hourly Risk Pattern */}
        <div className="glass-card chart-card">
          <h3>🕐 Hourly Risk Pattern</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={hourlyRisk}>
              <XAxis dataKey="hour" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f1f5f9' }}
                formatter={(value) => [`${value} avg risk`, 'Avg Risk Score']}
                labelFormatter={(label) => `Hour: ${label}:00`} />
              <Bar dataKey="avg_risk" radius={[4, 4, 0, 0]}>
                {hourlyRisk.map((entry, i) => (
                  <Cell key={i} fill={entry.avg_risk > 10 ? COLORS.red : entry.avg_risk > 5 ? COLORS.amber : COLORS.cyan} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Shipping Line */}
        <div className="glass-card chart-card">
          <h3>🚢 Top Shipping Lines</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={shipLineData} layout="vertical" margin={{ left: 10 }}>
              <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} width={100} />
              <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f1f5f9' }} />
              <Bar dataKey="value" name="Shipments" radius={[0, 6, 6, 0]}>
                {shipLineData.map((_, i) => <Cell key={i} fill={PALETTE[i % PALETTE.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
