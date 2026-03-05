'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ChevronUp, ChevronDown, Filter } from 'lucide-react';
import { loadDashboardData } from '@/lib/data';

export default function ContainersPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [riskFilter, setRiskFilter] = useState('all');
  const [sortField, setSortField] = useState('risk_score');
  const [sortDir, setSortDir] = useState('desc');
  const [page, setPage] = useState(1);
  const pageSize = 25;
  const router = useRouter();

  useEffect(() => {
    loadDashboardData()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (!data?.predictions) return [];
    let items = [...data.predictions];

    if (search) {
      const s = search.toLowerCase();
      items = items.filter(p =>
        String(p.container_id).toLowerCase().includes(s) ||
        p.origin_country?.toLowerCase().includes(s) ||
        p.destination_country?.toLowerCase().includes(s)
      );
    }

    if (riskFilter !== 'all') {
      items = items.filter(p => p.risk_level === riskFilter);
    }

    items.sort((a, b) => {
      const aVal = a[sortField] || 0;
      const bVal = b[sortField] || 0;
      if (typeof aVal === 'string') return sortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      return sortDir === 'asc' ? aVal - bVal : bVal - aVal;
    });

    return items;
  }, [data, search, riskFilter, sortField, sortDir]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('desc');
    }
  };

  const SortIcon = ({ field }) => {
    if (sortField !== field) return null;
    return sortDir === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
  };

  if (loading) {
    return <div className="progress-overlay" style={{ position: 'relative', background: 'transparent' }}>
      <div className="progress-card glass-card"><div className="spinner" /><h3>Loading...</h3></div>
    </div>;
  }

  return (
    <div>
      <div className="page-header">
        <h1>Container Risk Analysis</h1>
        <p>Search, filter and explore all analyzed containers</p>
      </div>

      <div className="glass-card table-card">
        <div className="table-controls">
          <input
            className="search-input"
            placeholder="Search by Container ID, country..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
          />
          <button className={`filter-btn ${riskFilter === 'all' ? 'active' : ''}`} onClick={() => { setRiskFilter('all'); setPage(1); }}>All</button>
          <button className={`filter-btn ${riskFilter === 'Critical' ? 'active' : ''}`} onClick={() => { setRiskFilter('Critical'); setPage(1); }}>Critical</button>
          <button className={`filter-btn ${riskFilter === 'Low Risk' ? 'active' : ''}`} onClick={() => { setRiskFilter('Low Risk'); setPage(1); }}>Low Risk</button>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', marginLeft: 'auto' }}>{filtered.length} containers</span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('container_id')}>Container ID <SortIcon field="container_id" /></th>
                <th onClick={() => handleSort('risk_score')}>Risk Score <SortIcon field="risk_score" /></th>
                <th onClick={() => handleSort('risk_level')}>Risk Level <SortIcon field="risk_level" /></th>
                <th onClick={() => handleSort('origin_country')}>Origin <SortIcon field="origin_country" /></th>
                <th onClick={() => handleSort('destination_country')}>Destination <SortIcon field="destination_country" /></th>
                <th onClick={() => handleSort('declared_value')}>Value <SortIcon field="declared_value" /></th>
                <th onClick={() => handleSort('dwell_time')}>Dwell (hrs) <SortIcon field="dwell_time" /></th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map((p, i) => (
                <tr key={i} onClick={() => router.push(`/containers/${p.container_id}`)}>
                  <td style={{ fontWeight: 600, fontFamily: 'monospace', color: 'var(--text-primary)' }}>{p.container_id}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontWeight: 600, color: p.risk_score >= 70 ? '#ef4444' : p.risk_score >= 40 ? '#f59e0b' : '#10b981', minWidth: 36 }}>
                        {p.risk_score?.toFixed(1)}
                      </span>
                      <div className="risk-bar">
                        <div className={`risk-bar-fill ${p.risk_score >= 70 ? 'high' : p.risk_score >= 40 ? 'medium' : 'low'}`} style={{ width: `${Math.min(p.risk_score, 100)}%` }} />
                      </div>
                    </div>
                  </td>
                  <td><span className={`badge ${p.risk_level === 'Critical' ? 'critical' : 'low-risk'}`}>{p.risk_level}</span></td>
                  <td>{p.origin_country}</td>
                  <td>{p.destination_country}</td>
                  <td>${p.declared_value?.toLocaleString()}</td>
                  <td>{p.dwell_time?.toFixed(1)}</td>
                  <td style={{ fontSize: 12, maxWidth: 250, color: 'var(--text-muted)' }}>{p.explanation?.substring(0, 80)}...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button className="page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</button>
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              let pageNum;
              if (totalPages <= 7) pageNum = i + 1;
              else if (page <= 4) pageNum = i + 1;
              else if (page >= totalPages - 3) pageNum = totalPages - 6 + i;
              else pageNum = page - 3 + i;
              return (
                <button key={pageNum} className={`page-btn ${page === pageNum ? 'active' : ''}`} onClick={() => setPage(pageNum)}>{pageNum}</button>
              );
            })}
            <button className="page-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}
