'use client';

import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Shield, AlertTriangle, CheckCircle, Container, TrendingUp, Zap } from 'lucide-react';
import { loadDashboardData } from '@/lib/data';

const COLORS = {
  cyan: '#06b6d4',
  purple: '#8b5cf6',
  emerald: '#10b981',
  red: '#ef4444',
  amber: '#f59e0b',
  pink: '#ec4899',
};

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="progress-overlay" style={{ position: 'relative', background: 'transparent' }}>
        <div className="progress-card glass-card">
          <div className="spinner" />
          <h3>Loading Dashboard...</h3>
          <p style={{ color: 'var(--text-muted)' }}>Fetching risk analysis data</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return <div style={{ textAlign: 'center', padding: 80, color: 'var(--text-muted)' }}>
      <p>No data available. Copy <code>dashboard_data.json</code> to the <code>public/</code> folder or start the API server.</p>
    </div>;
  }

  const summary = data.summary || {};
  const riskDist = data.risk_distribution || {};
  const anomalyDist = data.anomaly_distribution || {};
  const featureImportance = data.feature_importance || {};
  const countryRisk = data.country_risk || [];
  const topCritical = summary.top_critical_containers || [];

  // Pie chart data
  const pieData = [
    { name: 'Critical', value: summary.critical_count || 0, color: COLORS.red },
    { name: 'Low Risk', value: summary.low_risk_count || 0, color: COLORS.emerald },
  ];

  // Risk distribution bar chart
  const barData = Object.entries(riskDist).map(([range, count]) => ({
    range,
    count: count || 0,
  }));

  // Feature importance (top 10)
  const featureData = Object.entries(featureImportance).slice(0, 10).map(([name, value]) => ({
    name: name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value: Number((value * 100).toFixed(1)),
  }));

  // Country risk (top 10)
  const countryData = countryRisk
    .sort((a, b) => b.mean - a.mean)
    .slice(0, 10)
    .map(c => ({ ...c, mean: Number(c.mean.toFixed(1)) }));

  // Anomaly distribution
  const anomalyData = Object.entries(anomalyDist).map(([type, count]) => ({
    type: type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    count,
  }));

  return (
    <div>
      <div className="page-header">
        <h1>Risk Dashboard</h1>
        <p>AI-powered container risk assessment overview • {summary.total_containers?.toLocaleString()} containers analyzed</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="glass-card stat-card cyan animate-in delay-1">
          <div className="stat-icon"><Container size={22} /></div>
          <div className="stat-value">{summary.total_containers?.toLocaleString()}</div>
          <div className="stat-label">Total Containers</div>
        </div>

        <div className="glass-card stat-card red animate-in delay-2">
          <div className="stat-icon"><AlertTriangle size={22} /></div>
          <div className="stat-value">{summary.critical_count}</div>
          <div className="stat-label">Critical Risk ({summary.critical_percentage}%)</div>
        </div>

        <div className="glass-card stat-card emerald animate-in delay-3">
          <div className="stat-icon"><CheckCircle size={22} /></div>
          <div className="stat-value">{summary.low_risk_count?.toLocaleString()}</div>
          <div className="stat-label">Low Risk</div>
        </div>

        <div className="glass-card stat-card purple animate-in delay-4">
          <div className="stat-icon"><TrendingUp size={22} /></div>
          <div className="stat-value">{summary.avg_risk_score}</div>
          <div className="stat-label">Avg Risk Score</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Risk Distribution Pie */}
        <div className="glass-card chart-card animate-in delay-2">
          <h3>Risk Level Distribution</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f1f5f9' }}
                formatter={(value, name) => [`${value} containers`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
            {pieData.map((entry, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: entry.color }} />
                <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{entry.name}: {entry.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Score Distribution */}
        <div className="glass-card chart-card animate-in delay-3">
          <h3>Risk Score Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barData}>
              <XAxis dataKey="range" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f1f5f9' }}
              />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={index} fill={index >= 3 ? COLORS.red : index >= 2 ? COLORS.amber : COLORS.cyan} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Feature Importance */}
        <div className="glass-card chart-card animate-in delay-3">
          <h3>Top Risk-Driving Features (SHAP)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={featureData} layout="vertical" margin={{ left: 20 }}>
              <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} width={130} />
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f1f5f9' }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} fill={COLORS.purple} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Anomaly Distribution */}
        <div className="glass-card chart-card animate-in delay-4">
          <h3>Anomaly Type Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={anomalyData}>
              <XAxis dataKey="type" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} angle={-20} textAnchor="end" height={60} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f1f5f9' }}
              />
              <Bar dataKey="count" radius={[6, 6, 0, 0]} fill={COLORS.amber} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Critical Containers Table */}
      <div className="glass-card table-card animate-in delay-4">
        <h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Zap size={18} color={COLORS.red} />
            Top Critical Containers
          </div>
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Container ID</th>
                <th>Risk Score</th>
                <th>Risk Level</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              {topCritical.slice(0, 10).map((container, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'monospace' }}>
                    {container.Container_ID}
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontWeight: 600, color: container.Risk_Score >= 70 ? COLORS.red : COLORS.amber }}>
                        {container.Risk_Score}
                      </span>
                      <div className="risk-bar">
                        <div
                          className={`risk-bar-fill ${container.Risk_Score >= 70 ? 'high' : container.Risk_Score >= 40 ? 'medium' : 'low'}`}
                          style={{ width: `${container.Risk_Score}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${container.Risk_Level === 'Critical' ? 'critical' : 'low-risk'}`}>
                      {container.Risk_Level}
                    </span>
                  </td>
                  <td style={{ fontSize: 13, maxWidth: 400 }}>
                    {container.Explanation_Summary?.substring(0, 120)}...
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
