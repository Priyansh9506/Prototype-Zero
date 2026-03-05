'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, MapPin, Clock, Package, DollarSign, Scale, Ship, User, FileText, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { loadDashboardData } from '@/lib/data';

const COLORS = { cyan: '#06b6d4', purple: '#8b5cf6', emerald: '#10b981', red: '#ef4444', amber: '#f59e0b' };

export default function ContainerDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [container, setContainer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData().then(data => {
      const found = data.predictions?.find(p => String(p.container_id) === String(params.id));
      setContainer(found || null);
    }).catch(console.error).finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return <div className="progress-overlay" style={{ position: 'relative', background: 'transparent' }}><div className="progress-card glass-card"><div className="spinner" /></div></div>;
  if (!container) return <div style={{ textAlign: 'center', padding: 80 }}><p>Container not found</p></div>;

  const riskColor = container.risk_score >= 70 ? COLORS.red : container.risk_score >= 40 ? COLORS.amber : COLORS.emerald;
  const weightDiff = container.declared_weight > 0
    ? Math.abs(container.declared_weight - container.measured_weight) / container.declared_weight * 100
    : 0;

  // Model contribution chart
  const modelData = [
    { name: 'XGBoost', value: container.xgb_risk || 0, color: COLORS.cyan },
    { name: 'LightGBM', value: container.lgbm_risk || 0, color: COLORS.purple },
    { name: 'Anomaly', value: container.anomaly_risk || 0, color: COLORS.amber },
  ];

  // Top risk factors chart
  const factorsData = (container.top_risk_factors || []).map(f => ({
    name: f.feature.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value: Math.abs(f.shap_value) * 100,
    direction: f.direction,
    color: f.direction === 'increases risk' ? COLORS.red : COLORS.emerald,
  }));

  const anomalyFlags = container.anomaly_flags || {};

  return (
    <div>
      <button onClick={() => router.back()} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', marginBottom: 20, fontSize: 14, fontFamily: 'Inter' }}>
        <ArrowLeft size={16} /> Back to Containers
      </button>

      <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
        <div>
          <h1 style={{ fontFamily: 'monospace', fontSize: 24 }}>Container {container.container_id}</h1>
          <p>{container.origin_country} → {container.destination_country} • {container.destination_port}</p>
        </div>
        <span className={`badge ${container.risk_level === 'Critical' ? 'critical' : 'low-risk'}`} style={{ fontSize: 14, padding: '8px 16px' }}>
          {container.risk_level === 'Critical' ? <AlertTriangle size={14} /> : <CheckCircle size={14} />}
          {container.risk_level}
        </span>
      </div>

      {/* Risk Score + Explanation */}
      <div className="detail-grid" style={{ gridTemplateColumns: '300px 1fr' }}>
        <div className="glass-card detail-section" style={{ textAlign: 'center' }}>
          <h3>Risk Score</h3>
          <div className="risk-ring" style={{ '--fill-color': riskColor, '--fill-pct': `${container.risk_score}%` }}>
            <span className="risk-score-value" style={{ color: riskColor }}>{container.risk_score?.toFixed(1)}</span>
          </div>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>out of 100</p>
        </div>

        <div className="glass-card detail-section">
          <h3><FileText size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />AI Explanation</h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: 20 }}>{container.explanation}</p>

          <h3 style={{ marginTop: 16 }}>Anomaly Flags</h3>
          <div className="anomaly-flags" style={{ marginTop: 8 }}>
            {Object.entries(anomalyFlags).map(([flag, active]) => (
              <span key={flag} className={`anomaly-flag ${active ? 'active' : 'inactive'}`}>
                {active ? '⚠️' : '✓'} {flag.replace(/_/g, ' ')}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Shipment Details + Model Breakdown */}
      <div className="detail-grid">
        <div className="glass-card detail-section">
          <h3><Package size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />Shipment Details</h3>
          <div className="detail-row"><span className="detail-label">Trade Regime</span><span className="detail-value">{container.trade_regime}</span></div>
          <div className="detail-row"><span className="detail-label">HS Code</span><span className="detail-value" style={{ fontFamily: 'monospace' }}>{container.hs_code}</span></div>
          <div className="detail-row"><span className="detail-label">Origin</span><span className="detail-value">🌍 {container.origin_country}</span></div>
          <div className="detail-row"><span className="detail-label">Destination</span><span className="detail-value">📍 {container.destination_country} ({container.destination_port})</span></div>
          <div className="detail-row"><span className="detail-label">Shipping Line</span><span className="detail-value">{container.shipping_line}</span></div>
          <div className="detail-row"><span className="detail-label">Declaration</span><span className="detail-value">{container.declaration_date} {container.declaration_time}</span></div>
          <div className="detail-row"><span className="detail-label">Declared Value</span><span className="detail-value" style={{ color: container.declared_value === 0 ? COLORS.red : 'inherit' }}>${container.declared_value?.toLocaleString()}</span></div>
          <div className="detail-row"><span className="detail-label">Declared Weight</span><span className="detail-value">{container.declared_weight?.toLocaleString()} kg</span></div>
          <div className="detail-row"><span className="detail-label">Measured Weight</span><span className="detail-value">{container.measured_weight?.toLocaleString()} kg</span></div>
          <div className="detail-row">
            <span className="detail-label">Weight Discrepancy</span>
            <span className="detail-value" style={{ color: weightDiff > 10 ? COLORS.red : COLORS.emerald }}>{weightDiff.toFixed(1)}%</span>
          </div>
          <div className="detail-row"><span className="detail-label">Dwell Time</span><span className="detail-value">{container.dwell_time?.toFixed(1)} hours</span></div>
          <div className="detail-row"><span className="detail-label">Importer ID</span><span className="detail-value" style={{ fontFamily: 'monospace' }}>{container.importer_id}</span></div>
          <div className="detail-row"><span className="detail-label">Exporter ID</span><span className="detail-value" style={{ fontFamily: 'monospace' }}>{container.exporter_id}</span></div>
        </div>

        <div>
          <div className="glass-card detail-section" style={{ marginBottom: 20 }}>
            <h3><TrendingUp size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />Model Contributions</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={modelData} layout="vertical">
                <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                <YAxis type="category" dataKey="name" tick={{ fill: '#94a3b8', fontSize: 13 }} axisLine={false} tickLine={false} width={80} />
                <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f1f5f9' }} />
                <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                  {modelData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {factorsData.length > 0 && (
            <div className="glass-card detail-section">
              <h3><Shield size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />Top Risk Factors (SHAP)</h3>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={factorsData} layout="vertical">
                  <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} width={120} />
                  <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f1f5f9' }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {factorsData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
