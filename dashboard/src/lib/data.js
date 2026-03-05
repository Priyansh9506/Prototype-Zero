/**
 * Data loading utility — reads pre-computed dashboard_data.json
 * In production, this would call the FastAPI backend.
 * For demo, we load from the static output file.
 */

let cachedData = null;

export async function loadDashboardData() {
  if (cachedData) return cachedData;

  try {
    // Try API first
    const res = await fetch('http://localhost:8000/stats');
    if (res.ok) {
      const statsData = await res.json();
      const resultsRes = await fetch('http://localhost:8000/results?page_size=500');
      const resultsData = await resultsRes.json();
      
      cachedData = {
        summary: statsData.summary,
        risk_distribution: statsData.risk_distribution,
        anomaly_distribution: statsData.anomaly_distribution,
        feature_importance: statsData.feature_importance,
        country_risk: statsData.country_risk,
        predictions: resultsData.data,
      };
      return cachedData;
    }
  } catch {
    // API not available, load from static file
  }

  // Fallback: load from static JSON
  const res = await fetch('/dashboard_data.json');
  if (!res.ok) throw new Error('Failed to load dashboard data');
  cachedData = await res.json();
  return cachedData;
}

export function clearCache() {
  cachedData = null;
}
