(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Sample data and utility functions for SmartContainer Risk Engine
__turbopack_context__.s([
    "SAMPLE_DATA",
    ()=>SAMPLE_DATA,
    "computeMockRisk",
    ()=>computeMockRisk,
    "getRiskColor",
    ()=>getRiskColor,
    "getRiskGlow",
    ()=>getRiskGlow
]);
const SAMPLE_DATA = [
    {
        Container_ID: 'CNTR-90421',
        Risk_Score: 0.91,
        Risk_Level: 'Critical',
        Anomaly_Flag: 1,
        Declared_Value: 2450000,
        Declared_Weight: 800,
        Measured_Weight: 1520,
        Dwell_Time_Hours: 156,
        Origin_Country: 'GT',
        Destination_Country: 'US',
        HS_Code: 847130,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_40',
        Declaration_Date: '2021-06-12',
        Declaration_Time: '02:15:00',
        Explanation_Summary: '⚠ Critical (score=0.910) | Drivers: elevated absolute weight discrepancy (%), elevated dwell time (hours), elevated value per kg. Weight Δ=90.0%, value/kg=3062.50. Isolation Forest flagged as statistical anomaly.'
    },
    {
        Container_ID: 'CNTR-18237',
        Risk_Score: 0.78,
        Risk_Level: 'Critical',
        Anomaly_Flag: 1,
        Declared_Value: 0,
        Declared_Weight: 450,
        Measured_Weight: 712,
        Dwell_Time_Hours: 134,
        Origin_Country: 'QA',
        Destination_Country: 'DE',
        HS_Code: 711311,
        Trade_Regime: 'Transit',
        Shipping_Line: 'LINE_MODE_10',
        Declaration_Date: '2021-06-11',
        Declaration_Time: '23:48:00',
        Explanation_Summary: '⚠ Critical (score=0.780) | Drivers: elevated zero value declared, elevated weight discrepancy (%), elevated off-hours declaration. Weight Δ=58.2%, value/kg=0.00. Isolation Forest flagged as statistical anomaly.'
    },
    {
        Container_ID: 'CNTR-55102',
        Risk_Score: 0.42,
        Risk_Level: 'Medium Risk',
        Anomaly_Flag: 1,
        Declared_Value: 89500,
        Declared_Weight: 3200,
        Measured_Weight: 4160,
        Dwell_Time_Hours: 98,
        Origin_Country: 'CD',
        Destination_Country: 'FR',
        HS_Code: 440890,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_40',
        Declaration_Date: '2021-06-10',
        Declaration_Time: '04:22:00',
        Explanation_Summary: '⚡ Medium Risk (score=0.420) | Drivers: elevated weight discrepancy (%), elevated off-hours declaration, elevated dwell time (hours). Weight Δ=30.0%, value/kg=27.97.'
    },
    {
        Container_ID: 'CNTR-33781',
        Risk_Score: 0.38,
        Risk_Level: 'Medium Risk',
        Anomaly_Flag: 0,
        Declared_Value: 1250000,
        Declared_Weight: 150,
        Measured_Weight: 189,
        Dwell_Time_Hours: 112,
        Origin_Country: 'SA',
        Destination_Country: 'GB',
        HS_Code: 710239,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_10',
        Declaration_Date: '2021-06-09',
        Declaration_Time: '14:30:00',
        Explanation_Summary: '⚡ Medium Risk (score=0.380) | Drivers: elevated value per kg, elevated weight discrepancy (%), elevated dwell time (hours). Weight Δ=26.0%, value/kg=8333.33.'
    },
    {
        Container_ID: 'CNTR-67294',
        Risk_Score: 0.34,
        Risk_Level: 'Medium Risk',
        Anomaly_Flag: 0,
        Declared_Value: 45000,
        Declared_Weight: 5800,
        Measured_Weight: 7250,
        Dwell_Time_Hours: 88,
        Origin_Country: 'UA',
        Destination_Country: 'IT',
        HS_Code: 720839,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_40',
        Declaration_Date: '2021-06-13',
        Declaration_Time: '21:15:00',
        Explanation_Summary: '⚡ Medium Risk (score=0.340) | Drivers: elevated weight discrepancy (%), elevated off-hours declaration, low origin country trade frequency. Weight Δ=25.0%, value/kg=7.76.'
    },
    {
        Container_ID: 'CNTR-02914',
        Risk_Score: 0.12,
        Risk_Level: 'Low Risk',
        Anomaly_Flag: 0,
        Declared_Value: 9672,
        Declared_Weight: 95,
        Measured_Weight: 96.2,
        Dwell_Time_Hours: 38,
        Origin_Country: 'CN',
        Destination_Country: 'NL',
        HS_Code: 620822,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_10',
        Declaration_Date: '2021-06-08',
        Declaration_Time: '09:15:00',
        Explanation_Summary: '✓ Low Risk (score=0.120) | Drivers: low weight discrepancy (%), low dwell time (hours), low value per kg. Weight Δ=1.3%, value/kg=101.81.'
    },
    {
        Container_ID: 'CNTR-41028',
        Risk_Score: 0.08,
        Risk_Level: 'Low Risk',
        Anomaly_Flag: 0,
        Declared_Value: 375751,
        Declared_Weight: 11352,
        Measured_Weight: 11541,
        Dwell_Time_Hours: 52,
        Origin_Country: 'CN',
        Destination_Country: 'CA',
        HS_Code: 690722,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_40',
        Declaration_Date: '2021-06-07',
        Declaration_Time: '10:43:00',
        Explanation_Summary: '✓ Low Risk (score=0.080) | Drivers: low weight discrepancy (%), low dwell time (hours), low origin country trade frequency. Weight Δ=1.7%, value/kg=33.10.'
    },
    {
        Container_ID: 'CNTR-76532',
        Risk_Score: 0.06,
        Risk_Level: 'Low Risk',
        Anomaly_Flag: 0,
        Declared_Value: 5353,
        Declared_Weight: 20.7,
        Measured_Weight: 20.4,
        Dwell_Time_Hours: 31,
        Origin_Country: 'VN',
        Destination_Country: 'BA',
        HS_Code: 620822,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_40',
        Declaration_Date: '2021-06-06',
        Declaration_Time: '06:15:00',
        Explanation_Summary: '✓ Low Risk (score=0.060) | Drivers: low weight discrepancy (%), low dwell time (hours), low value per kg. Weight Δ=-1.4%, value/kg=258.60.'
    },
    {
        Container_ID: 'CNTR-89103',
        Risk_Score: 0.05,
        Risk_Level: 'Low Risk',
        Anomaly_Flag: 0,
        Declared_Value: 1477645,
        Declared_Weight: 9218,
        Measured_Weight: 8814,
        Dwell_Time_Hours: 12,
        Origin_Country: 'VN',
        Destination_Country: 'MN',
        HS_Code: 940350,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_40',
        Declaration_Date: '2021-06-05',
        Declaration_Time: '04:04:00',
        Explanation_Summary: '✓ Low Risk (score=0.050) | Drivers: low dwell time (hours), low value per kg, low weight discrepancy (%). Weight Δ=-4.4%, value/kg=160.30.'
    },
    {
        Container_ID: 'CNTR-14520',
        Risk_Score: 0.04,
        Risk_Level: 'Low Risk',
        Anomaly_Flag: 0,
        Declared_Value: 6364800,
        Declared_Weight: 24000,
        Measured_Weight: 24880,
        Dwell_Time_Hours: 71,
        Origin_Country: 'VN',
        Destination_Country: 'LV',
        HS_Code: 71080,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_10',
        Declaration_Date: '2021-06-04',
        Declaration_Time: '03:36:00',
        Explanation_Summary: '✓ Low Risk (score=0.040) | Drivers: low weight discrepancy (%), low dwell time (hours), low origin country trade frequency. Weight Δ=3.7%, value/kg=265.20.'
    },
    {
        Container_ID: 'CNTR-22847',
        Risk_Score: 0.03,
        Risk_Level: 'Low Risk',
        Anomaly_Flag: 0,
        Declared_Value: 1248,
        Declared_Weight: 1.0,
        Measured_Weight: 1.04,
        Dwell_Time_Hours: 68,
        Origin_Country: 'RO',
        Destination_Country: 'UZ',
        HS_Code: 420231,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_40',
        Declaration_Date: '2021-06-03',
        Declaration_Time: '04:38:00',
        Explanation_Summary: '✓ Low Risk (score=0.030) | Drivers: low weight discrepancy (%), low dwell time (hours), low value per kg. Weight Δ=4.0%, value/kg=1248.00.'
    },
    {
        Container_ID: 'CNTR-50913',
        Risk_Score: 0.02,
        Risk_Level: 'Low Risk',
        Anomaly_Flag: 0,
        Declared_Value: 1365,
        Declared_Weight: 4.7,
        Measured_Weight: 4.92,
        Dwell_Time_Hours: 11,
        Origin_Country: 'TH',
        Destination_Country: 'FI',
        HS_Code: 711311,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_10',
        Declaration_Date: '2021-06-02',
        Declaration_Time: '22:33:00',
        Explanation_Summary: '✓ Low Risk (score=0.020) | Drivers: low dwell time (hours), low weight discrepancy (%), low declared value. Weight Δ=4.7%, value/kg=290.43.'
    },
    {
        Container_ID: 'CNTR-63781',
        Risk_Score: 0.02,
        Risk_Level: 'Low Risk',
        Anomaly_Flag: 0,
        Declared_Value: 1105800,
        Declared_Weight: 19000,
        Measured_Weight: 19308,
        Dwell_Time_Hours: 57,
        Origin_Country: 'CN',
        Destination_Country: 'NO',
        HS_Code: 390690,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_10',
        Declaration_Date: '2021-06-01',
        Declaration_Time: '12:39:00',
        Explanation_Summary: '✓ Low Risk (score=0.020) | Drivers: low weight discrepancy (%), low dwell time (hours), low value per kg. Weight Δ=1.6%, value/kg=58.20.'
    },
    {
        Container_ID: 'CNTR-84290',
        Risk_Score: 0.01,
        Risk_Level: 'Low Risk',
        Anomaly_Flag: 0,
        Declared_Value: 165,
        Declared_Weight: 275,
        Measured_Weight: 288,
        Dwell_Time_Hours: 6,
        Origin_Country: 'CN',
        Destination_Country: 'FI',
        HS_Code: 392690,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_40',
        Declaration_Date: '2021-05-31',
        Declaration_Time: '08:37:00',
        Explanation_Summary: '✓ Low Risk (score=0.010) | Drivers: low dwell time (hours), low declared value, low weight discrepancy (%). Weight Δ=4.7%, value/kg=0.60.'
    },
    {
        Container_ID: 'CNTR-95401',
        Risk_Score: 0.01,
        Risk_Level: 'Low Risk',
        Anomaly_Flag: 0,
        Declared_Value: 113938,
        Declared_Weight: 42,
        Measured_Weight: 40.6,
        Dwell_Time_Hours: 18,
        Origin_Country: 'CN',
        Destination_Country: 'AM',
        HS_Code: 871390,
        Trade_Regime: 'Import',
        Shipping_Line: 'LINE_MODE_40',
        Declaration_Date: '2021-05-30',
        Declaration_Time: '21:07:00',
        Explanation_Summary: '✓ Low Risk (score=0.010) | Drivers: low dwell time (hours), low weight discrepancy (%), low origin country trade frequency. Weight Δ=-3.3%, value/kg=2712.81.'
    }
];
function computeMockRisk(row) {
    const dw = parseFloat(row.Declared_Weight) || 0;
    const mw = parseFloat(row.Measured_Weight) || 0;
    const dv = parseFloat(row.Declared_Value) || 0;
    const dt = parseFloat(row.Dwell_Time_Hours) || 0;
    const discPct = dw > 0 ? Math.abs((mw - dw) / dw) * 100 : 0;
    const vpk = dw > 0 ? dv / dw : 0;
    let score = 0;
    const reasons = [];
    if (discPct > 30) {
        score += 0.35;
        reasons.push(`elevated absolute weight discrepancy (${discPct.toFixed(1)}%)`);
    } else if (discPct > 15) {
        score += 0.15;
        reasons.push(`moderate weight discrepancy (${discPct.toFixed(1)}%)`);
    }
    if (dv === 0) {
        score += 0.2;
        reasons.push('elevated zero value declared');
    }
    if (dt > 120) {
        score += 0.2;
        reasons.push(`elevated dwell time (${dt}h)`);
    } else if (dt > 80) {
        score += 0.1;
        reasons.push(`moderate dwell time (${dt}h)`);
    }
    if (vpk > 5000) {
        score += 0.15;
        reasons.push('elevated value per kg');
    }
    const hr = parseInt((row.Declaration_Time || '12:00').split(':')[0]);
    if (hr < 6 || hr > 20) {
        score += 0.08;
        reasons.push('off-hours declaration');
    }
    score += (Math.random() - 0.5) * 0.08;
    score = Math.max(0.005, Math.min(0.99, score));
    const level = score >= 0.5 ? 'Critical' : score >= 0.25 ? 'Medium Risk' : 'Low Risk';
    const anomaly = score > 0.6 || discPct > 40 && Math.random() > 0.5 ? 1 : 0;
    const icons = {
        Critical: '⚠',
        'Medium Risk': '⚡',
        'Low Risk': '✓'
    };
    const reasonText = reasons.length ? reasons.slice(0, 3).join(', ') : 'normal trade pattern';
    const explanation = `${icons[level]} ${level} (score=${score.toFixed(3)}) | Drivers: ${reasonText}. Weight Δ=${discPct.toFixed(1)}%, value/kg=${vpk.toFixed(2)}.${anomaly ? ' Isolation Forest flagged as statistical anomaly.' : ''}`;
    return {
        ...row,
        Risk_Score: parseFloat(score.toFixed(4)),
        Risk_Level: level,
        Anomaly_Flag: anomaly,
        Explanation_Summary: explanation
    };
}
function getRiskColor(level) {
    if (level === 'Critical') return '#C62828';
    if (level === 'Medium Risk') return '#E65100';
    return '#2E7D32';
}
function getRiskGlow(level) {
    if (level === 'Critical') return 'rgba(198,40,40,0.06)';
    if (level === 'Medium Risk') return 'rgba(230,81,0,0.06)';
    return 'rgba(46,125,50,0.06)';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/auth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getToken",
    ()=>getToken,
    "removeToken",
    ()=>removeToken,
    "setToken",
    ()=>setToken
]);
const setToken = (token)=>{
    localStorage.setItem('access_token', token);
};
const getToken = ()=>{
    return localStorage.getItem('access_token');
};
const removeToken = ()=>{
    localStorage.removeItem('access_token');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/auth.js [app-client] (ecmascript)");
;
const API_BASE_URL = 'http://localhost:8000';
async function fetchWithAuth(url, options = {}) {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers
    });
    if (response.status === 401) {
        // Token expired or invalid
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeToken"])();
        window.location.reload();
        throw new Error('Session expired. Please log in again.');
    }
    if (!response.ok) {
        const errorData = await response.json().catch(()=>({}));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }
    return response.json();
}
const api = {
    login: async (username, password)=>{
        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            throw new Error(errorData.detail || 'Login failed');
        }
        return response.json();
    },
    getUsersMe: ()=>fetchWithAuth('/users/me'),
    getStats: ()=>fetchWithAuth('/stats'),
    getResults: (page = 1, pageSize = 50, riskLevel = '', search = '')=>{
        const params = new URLSearchParams({
            page,
            page_size: pageSize
        });
        if (riskLevel) params.append('risk_level', riskLevel);
        if (search) params.append('search', search);
        return fetchWithAuth(`/results?${params.toString()}`);
    },
    getUsers: ()=>fetchWithAuth('/users'),
    verifyUser: (userId, role)=>fetchWithAuth(`/admin/verify_user/${userId}?role=${role}`, {
            method: 'PUT'
        }),
    createUser: (username, email, password, role)=>fetchWithAuth(`/admin/users?role=${role}`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            })
        }),
    updateUser: (userId, { username, email, password, role })=>{
        const params = new URLSearchParams();
        if (username) params.append('username', username);
        if (email) params.append('email', email);
        if (password) params.append('password', password);
        if (role) params.append('role', role);
        return fetchWithAuth(`/admin/users/${userId}?${params.toString()}`, {
            method: 'PUT'
        });
    },
    deleteUser: (userId)=>fetchWithAuth(`/admin/users/${userId}`, {
            method: 'DELETE'
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Login.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/auth.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Login({ onLogin }) {
    _s();
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [clearance, setClearance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAuthenticating, setIsAuthenticating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        if (!userId || !clearance) {
            setError('OFFICER ID AND ACCESS CODE REQUIRED.');
            return;
        }
        setIsAuthenticating(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].login(userId, clearance);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToken"])(data.access_token);
            // Get user info to check role
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getUsersMe();
            onLogin(user);
        } catch (err) {
            setError(err.message || 'AUTHENTICATION FAILED. ENTRY DENIED.');
            setIsAuthenticating(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            background: 'linear-gradient(160deg, #F5F0E8 0%, #E8DFD0 50%, #F0E8DA 100%)',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: 300,
                    height: 300,
                    background: 'radial-gradient(circle, rgba(192,104,32,0.06) 0%, transparent 70%)',
                    borderRadius: '50%'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/Login.jsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: 400,
                    height: 400,
                    background: 'radial-gradient(circle, rgba(198,40,40,0.04) 0%, transparent 70%)',
                    borderRadius: '50%'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/Login.jsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'rgba(255,253,248,0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid #D9CDBA',
                    borderRadius: 16,
                    padding: '48px 40px',
                    width: '100%',
                    maxWidth: 480,
                    boxShadow: '0 8px 32px rgba(44,36,24,0.08)',
                    zIndex: 10,
                    animation: 'fadeInUp 0.6s ease-out both'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 40
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 64,
                                    height: 64,
                                    borderRadius: 16,
                                    background: 'rgba(192,104,32,0.08)',
                                    border: '1px solid rgba(192,104,32,0.2)',
                                    marginBottom: 24
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"], {
                                    size: 36,
                                    color: "#C06820",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Login.jsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Login.jsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 26,
                                    fontWeight: 800,
                                    color: '#2C2418',
                                    letterSpacing: 2,
                                    marginBottom: 8,
                                    textTransform: 'uppercase'
                                },
                                children: "SmartContainer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Login.jsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 13,
                                    color: '#7A6E5D',
                                    letterSpacing: 4,
                                    fontWeight: 600
                                },
                                children: "CUSTOMS RISK ENGINE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Login.jsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Login.jsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontFamily: 'Quicksand',
                                            fontSize: 12,
                                            color: '#C06820',
                                            letterSpacing: 2,
                                            marginBottom: 8,
                                            fontWeight: 700
                                        },
                                        children: "OFFICER ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Login.jsx",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                size: 16,
                                                color: "#7A6E5D",
                                                style: {
                                                    position: 'absolute',
                                                    left: 16,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Login.jsx",
                                                lineNumber: 80,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: userId,
                                                onChange: (e)=>setUserId(e.target.value),
                                                placeholder: "e.g. CUSTOMS_748",
                                                style: {
                                                    width: '100%',
                                                    background: '#F5F0E8',
                                                    border: '1px solid #D9CDBA',
                                                    borderRadius: 8,
                                                    padding: '14px 16px 14px 44px',
                                                    color: '#2C2418',
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 15,
                                                    fontWeight: 500,
                                                    outline: 'none',
                                                    transition: 'border-color 0.2s'
                                                },
                                                onFocus: (e)=>e.target.style.borderColor = '#C06820',
                                                onBlur: (e)=>e.target.style.borderColor = '#D9CDBA'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Login.jsx",
                                                lineNumber: 81,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Login.jsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Login.jsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontFamily: 'Quicksand',
                                            fontSize: 12,
                                            color: '#C06820',
                                            letterSpacing: 2,
                                            marginBottom: 8,
                                            fontWeight: 700
                                        },
                                        children: "SECURITY ACCESS CODE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Login.jsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                size: 16,
                                                color: "#7A6E5D",
                                                style: {
                                                    position: 'absolute',
                                                    left: 16,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Login.jsx",
                                                lineNumber: 102,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                value: clearance,
                                                onChange: (e)=>setClearance(e.target.value),
                                                placeholder: "••••••••",
                                                style: {
                                                    width: '100%',
                                                    background: '#F5F0E8',
                                                    border: '1px solid #D9CDBA',
                                                    borderRadius: 8,
                                                    padding: '14px 16px 14px 44px',
                                                    color: '#2C2418',
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 15,
                                                    fontWeight: 500,
                                                    outline: 'none',
                                                    transition: 'border-color 0.2s',
                                                    letterSpacing: 4
                                                },
                                                onFocus: (e)=>e.target.style.borderColor = '#C06820',
                                                onBlur: (e)=>e.target.style.borderColor = '#D9CDBA'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Login.jsx",
                                                lineNumber: 103,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Login.jsx",
                                        lineNumber: 101,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Login.jsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '12px 16px',
                                    background: 'rgba(198,40,40,0.06)',
                                    border: '1px solid rgba(198,40,40,0.2)',
                                    borderRadius: 8,
                                    color: '#C62828',
                                    fontFamily: 'Quicksand',
                                    fontSize: 13,
                                    fontWeight: 600,
                                    animation: 'fadeInUp 0.3s ease-out'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Login.jsx",
                                        lineNumber: 126,
                                        columnNumber: 29
                                    }, this),
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Login.jsx",
                                lineNumber: 120,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isAuthenticating,
                                style: {
                                    marginTop: 12,
                                    width: '100%',
                                    background: isAuthenticating ? '#D9CDBA' : '#C06820',
                                    border: 'none',
                                    borderRadius: 8,
                                    padding: '16px',
                                    fontFamily: 'Quicksand',
                                    fontSize: 15,
                                    color: isAuthenticating ? '#7A6E5D' : '#FFFFFF',
                                    fontWeight: 800,
                                    cursor: isAuthenticating ? 'not-allowed' : 'pointer',
                                    letterSpacing: 2,
                                    transition: 'all 0.3s',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 8
                                },
                                children: isAuthenticating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 14,
                                                height: 14,
                                                border: '2px solid #7A6E5D',
                                                borderTopColor: 'transparent',
                                                borderRadius: '50%',
                                                animation: 'radarSpin 1s linear infinite'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Login.jsx",
                                            lineNumber: 144,
                                            columnNumber: 33
                                        }, this),
                                        "VERIFYING..."
                                    ]
                                }, void 0, true) : 'BEGIN INSPECTION SESSION'
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Login.jsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Login.jsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 32,
                            textAlign: 'center',
                            fontFamily: 'Quicksand',
                            fontSize: 11,
                            color: '#A69882',
                            fontWeight: 600
                        },
                        children: "AUTHORISED CUSTOMS PERSONNEL ONLY. ALL ACCESS IS MONITORED AND LOGGED."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Login.jsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Login.jsx",
                lineNumber: 49,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Login.jsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(Login, "qwWk0m5N6kF9SmPO9Re7L6+Ncmg=");
_c = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Sidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
;
;
;
function Sidebar({ currentView, setView, onLogout, userId }) {
    const menuItems = [
        {
            id: 'overview',
            label: 'OVERVIEW',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/components/Sidebar.jsx",
                lineNumber: 6,
                columnNumber: 52
            }, this)
        },
        {
            id: 'containers',
            label: 'CONTAINERS',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/components/Sidebar.jsx",
                lineNumber: 7,
                columnNumber: 56
            }, this)
        },
        {
            id: 'analytics',
            label: 'ANALYTICS',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/components/Sidebar.jsx",
                lineNumber: 8,
                columnNumber: 54
            }, this)
        },
        {
            id: 'upload',
            label: 'DATA UPLOAD',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/components/Sidebar.jsx",
                lineNumber: 9,
                columnNumber: 53
            }, this)
        },
        ...userId?.role === 'admin' ? [
            {
                id: 'admin',
                label: 'ADMIN',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Sidebar.jsx",
                    lineNumber: 10,
                    columnNumber: 78
                }, this)
            }
        ] : [],
        {
            id: 'settings',
            label: 'SETTINGS',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/components/Sidebar.jsx",
                lineNumber: 11,
                columnNumber: 52
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: 260,
            background: '#FFFDF8',
            borderRight: '1px solid #D9CDBA',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            position: 'sticky',
            top: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '24px 24px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    borderBottom: '1px solid #EDE7DB'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"], {
                        size: 28,
                        color: "#C06820",
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Sidebar.jsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: '#2C2418',
                                    letterSpacing: 0.5
                                },
                                children: "Risk Engine"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar.jsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 11,
                                    color: '#C06820',
                                    fontWeight: 600
                                },
                                children: "v4.0 — CUSTOMS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar.jsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Sidebar.jsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Sidebar.jsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'Quicksand',
                            fontSize: 11,
                            color: '#7A6E5D',
                            letterSpacing: 2,
                            fontWeight: 700
                        },
                        children: "ACTIVE OFFICER"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Sidebar.jsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            background: '#F5F0E8',
                            padding: '12px',
                            borderRadius: 8,
                            border: '1px solid #EDE7DB'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: '#2E7D32',
                                    animation: 'glow-green 2s infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar.jsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'Quicksand',
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: '#2C2418'
                                        },
                                        children: userId?.username || 'OFFICER_XYZ'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Sidebar.jsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'Quicksand',
                                            fontSize: 11,
                                            color: '#7A6E5D',
                                            fontWeight: 500
                                        },
                                        children: [
                                            "Role: ",
                                            userId?.role?.toUpperCase() || 'OFFICER'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Sidebar.jsx",
                                        lineNumber: 41,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Sidebar.jsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Sidebar.jsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Sidebar.jsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    flex: 1,
                    padding: '0 16px',
                    marginTop: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'Quicksand',
                            fontSize: 11,
                            color: '#7A6E5D',
                            letterSpacing: 2,
                            marginBottom: 16,
                            paddingLeft: 8,
                            fontWeight: 700
                        },
                        children: "NAVIGATION"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Sidebar.jsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: {
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4
                        },
                        children: menuItems.map((item)=>{
                            const isActive = currentView === item.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setView(item.id),
                                    style: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12,
                                        padding: '12px 16px',
                                        borderRadius: 8,
                                        cursor: 'pointer',
                                        background: isActive ? 'rgba(192,104,32,0.08)' : 'transparent',
                                        border: `1px solid ${isActive ? 'rgba(192,104,32,0.2)' : 'transparent'}`,
                                        color: isActive ? '#C06820' : '#7A6E5D',
                                        fontFamily: 'Quicksand',
                                        fontSize: 13,
                                        letterSpacing: 1,
                                        fontWeight: isActive ? 700 : 500,
                                        textAlign: 'left',
                                        transition: 'all 0.2s',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    },
                                    onMouseEnter: (e)=>{
                                        if (!isActive) {
                                            e.currentTarget.style.color = '#2C2418';
                                            e.currentTarget.style.background = 'rgba(44,36,24,0.03)';
                                        }
                                    },
                                    onMouseLeave: (e)=>{
                                        if (!isActive) {
                                            e.currentTarget.style.color = '#7A6E5D';
                                            e.currentTarget.style.background = 'transparent';
                                        }
                                    },
                                    children: [
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                width: 3,
                                                background: '#C06820'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Sidebar.jsx",
                                            lineNumber: 78,
                                            columnNumber: 50
                                        }, this),
                                        item.icon,
                                        item.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Sidebar.jsx",
                                    lineNumber: 54,
                                    columnNumber: 33
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/src/app/components/Sidebar.jsx",
                                lineNumber: 53,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Sidebar.jsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Sidebar.jsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '24px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onLogout,
                    style: {
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        padding: '12px',
                        borderRadius: 8,
                        cursor: 'pointer',
                        background: 'transparent',
                        border: '1px solid #D9CDBA',
                        color: '#7A6E5D',
                        fontFamily: 'Quicksand',
                        fontSize: 12,
                        letterSpacing: 1,
                        fontWeight: 600,
                        transition: 'all 0.2s'
                    },
                    onMouseEnter: (e)=>{
                        e.currentTarget.style.color = '#C62828';
                        e.currentTarget.style.borderColor = 'rgba(198,40,40,0.35)';
                        e.currentTarget.style.background = 'rgba(198,40,40,0.04)';
                    },
                    onMouseLeave: (e)=>{
                        e.currentTarget.style.color = '#7A6E5D';
                        e.currentTarget.style.borderColor = '#D9CDBA';
                        e.currentTarget.style.background = 'transparent';
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Sidebar.jsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this),
                        " END SESSION"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Sidebar.jsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Sidebar.jsx",
                lineNumber: 89,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Sidebar.jsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Overview.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Overview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function StatCard({ label, value, sub, icon, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: '1 0 150px',
            background: '#FFFDF8',
            border: '1px solid #D9CDBA',
            borderRadius: 12,
            padding: '20px 24px',
            boxShadow: '0 1px 3px rgba(44,36,24,0.04)',
            transition: 'all 0.3s ease'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'Quicksand',
                            fontSize: 11,
                            color: '#7A6E5D',
                            letterSpacing: 2,
                            fontWeight: 700
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Overview.jsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 18
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Overview.jsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Overview.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: 'Quicksand',
                    fontSize: 32,
                    fontWeight: 700,
                    color: color || '#2C2418'
                },
                children: value.toLocaleString()
            }, void 0, false, {
                fileName: "[project]/src/app/components/Overview.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    color: '#7A6E5D',
                    marginTop: 4,
                    fontWeight: 500
                },
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/app/components/Overview.jsx",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Overview.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = StatCard;
function Overview({ data }) {
    _s();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Overview.useMemo[stats]": ()=>{
            const critical = data.filter({
                "Overview.useMemo[stats]": (d)=>d.Risk_Level === 'Critical'
            }["Overview.useMemo[stats]"]).length;
            const medium = data.filter({
                "Overview.useMemo[stats]": (d)=>d.Risk_Level === 'Medium Risk'
            }["Overview.useMemo[stats]"]).length;
            const low = data.filter({
                "Overview.useMemo[stats]": (d)=>d.Risk_Level === 'Low Risk'
            }["Overview.useMemo[stats]"]).length;
            const anomalies = data.filter({
                "Overview.useMemo[stats]": (d)=>d.Anomaly_Flag
            }["Overview.useMemo[stats]"]).length;
            return {
                total: data.length,
                critical,
                medium,
                low,
                anomalies
            };
        }
    }["Overview.useMemo[stats]"], [
        data
    ]);
    const pieData = [
        {
            name: 'Critical',
            value: stats.critical,
            color: '#C62828'
        },
        {
            name: 'Medium Risk',
            value: stats.medium,
            color: '#E65100'
        },
        {
            name: 'Low Risk',
            value: stats.low,
            color: '#2E7D32'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            animation: 'fadeInUp 0.4s ease-out'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: 'Quicksand',
                    fontSize: 22,
                    color: '#2C2418',
                    marginBottom: 24,
                    fontWeight: 700,
                    letterSpacing: 1
                },
                children: "INSPECTION OVERVIEW"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Overview.jsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 16,
                    marginBottom: 24,
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "TOTAL",
                        value: stats.total,
                        sub: "containers scanned",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                            size: 20,
                            color: "#C06820"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Overview.jsx",
                            lineNumber: 46,
                            columnNumber: 92
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Overview.jsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "FLAGGED",
                        value: stats.critical,
                        sub: `⚠ ${stats.total ? (100 * stats.critical / stats.total).toFixed(1) : 0}%`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            size: 20,
                            color: "#C62828"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Overview.jsx",
                            lineNumber: 47,
                            columnNumber: 152
                        }, void 0),
                        color: "#C62828"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Overview.jsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "CAUTION",
                        value: stats.medium,
                        sub: `⚡ ${stats.total ? (100 * stats.medium / stats.total).toFixed(1) : 0}%`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                            size: 20,
                            color: "#E65100"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Overview.jsx",
                            lineNumber: 48,
                            columnNumber: 148
                        }, void 0),
                        color: "#E65100"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Overview.jsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "CLEARED",
                        value: stats.low,
                        sub: `✓ ${stats.total ? (100 * stats.low / stats.total).toFixed(1) : 0}%`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                            size: 20,
                            color: "#2E7D32"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Overview.jsx",
                            lineNumber: 49,
                            columnNumber: 142
                        }, void 0),
                        color: "#2E7D32"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Overview.jsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "ANOMALIES",
                        value: stats.anomalies,
                        sub: `🔍 ${stats.total ? (100 * stats.anomalies / stats.total).toFixed(1) : 0}%`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            size: 20,
                            color: "#7A6E5D"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Overview.jsx",
                            lineNumber: 50,
                            columnNumber: 157
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Overview.jsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Overview.jsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#FFFDF8',
                            border: '1px solid #D9CDBA',
                            borderRadius: 12,
                            padding: 24,
                            boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 12,
                                    color: '#C06820',
                                    letterSpacing: 2,
                                    marginBottom: 16,
                                    fontWeight: 700
                                },
                                children: "RISK DISTRIBUTION"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Overview.jsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: "50%",
                                        height: 280,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                    data: pieData,
                                                    dataKey: "value",
                                                    innerRadius: 75,
                                                    outerRadius: 110,
                                                    paddingAngle: 3,
                                                    strokeWidth: 0,
                                                    isAnimationActive: false,
                                                    children: pieData.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                            fill: d.color
                                                        }, i, false, {
                                                            fileName: "[project]/src/app/components/Overview.jsx",
                                                            lineNumber: 62,
                                                            columnNumber: 60
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Overview.jsx",
                                                    lineNumber: 61,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    contentStyle: {
                                                        background: '#FFFDF8',
                                                        border: '1px solid #D9CDBA',
                                                        borderRadius: 8,
                                                        fontFamily: 'Quicksand',
                                                        fontSize: 13,
                                                        color: '#2C2418'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Overview.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Overview.jsx",
                                            lineNumber: 60,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Overview.jsx",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: pieData.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8,
                                                    marginBottom: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 12,
                                                            height: 12,
                                                            borderRadius: 3,
                                                            background: d.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Overview.jsx",
                                                        lineNumber: 70,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 14,
                                                            color: '#7A6E5D',
                                                            flex: 1,
                                                            fontWeight: 500
                                                        },
                                                        children: d.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Overview.jsx",
                                                        lineNumber: 71,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'Quicksand',
                                                            fontSize: 17,
                                                            color: '#2C2418',
                                                            fontWeight: 700
                                                        },
                                                        children: d.value.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Overview.jsx",
                                                        lineNumber: 72,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'Quicksand',
                                                            fontSize: 13,
                                                            color: '#7A6E5D',
                                                            width: 40,
                                                            textAlign: 'right'
                                                        },
                                                        children: [
                                                            stats.total ? (100 * d.value / stats.total).toFixed(1) : 0,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Overview.jsx",
                                                        lineNumber: 73,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/components/Overview.jsx",
                                                lineNumber: 69,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Overview.jsx",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Overview.jsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Overview.jsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#FFFDF8',
                            border: '1px solid #D9CDBA',
                            borderRadius: 12,
                            padding: 24,
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 12,
                                    color: '#C62828',
                                    letterSpacing: 2,
                                    marginBottom: 16,
                                    fontWeight: 700
                                },
                                children: "⚠ FLAGGED SHIPMENTS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Overview.jsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 12
                                },
                                children: [
                                    data.filter((d)=>d.Risk_Level === 'Critical').slice(0, 4).map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: 12,
                                                background: 'rgba(198,40,40,0.04)',
                                                border: '1px solid rgba(198,40,40,0.15)',
                                                borderRadius: 8,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: 'Quicksand',
                                                                fontSize: 14,
                                                                fontWeight: 700,
                                                                color: '#C62828'
                                                            },
                                                            children: d.Container_ID
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Overview.jsx",
                                                            lineNumber: 89,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 13,
                                                                color: '#7A6E5D',
                                                                marginTop: 4,
                                                                fontWeight: 500
                                                            },
                                                            children: "Weight Discrepancy Flag"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Overview.jsx",
                                                            lineNumber: 90,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Overview.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: 'Quicksand',
                                                        fontSize: 18,
                                                        color: '#C62828',
                                                        fontWeight: 700
                                                    },
                                                    children: d.Risk_Score.toFixed(3)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Overview.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/components/Overview.jsx",
                                            lineNumber: 87,
                                            columnNumber: 29
                                        }, this)),
                                    data.filter((d)=>d.Risk_Level === 'Critical').length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#7A6E5D',
                                            fontSize: 14,
                                            textAlign: 'center',
                                            marginTop: 40,
                                            fontFamily: 'Quicksand',
                                            fontWeight: 500
                                        },
                                        children: "No flagged shipments in the current dataset."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Overview.jsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Overview.jsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Overview.jsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Overview.jsx",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Overview.jsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_s(Overview, "3FvJDKtC3yF1gbNv5/WixcrN7Rs=");
_c1 = Overview;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "Overview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/UploadData.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
;
var _s = __turbopack_context__.k.signature();
;
;
function UploadData({ onFileLoaded }) {
    _s();
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDrop = (e)=>{
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        if (file?.name.endsWith('.csv')) onFileLoaded(file);
    };
    const handleChange = (e)=>{
        const file = e.target.files[0];
        if (file) onFileLoaded(file);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            animation: 'fadeInUp 0.4s ease-out',
            maxWidth: 800,
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: 'Quicksand',
                    fontSize: 22,
                    color: '#2C2418',
                    marginBottom: 8,
                    fontWeight: 700,
                    letterSpacing: 1
                },
                children: "UPLOAD DATA"
            }, void 0, false, {
                fileName: "[project]/src/app/components/UploadData.jsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#7A6E5D',
                    fontSize: 15,
                    marginBottom: 32,
                    fontWeight: 500
                },
                children: "Upload container shipment data (CSV format) for real-time risk scoring and anomaly detection."
            }, void 0, false, {
                fileName: "[project]/src/app/components/UploadData.jsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDragOver: (e)=>{
                    e.preventDefault();
                    setDragging(true);
                },
                onDragLeave: ()=>setDragging(false),
                onDrop: handleDrop,
                onClick: ()=>fileRef.current?.click(),
                style: {
                    border: `2px dashed ${dragging ? '#C06820' : '#D9CDBA'}`,
                    borderRadius: 16,
                    padding: '60px 32px',
                    background: dragging ? 'rgba(192,104,32,0.04)' : '#FFFDF8',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.3s',
                    animation: dragging ? 'dropzonePulse 1.2s infinite' : 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: 'rgba(192,104,32,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                            size: 40,
                            color: "#C06820"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/UploadData.jsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadData.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: 'Quicksand',
                            fontSize: 20,
                            color: '#2C2418',
                            marginBottom: 12,
                            fontWeight: 700
                        },
                        children: "Drag & Drop CSV"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadData.jsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#7A6E5D',
                            fontSize: 15,
                            marginBottom: 24,
                            fontWeight: 500
                        },
                        children: "or click to browse your local file system"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadData.jsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileRef,
                        type: "file",
                        accept: ".csv",
                        hidden: true,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadData.jsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#C06820',
                            border: 'none',
                            borderRadius: 8,
                            padding: '12px 24px',
                            fontFamily: 'Quicksand',
                            fontSize: 13,
                            color: '#FFFFFF',
                            fontWeight: 800,
                            cursor: 'pointer',
                            letterSpacing: 1,
                            pointerEvents: 'none',
                            display: 'inline-block'
                        },
                        children: "SELECT DATASET"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadData.jsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UploadData.jsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 40,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#FFFDF8',
                            border: '1px solid #D9CDBA',
                            borderRadius: 12,
                            padding: 20,
                            boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                size: 24,
                                color: "#C06820",
                                style: {
                                    marginBottom: 12
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadData.jsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 13,
                                    color: '#2C2418',
                                    marginBottom: 8,
                                    letterSpacing: 1,
                                    fontWeight: 700
                                },
                                children: "REQUIRED COLUMNS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadData.jsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 13,
                                    color: '#7A6E5D',
                                    lineHeight: 1.6
                                },
                                children: "Container_ID, Declared_Weight, Measured_Weight, Declared_Value, Dwell_Time_Hours, Origin_Country, ..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadData.jsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UploadData.jsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#FFFDF8',
                            border: '1px solid #D9CDBA',
                            borderRadius: 12,
                            padding: 20,
                            boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                size: 24,
                                color: "#C06820",
                                style: {
                                    marginBottom: 12
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadData.jsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 13,
                                    color: '#2C2418',
                                    marginBottom: 8,
                                    letterSpacing: 1,
                                    fontWeight: 700
                                },
                                children: "FORMAT"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadData.jsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 13,
                                    color: '#7A6E5D',
                                    lineHeight: 1.6
                                },
                                children: "Comma-separated values (.csv) with headers in top row. Maximum file size 50MB."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadData.jsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UploadData.jsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#FFFDF8',
                            border: '1px solid #D9CDBA',
                            borderRadius: 12,
                            padding: 20,
                            boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                size: 24,
                                color: "#C06820",
                                style: {
                                    marginBottom: 12
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadData.jsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 13,
                                    color: '#2C2418',
                                    marginBottom: 8,
                                    letterSpacing: 1,
                                    fontWeight: 700
                                },
                                children: "LOCAL PROCESSING"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadData.jsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 13,
                                    color: '#7A6E5D',
                                    lineHeight: 1.6
                                },
                                children: "Data is parsed securely in-browser. No sensitive operational data leaves this machine."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadData.jsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UploadData.jsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UploadData.jsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/UploadData.jsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s(UploadData, "psJLFLG/5ybdgCC/y5zJVfRr4Tg=");
_c = UploadData;
var _c;
__turbopack_context__.k.register(_c, "UploadData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/DetailPanel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function DetailPanel({ container, onClose }) {
    _s();
    if (!container) return null;
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRiskColor"])(container.Risk_Level);
    const icon = container.Risk_Level === 'Critical' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/app/components/DetailPanel.jsx",
        lineNumber: 9,
        columnNumber: 56
    }, this) : container.Risk_Level === 'Medium Risk' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/app/components/DetailPanel.jsx",
        lineNumber: 9,
        columnNumber: 127
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/app/components/DetailPanel.jsx",
        lineNumber: 9,
        columnNumber: 147
    }, this);
    const shapFeatures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DetailPanel.useMemo[shapFeatures]": ()=>{
            const features = [];
            const wt_d = container.Declared_Weight || 0;
            const wt_m = container.Measured_Weight || 0;
            const disc = wt_d > 0 ? Math.abs(wt_m - wt_d) / wt_d : 0;
            features.push({
                name: 'Weight Discrepancy',
                value: disc,
                direction: disc > 0.10 ? 'risk' : 'safe'
            });
            const vpk = (container.Declared_Value || 0) / Math.max(1, wt_d);
            features.push({
                name: 'Value per Kg',
                value: Math.min(vpk / 5000, 1),
                direction: vpk > 500 ? 'risk' : 'safe'
            });
            const dwell = container.Dwell_Time_Hours || 0;
            features.push({
                name: 'Dwell Time',
                value: Math.min(dwell / 200, 1),
                direction: dwell > 72 ? 'risk' : 'safe'
            });
            const offHour = ({
                "DetailPanel.useMemo[shapFeatures].offHour": ()=>{
                    const h = parseInt((container.Declaration_Time || '12:00').split(':')[0]);
                    return h < 6 || h > 21;
                }
            })["DetailPanel.useMemo[shapFeatures].offHour"]();
            features.push({
                name: 'Declaration Timing',
                value: offHour ? 0.8 : 0.2,
                direction: offHour ? 'risk' : 'safe'
            });
            features.push({
                name: 'Origin Risk Profile',
                value: container.Risk_Score * 0.6,
                direction: container.Risk_Score > 0.4 ? 'risk' : 'safe'
            });
            return features;
        }
    }["DetailPanel.useMemo[shapFeatures]"], [
        container
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            right: 0,
            width: 480,
            height: '100vh',
            zIndex: 500,
            background: '#FFFDF8',
            borderLeft: '1px solid #D9CDBA',
            boxShadow: '-8px 0 32px rgba(44,36,24,0.08)',
            overflowY: 'auto',
            animation: 'slideInRight 0.3s ease-out both'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'relative'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '24px',
                        borderBottom: '1px solid #EDE7DB',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'Quicksand',
                                        fontSize: '12px',
                                        color: '#7A6E5D',
                                        marginBottom: 4,
                                        fontWeight: 700
                                    },
                                    children: "CONTAINER DETAIL"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'Quicksand',
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        color: '#2C2418'
                                    },
                                    children: container.Container_ID
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                background: '#F5F0E8',
                                border: '1px solid #D9CDBA',
                                borderRadius: 6,
                                padding: 8,
                                cursor: 'pointer',
                                color: '#7A6E5D'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/DetailPanel.jsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '20px 24px',
                        background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRiskGlow"])(container.Risk_Level),
                        borderBottom: '1px solid #EDE7DB',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        color,
                                        fontFamily: 'Quicksand',
                                        fontWeight: 700,
                                        fontSize: 17
                                    },
                                    children: [
                                        icon,
                                        " ",
                                        container.Risk_Level.toUpperCase()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#7A6E5D',
                                        fontSize: 13,
                                        marginTop: 4,
                                        fontWeight: 500
                                    },
                                    children: container.Anomaly_Flag ? 'Isolation Forest anomaly detected' : 'Within normal parameters'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'right'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'Quicksand',
                                        fontSize: 34,
                                        fontWeight: 700,
                                        color
                                    },
                                    children: container.Risk_Score.toFixed(3)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        color: '#7A6E5D',
                                        fontWeight: 600
                                    },
                                    children: "RISK SCORE"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '20px 24px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: 'Quicksand',
                                fontSize: 12,
                                color: '#C06820',
                                marginBottom: 16,
                                letterSpacing: 2,
                                fontWeight: 700
                            },
                            children: "RISK BREAKDOWN"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        shapFeatures.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 13,
                                                    color: '#2C2418',
                                                    fontWeight: 500
                                                },
                                                children: f.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/DetailPanel.jsx",
                                                lineNumber: 72,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    fontFamily: 'Quicksand',
                                                    color: f.direction === 'risk' ? '#C62828' : '#C06820',
                                                    fontWeight: 700
                                                },
                                                children: f.direction === 'risk' ? '▲ HIGH' : '▼ LOW'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/DetailPanel.jsx",
                                                lineNumber: 73,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/DetailPanel.jsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: 6,
                                            background: '#EDE7DB',
                                            borderRadius: 3,
                                            overflow: 'hidden'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: '100%',
                                                width: `${Math.min(f.value, 1) * 100}%`,
                                                background: f.direction === 'risk' ? 'linear-gradient(90deg, #E65100, #C62828)' : 'linear-gradient(90deg, #C06820, #D4924A)',
                                                borderRadius: 3,
                                                transition: 'width 0.6s ease-out'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                                            lineNumber: 78,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/DetailPanel.jsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/components/DetailPanel.jsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '0 24px 20px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: 'Quicksand',
                                fontSize: 12,
                                color: '#C06820',
                                marginBottom: 12,
                                letterSpacing: 2,
                                fontWeight: 700
                            },
                            children: "AI EXPLANATION"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#F5F0E8',
                                border: '1px solid #EDE7DB',
                                borderRadius: 8,
                                padding: 16,
                                fontFamily: 'Quicksand',
                                fontSize: 13,
                                lineHeight: 1.6,
                                color: '#2C2418',
                                fontWeight: 500
                            },
                            children: container.Explanation_Summary
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '0 24px 32px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: 'Quicksand',
                                fontSize: 12,
                                color: '#C06820',
                                marginBottom: 12,
                                letterSpacing: 2,
                                fontWeight: 700
                            },
                            children: "SHIPMENT DATA"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#F5F0E8',
                                border: '1px solid #EDE7DB',
                                borderRadius: 8,
                                overflow: 'hidden'
                            },
                            children: [
                                [
                                    'Declared Weight',
                                    `${Number(container.Declared_Weight).toLocaleString()} kg`
                                ],
                                [
                                    'Measured Weight',
                                    `${Number(container.Measured_Weight).toLocaleString()} kg`
                                ],
                                [
                                    'Declared Value',
                                    `$${Number(container.Declared_Value).toLocaleString()}`
                                ],
                                [
                                    'Dwell Time',
                                    `${container.Dwell_Time_Hours} hours`
                                ],
                                [
                                    'Origin',
                                    container.Origin_Country
                                ],
                                [
                                    'Destination',
                                    container.Destination_Country
                                ],
                                [
                                    'HS Code',
                                    container.HS_Code
                                ],
                                [
                                    'Trade Regime',
                                    container.Trade_Regime
                                ],
                                [
                                    'Shipping Line',
                                    container.Shipping_Line
                                ],
                                [
                                    'Declaration',
                                    `${container.Declaration_Date} ${container.Declaration_Time}`
                                ]
                            ].map(([label, value], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        padding: '10px 16px',
                                        borderBottom: i < 9 ? '1px solid #EDE7DB' : 'none',
                                        background: i % 2 === 0 ? 'transparent' : 'rgba(44,36,24,0.01)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#7A6E5D',
                                                fontSize: 13,
                                                fontWeight: 500
                                            },
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                                            lineNumber: 122,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'Quicksand',
                                                fontSize: 13,
                                                color: '#2C2418',
                                                fontWeight: 600
                                            },
                                            children: value
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                                            lineNumber: 123,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                                    lineNumber: 117,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/DetailPanel.jsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/DetailPanel.jsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/DetailPanel.jsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/DetailPanel.jsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(DetailPanel, "YpVsP9KWu5yaAnCV/mDxjXBeaIs=");
_c = DetailPanel;
var _c;
__turbopack_context__.k.register(_c, "DetailPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Containers.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Containers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DetailPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/DetailPanel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function RiskBadge({ level }) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRiskColor"])(level);
    const icons = {
        'Critical': '⚠',
        'Medium Risk': '⚡',
        'Low Risk': '✓'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRiskGlow"])(level),
            color: c,
            border: `1px solid ${c}30`,
            borderRadius: 6,
            padding: '4px 10px',
            fontSize: 12,
            fontWeight: 700,
            fontFamily: 'Quicksand',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4
        },
        children: [
            icons[level],
            " ",
            level.toUpperCase()
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Containers.jsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = RiskBadge;
function RiskBar({ score }) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRiskColor"])(score >= 0.5 ? 'Critical' : score >= 0.25 ? 'Medium Risk' : 'Low Risk');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 80,
                    height: 6,
                    background: '#EDE7DB',
                    borderRadius: 3,
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: '100%',
                        width: `${score * 100}%`,
                        background: c,
                        borderRadius: 3,
                        transition: 'width 0.6s ease-out'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Containers.jsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Containers.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: 'Quicksand',
                    fontSize: 13,
                    color: c,
                    fontWeight: 700,
                    minWidth: 40
                },
                children: score.toFixed(3)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Containers.jsx",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Containers.jsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_c1 = RiskBar;
function Containers({ data }) {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Risk_Score');
    const [sortDir, setSortDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('desc');
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSort = (key)=>{
        if (sortKey === key) setSortDir((d)=>d === 'asc' ? 'desc' : 'asc');
        else {
            setSortKey(key);
            setSortDir('desc');
        }
    };
    const handleExport = ()=>{
        const header = Object.keys(data[0] || {}).join(',');
        const rows = data.map((r)=>Object.values(r).join(','));
        const blob = new Blob([
            header + '\n' + rows.join('\n')
        ], {
            type: 'text/csv'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'risk_export.csv';
        a.click();
    };
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Containers.useMemo[filtered]": ()=>{
            let result = [
                ...data
            ];
            if (filter !== 'All') result = result.filter({
                "Containers.useMemo[filtered]": (r)=>r.Risk_Level === filter
            }["Containers.useMemo[filtered]"]);
            if (search) result = result.filter({
                "Containers.useMemo[filtered]": (r)=>r.Container_ID?.toLowerCase().includes(search.toLowerCase())
            }["Containers.useMemo[filtered]"]);
            result.sort({
                "Containers.useMemo[filtered]": (a, b)=>{
                    const av = a[sortKey], bv = b[sortKey];
                    const dir = sortDir === 'asc' ? 1 : -1;
                    return av > bv ? dir : av < bv ? -dir : 0;
                }
            }["Containers.useMemo[filtered]"]);
            return result;
        }
    }["Containers.useMemo[filtered]"], [
        data,
        filter,
        search,
        sortKey,
        sortDir
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            animation: 'fadeInUp 0.4s ease-out',
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 120px)'
        },
        children: [
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DetailPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                container: selected,
                onClose: ()=>setSelected(null)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Containers.jsx",
                lineNumber: 66,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: 'Quicksand',
                    fontSize: 22,
                    color: '#2C2418',
                    marginBottom: 24,
                    fontWeight: 700,
                    letterSpacing: 1
                },
                children: "CONTAINER REGISTRY"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Containers.jsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#FFFDF8',
                    border: '1px solid #D9CDBA',
                    borderRadius: 12,
                    overflow: 'hidden',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '16px 24px',
                            borderBottom: '1px solid #EDE7DB',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Quicksand',
                                            fontSize: 13,
                                            color: '#C06820',
                                            letterSpacing: 2,
                                            fontWeight: 700
                                        },
                                        children: "FILTER & SEARCH"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Containers.jsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#7A6E5D',
                                            fontFamily: 'Quicksand',
                                            fontSize: 12,
                                            background: '#F5F0E8',
                                            padding: '4px 8px',
                                            borderRadius: 4,
                                            border: '1px solid #EDE7DB',
                                            fontWeight: 600
                                        },
                                        children: [
                                            filtered.length.toLocaleString(),
                                            " records matched"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Containers.jsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Containers.jsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 14,
                                                color: "#7A6E5D",
                                                style: {
                                                    position: 'absolute',
                                                    left: 10,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Containers.jsx",
                                                lineNumber: 86,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: search,
                                                onChange: (e)=>setSearch(e.target.value),
                                                placeholder: "Search ID...",
                                                style: {
                                                    background: '#F5F0E8',
                                                    border: '1px solid #D9CDBA',
                                                    borderRadius: 6,
                                                    padding: '8px 12px 8px 32px',
                                                    color: '#2C2418',
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 13,
                                                    width: 220,
                                                    outline: 'none',
                                                    fontWeight: 500
                                                },
                                                onFocus: (e)=>e.target.style.borderColor = '#C06820',
                                                onBlur: (e)=>e.target.style.borderColor = '#D9CDBA'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Containers.jsx",
                                                lineNumber: 87,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Containers.jsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this),
                                    [
                                        'All',
                                        'Critical',
                                        'Medium Risk',
                                        'Low Risk'
                                    ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFilter(f),
                                            style: {
                                                background: filter === f ? f === 'Critical' ? '#C6282815' : f === 'Medium Risk' ? '#E6510015' : f === 'Low Risk' ? '#2E7D3215' : '#C0682010' : 'transparent',
                                                border: `1px solid ${filter === f ? f === 'Critical' ? '#C6282840' : f === 'Medium Risk' ? '#E6510040' : f === 'Low Risk' ? '#2E7D3240' : '#C0682030' : '#D9CDBA'}`,
                                                borderRadius: 6,
                                                padding: '6px 12px',
                                                fontFamily: 'Quicksand',
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: filter === f ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRiskColor"])(f) || '#C06820' : '#7A6E5D',
                                                cursor: 'pointer'
                                            },
                                            children: f
                                        }, f, false, {
                                            fileName: "[project]/src/app/components/Containers.jsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleExport,
                                        style: {
                                            background: 'rgba(44,36,24,0.03)',
                                            border: '1px solid #D9CDBA',
                                            borderRadius: 6,
                                            padding: '6px 12px',
                                            fontFamily: 'Quicksand',
                                            fontSize: 12,
                                            color: '#2C2418',
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            letterSpacing: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6,
                                            marginLeft: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Containers.jsx",
                                                lineNumber: 110,
                                                columnNumber: 29
                                            }, this),
                                            " EXPORT"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Containers.jsx",
                                        lineNumber: 105,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Containers.jsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Containers.jsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflow: 'auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: {
                                    width: '100%',
                                    borderCollapse: 'collapse'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                borderBottom: '1px solid #EDE7DB',
                                                background: '#F5F0E8'
                                            },
                                            children: [
                                                {
                                                    key: 'Container_ID',
                                                    label: 'CONTAINER ID'
                                                },
                                                {
                                                    key: 'Risk_Score',
                                                    label: 'RISK SCORE'
                                                },
                                                {
                                                    key: 'Risk_Level',
                                                    label: 'RISK LEVEL'
                                                },
                                                {
                                                    key: 'Anomaly_Flag',
                                                    label: 'ANOMALY'
                                                },
                                                {
                                                    key: 'Declared_Weight',
                                                    label: 'DECL. WT (KG)'
                                                },
                                                {
                                                    key: 'Origin_Country',
                                                    label: 'ORIGIN'
                                                },
                                                {
                                                    key: null,
                                                    label: 'ACTION'
                                                }
                                            ].map((col, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    onClick: ()=>col.key && handleSort(col.key),
                                                    style: {
                                                        padding: '16px',
                                                        textAlign: 'left',
                                                        fontFamily: 'Quicksand',
                                                        fontSize: 11,
                                                        color: '#7A6E5D',
                                                        letterSpacing: 1.5,
                                                        cursor: col.key ? 'pointer' : 'default',
                                                        background: sortKey === col.key ? 'rgba(192,104,32,0.04)' : 'transparent',
                                                        whiteSpace: 'nowrap',
                                                        userSelect: 'none',
                                                        fontWeight: 700
                                                    },
                                                    children: [
                                                        col.label,
                                                        " ",
                                                        sortKey === col.key && (sortDir === 'asc' ? '▲' : '▼')
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/components/Containers.jsx",
                                                    lineNumber: 129,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Containers.jsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Containers.jsx",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: filtered.slice(0, 300).map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: '1px solid #EDE7DB',
                                                    cursor: 'pointer',
                                                    background: row.Risk_Level === 'Critical' ? 'rgba(198,40,40,0.02)' : 'transparent',
                                                    transition: 'all 0.15s'
                                                },
                                                onClick: ()=>setSelected(row),
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.background = '#F5F0E8';
                                                    e.currentTarget.style.boxShadow = 'inset 4px 0 0 #C06820';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.background = row.Risk_Level === 'Critical' ? 'rgba(198,40,40,0.02)' : 'transparent';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '16px',
                                                            fontFamily: 'Quicksand',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: '#2C2418'
                                                        },
                                                        children: row.Container_ID
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Containers.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '16px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiskBar, {
                                                            score: row.Risk_Score
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Containers.jsx",
                                                            lineNumber: 156,
                                                            columnNumber: 69
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Containers.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '16px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiskBadge, {
                                                            level: row.Risk_Level
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Containers.jsx",
                                                            lineNumber: 157,
                                                            columnNumber: 69
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Containers.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '16px'
                                                        },
                                                        children: row.Anomaly_Flag ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: 6,
                                                                color: '#C62828',
                                                                fontFamily: 'Quicksand',
                                                                fontSize: 12,
                                                                fontWeight: 600
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        width: 8,
                                                                        height: 8,
                                                                        borderRadius: '50%',
                                                                        background: '#C62828',
                                                                        animation: 'pulse-dot 1.5s infinite',
                                                                        display: 'inline-block'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Containers.jsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 49
                                                                }, this),
                                                                " MATCH"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Containers.jsx",
                                                            lineNumber: 160,
                                                            columnNumber: 45
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: '#7A6E5D',
                                                                fontFamily: 'Quicksand',
                                                                fontSize: 12,
                                                                fontWeight: 500
                                                            },
                                                            children: "— CLEAR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Containers.jsx",
                                                            lineNumber: 163,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Containers.jsx",
                                                        lineNumber: 158,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '16px',
                                                            fontFamily: 'Quicksand',
                                                            fontSize: 13,
                                                            color: '#2C2418',
                                                            fontWeight: 500
                                                        },
                                                        children: Number(row.Declared_Weight).toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Containers.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '16px',
                                                            fontFamily: 'Quicksand',
                                                            fontSize: 13,
                                                            color: '#7A6E5D',
                                                            fontWeight: 500
                                                        },
                                                        children: row.Origin_Country || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Containers.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '16px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            style: {
                                                                background: 'transparent',
                                                                border: '1px solid #C0682040',
                                                                borderRadius: 4,
                                                                padding: '4px 12px',
                                                                fontFamily: 'Quicksand',
                                                                fontSize: 11,
                                                                color: '#C06820',
                                                                cursor: 'pointer',
                                                                letterSpacing: 1,
                                                                fontWeight: 700
                                                            },
                                                            children: "INSPECT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Containers.jsx",
                                                            lineNumber: 172,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Containers.jsx",
                                                        lineNumber: 171,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/components/Containers.jsx",
                                                lineNumber: 142,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Containers.jsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Containers.jsx",
                                lineNumber: 117,
                                columnNumber: 21
                            }, this),
                            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: 64,
                                    textAlign: 'center',
                                    color: '#7A6E5D',
                                    fontFamily: 'Quicksand',
                                    fontSize: 14,
                                    fontWeight: 500
                                },
                                children: "NO CONTAINERS FOUND MATCHING YOUR CRITERIA"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Containers.jsx",
                                lineNumber: 185,
                                columnNumber: 25
                            }, this),
                            filtered.length > 300 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: 16,
                                    textAlign: 'center',
                                    fontSize: 13,
                                    color: '#A69882',
                                    fontFamily: 'Quicksand',
                                    borderTop: '1px solid #EDE7DB',
                                    fontWeight: 500
                                },
                                children: [
                                    "Showing top 300 of ",
                                    filtered.length.toLocaleString(),
                                    " matching records. Use narrower search."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Containers.jsx",
                                lineNumber: 190,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Containers.jsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Containers.jsx",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Containers.jsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(Containers, "m8ViI0UjSZ49ICL1Xg3aUqWPzgA=");
_c2 = Containers;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RiskBadge");
__turbopack_context__.k.register(_c1, "RiskBar");
__turbopack_context__.k.register(_c2, "Containers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Analytics.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Analytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ScatterChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Scatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Weight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/weight.js [app-client] (ecmascript) <export default as Weight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ship.js [app-client] (ecmascript) <export default as Ship>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const CARD = {
    background: '#FFFDF8',
    border: '1px solid #D9CDBA',
    borderRadius: 12,
    padding: 24,
    boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
};
const LABEL = {
    fontFamily: 'Quicksand',
    fontSize: 12,
    color: '#C06820',
    letterSpacing: 2,
    marginBottom: 16,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: 8
};
const TT = {
    background: '#FFFDF8',
    border: '1px solid #D9CDBA',
    borderRadius: 8,
    fontFamily: 'Quicksand',
    fontSize: 13,
    color: '#2C2418'
};
function Analytics({ data }) {
    _s();
    const [selectedHour, setSelectedHour] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // containers for the selected hour
    const selectedContainers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[selectedContainers]": ()=>{
            if (selectedHour === null) return [];
            return data.filter({
                "Analytics.useMemo[selectedContainers]": (d)=>{
                    const h = parseInt((d.Declaration_Time || '12:00').split(':')[0]);
                    return h === selectedHour;
                }
            }["Analytics.useMemo[selectedContainers]"]);
        }
    }["Analytics.useMemo[selectedContainers]"], [
        data,
        selectedHour
    ]);
    // ── Risk score histogram (buckets of 0.1) ──
    const histogram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[histogram]": ()=>{
            const buckets = Array.from({
                length: 10
            }, {
                "Analytics.useMemo[histogram].buckets": (_, i)=>({
                        range: `${(i * 0.1).toFixed(1)}–${((i + 1) * 0.1).toFixed(1)}`,
                        count: 0,
                        low: i * 0.1
                    })
            }["Analytics.useMemo[histogram].buckets"]);
            data.forEach({
                "Analytics.useMemo[histogram]": (d)=>{
                    const idx = Math.min(Math.floor(d.Risk_Score * 10), 9);
                    buckets[idx].count++;
                }
            }["Analytics.useMemo[histogram]"]);
            return buckets;
        }
    }["Analytics.useMemo[histogram]"], [
        data
    ]);
    // ── Top origin countries ──
    const origins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[origins]": ()=>{
            const map = {};
            data.forEach({
                "Analytics.useMemo[origins]": (d)=>{
                    const c = d.Origin_Country || 'Unknown';
                    map[c] = (map[c] || 0) + 1;
                }
            }["Analytics.useMemo[origins]"]);
            return Object.entries(map).map({
                "Analytics.useMemo[origins]": ([country, count])=>({
                        country,
                        count
                    })
            }["Analytics.useMemo[origins]"]).sort({
                "Analytics.useMemo[origins]": (a, b)=>b.count - a.count
            }["Analytics.useMemo[origins]"]).slice(0, 10);
        }
    }["Analytics.useMemo[origins]"], [
        data
    ]);
    // ── Weight discrepancy scatter ──
    const weightData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[weightData]": ()=>{
            return data.map({
                "Analytics.useMemo[weightData]": (d)=>{
                    const decl = Number(d.Declared_Weight) || 1;
                    const meas = Number(d.Measured_Weight) || 0;
                    const discrepancy = (meas - decl) / decl * 100;
                    return {
                        id: d.Container_ID,
                        riskScore: d.Risk_Score,
                        discrepancy: parseFloat(discrepancy.toFixed(1)),
                        level: d.Risk_Level
                    };
                }
            }["Analytics.useMemo[weightData]"]);
        }
    }["Analytics.useMemo[weightData]"], [
        data
    ]);
    // ── Dwell time distribution ──
    const dwellData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[dwellData]": ()=>{
            const buckets = [
                {
                    range: '0–24h',
                    count: 0
                },
                {
                    range: '24–48h',
                    count: 0
                },
                {
                    range: '48–72h',
                    count: 0
                },
                {
                    range: '72–120h',
                    count: 0
                },
                {
                    range: '120h+',
                    count: 0
                }
            ];
            data.forEach({
                "Analytics.useMemo[dwellData]": (d)=>{
                    const h = d.Dwell_Time_Hours || 0;
                    if (h <= 24) buckets[0].count++;
                    else if (h <= 48) buckets[1].count++;
                    else if (h <= 72) buckets[2].count++;
                    else if (h <= 120) buckets[3].count++;
                    else buckets[4].count++;
                }
            }["Analytics.useMemo[dwellData]"]);
            return buckets;
        }
    }["Analytics.useMemo[dwellData]"], [
        data
    ]);
    // ── Risk by trade regime ──
    const regimeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[regimeData]": ()=>{
            const map = {};
            data.forEach({
                "Analytics.useMemo[regimeData]": (d)=>{
                    const r = d.Trade_Regime || 'Unknown';
                    if (!map[r]) map[r] = {
                        regime: r,
                        total: 0,
                        critical: 0,
                        medium: 0,
                        low: 0
                    };
                    map[r].total++;
                    if (d.Risk_Level === 'Critical') map[r].critical++;
                    else if (d.Risk_Level === 'Medium Risk') map[r].medium++;
                    else map[r].low++;
                }
            }["Analytics.useMemo[regimeData]"]);
            return Object.values(map);
        }
    }["Analytics.useMemo[regimeData]"], [
        data
    ]);
    // ── NEW: Off-Hours Declaration Analysis (#1) ──
    const offHoursData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[offHoursData]": ()=>{
            let offHours = 0, businessHours = 0;
            let offCritical = 0, busCritical = 0;
            data.forEach({
                "Analytics.useMemo[offHoursData]": (d)=>{
                    const h = parseInt((d.Declaration_Time || '12:00').split(':')[0]);
                    if (h < 6 || h > 20) {
                        offHours++;
                        if (d.Risk_Level === 'Critical') offCritical++;
                    } else {
                        businessHours++;
                        if (d.Risk_Level === 'Critical') busCritical++;
                    }
                }
            }["Analytics.useMemo[offHoursData]"]);
            return {
                pie: [
                    {
                        name: 'Off-Hours (10PM–6AM)',
                        value: offHours,
                        color: '#C62828'
                    },
                    {
                        name: 'Business Hours (6AM–10PM)',
                        value: businessHours,
                        color: '#2E7D32'
                    }
                ],
                offHours,
                businessHours,
                offCritical,
                busCritical,
                offCritPct: offHours ? (offCritical / offHours * 100).toFixed(1) : 0,
                busCritPct: businessHours ? (busCritical / businessHours * 100).toFixed(1) : 0
            };
        }
    }["Analytics.useMemo[offHoursData]"], [
        data
    ]);
    // ── NEW: Value per Kg Analysis (#4) ──
    const vpkData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[vpkData]": ()=>{
            const buckets = [
                {
                    range: '$0/kg',
                    count: 0,
                    avgRisk: 0,
                    total: 0,
                    label: 'Zero Value'
                },
                {
                    range: '<$10',
                    count: 0,
                    avgRisk: 0,
                    total: 0,
                    label: 'Very Low'
                },
                {
                    range: '$10–100',
                    count: 0,
                    avgRisk: 0,
                    total: 0,
                    label: 'Low'
                },
                {
                    range: '$100–500',
                    count: 0,
                    avgRisk: 0,
                    total: 0,
                    label: 'Medium'
                },
                {
                    range: '$500–2K',
                    count: 0,
                    avgRisk: 0,
                    total: 0,
                    label: 'High'
                },
                {
                    range: '>$2K',
                    count: 0,
                    avgRisk: 0,
                    total: 0,
                    label: 'Very High'
                }
            ];
            data.forEach({
                "Analytics.useMemo[vpkData]": (d)=>{
                    const wt = Number(d.Declared_Weight) || 1;
                    const vpk = (Number(d.Declared_Value) || 0) / wt;
                    const risk = d.Risk_Score;
                    let idx;
                    if (vpk === 0) idx = 0;
                    else if (vpk < 10) idx = 1;
                    else if (vpk < 100) idx = 2;
                    else if (vpk < 500) idx = 3;
                    else if (vpk < 2000) idx = 4;
                    else idx = 5;
                    buckets[idx].count++;
                    buckets[idx].total += risk;
                }
            }["Analytics.useMemo[vpkData]"]);
            buckets.forEach({
                "Analytics.useMemo[vpkData]": (b)=>{
                    b.avgRisk = b.count ? parseFloat((b.total / b.count).toFixed(3)) : 0;
                }
            }["Analytics.useMemo[vpkData]"]);
            return buckets;
        }
    }["Analytics.useMemo[vpkData]"], [
        data
    ]);
    // ── NEW: HS Code Hotspots (#5) ──
    const hsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[hsData]": ()=>{
            const map = {};
            data.forEach({
                "Analytics.useMemo[hsData]": (d)=>{
                    const hs = String(d.HS_Code || 'Unknown');
                    const prefix = hs.length >= 4 ? hs.slice(0, 4) : hs;
                    if (!map[prefix]) map[prefix] = {
                        hsCode: prefix,
                        total: 0,
                        sumRisk: 0,
                        critical: 0
                    };
                    map[prefix].total++;
                    map[prefix].sumRisk += d.Risk_Score;
                    if (d.Risk_Level === 'Critical') map[prefix].critical++;
                }
            }["Analytics.useMemo[hsData]"]);
            return Object.values(map).map({
                "Analytics.useMemo[hsData]": (h)=>({
                        ...h,
                        avgRisk: parseFloat((h.sumRisk / h.total).toFixed(3))
                    })
            }["Analytics.useMemo[hsData]"]).sort({
                "Analytics.useMemo[hsData]": (a, b)=>b.avgRisk - a.avgRisk
            }["Analytics.useMemo[hsData]"]).slice(0, 10);
        }
    }["Analytics.useMemo[hsData]"], [
        data
    ]);
    // ── NEW: Declaration Time Heatmap (#9) ──
    const timeHeatmap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[timeHeatmap]": ()=>{
            const hours = Array.from({
                length: 24
            }, {
                "Analytics.useMemo[timeHeatmap].hours": (_, i)=>({
                        hour: i,
                        label: `${String(i).padStart(2, '0')}:00`,
                        total: 0,
                        critical: 0,
                        avgRisk: 0,
                        sumRisk: 0,
                        isOffHours: i < 6 || i > 20
                    })
            }["Analytics.useMemo[timeHeatmap].hours"]);
            data.forEach({
                "Analytics.useMemo[timeHeatmap]": (d)=>{
                    const h = parseInt((d.Declaration_Time || '12:00').split(':')[0]);
                    if (h >= 0 && h < 24) {
                        hours[h].total++;
                        hours[h].sumRisk += d.Risk_Score;
                        if (d.Risk_Level === 'Critical') hours[h].critical++;
                    }
                }
            }["Analytics.useMemo[timeHeatmap]"]);
            hours.forEach({
                "Analytics.useMemo[timeHeatmap]": (h)=>{
                    h.avgRisk = h.total ? parseFloat((h.sumRisk / h.total).toFixed(3)) : 0;
                }
            }["Analytics.useMemo[timeHeatmap]"]);
            return hours;
        }
    }["Analytics.useMemo[timeHeatmap]"], [
        data
    ]);
    // ── KPI stats ──
    const kpis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[kpis]": ()=>{
            const avgScore = data.length ? data.reduce({
                "Analytics.useMemo[kpis]": (s, d)=>s + d.Risk_Score
            }["Analytics.useMemo[kpis]"], 0) / data.length : 0;
            const avgDwell = data.length ? data.reduce({
                "Analytics.useMemo[kpis]": (s, d)=>s + (d.Dwell_Time_Hours || 0)
            }["Analytics.useMemo[kpis]"], 0) / data.length : 0;
            const anomalyRate = data.length ? data.filter({
                "Analytics.useMemo[kpis]": (d)=>d.Anomaly_Flag
            }["Analytics.useMemo[kpis]"]).length / data.length * 100 : 0;
            const avgDisc = data.length ? data.reduce({
                "Analytics.useMemo[kpis]": (s, d)=>{
                    const decl = Number(d.Declared_Weight) || 1;
                    const meas = Number(d.Measured_Weight) || 0;
                    return s + Math.abs((meas - decl) / decl * 100);
                }
            }["Analytics.useMemo[kpis]"], 0) / data.length : 0;
            const uniqueOrigins = new Set(data.map({
                "Analytics.useMemo[kpis]": (d)=>d.Origin_Country
            }["Analytics.useMemo[kpis]"])).size;
            const criticalPct = data.length ? data.filter({
                "Analytics.useMemo[kpis]": (d)=>d.Risk_Level === 'Critical'
            }["Analytics.useMemo[kpis]"]).length / data.length * 100 : 0;
            return {
                avgScore,
                avgDwell,
                anomalyRate,
                avgDisc,
                uniqueOrigins,
                criticalPct
            };
        }
    }["Analytics.useMemo[kpis]"], [
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            animation: 'fadeInUp 0.4s ease-out'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: 'Quicksand',
                    fontSize: 22,
                    color: '#2C2418',
                    marginBottom: 24,
                    fontWeight: 700,
                    letterSpacing: 1
                },
                children: "RISK ANALYTICS"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Analytics.jsx",
                lineNumber: 221,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: 12,
                    marginBottom: 24
                },
                children: [
                    {
                        label: 'AVG RISK',
                        value: kpis.avgScore.toFixed(3),
                        color: kpis.avgScore >= 0.5 ? '#C62828' : '#C06820',
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Analytics.jsx",
                            lineNumber: 228,
                            columnNumber: 134
                        }, this)
                    },
                    {
                        label: 'CRITICAL %',
                        value: `${kpis.criticalPct.toFixed(1)}%`,
                        color: '#C62828',
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Analytics.jsx",
                            lineNumber: 229,
                            columnNumber: 110
                        }, this)
                    },
                    {
                        label: 'ANOMALY RATE',
                        value: `${kpis.anomalyRate.toFixed(1)}%`,
                        color: '#E65100',
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Analytics.jsx",
                            lineNumber: 230,
                            columnNumber: 112
                        }, this)
                    },
                    {
                        label: 'AVG WT DELTA',
                        value: `${kpis.avgDisc.toFixed(1)}%`,
                        color: '#C06820',
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Weight$3e$__["Weight"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Analytics.jsx",
                            lineNumber: 231,
                            columnNumber: 108
                        }, this)
                    },
                    {
                        label: 'AVG DWELL',
                        value: `${kpis.avgDwell.toFixed(0)}h`,
                        color: '#7A6E5D',
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Analytics.jsx",
                            lineNumber: 232,
                            columnNumber: 106
                        }, this)
                    },
                    {
                        label: 'ORIGINS',
                        value: kpis.uniqueOrigins,
                        color: '#2E7D32',
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Analytics.jsx",
                            lineNumber: 233,
                            columnNumber: 92
                        }, this)
                    }
                ].map((k, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...CARD,
                            padding: '16px 20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    color: '#7A6E5D',
                                    marginBottom: 4
                                },
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(k.icon, {
                                        color: k.color
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Quicksand',
                                            fontSize: 10,
                                            letterSpacing: 1.5,
                                            fontWeight: 700
                                        },
                                        children: k.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 238,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 24,
                                    fontWeight: 700,
                                    color: k.color
                                },
                                children: k.value
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 240,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 235,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Analytics.jsx",
                lineNumber: 226,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16,
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: CARD,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                        size: 16,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 248,
                                        columnNumber: 40
                                    }, this),
                                    " RISK SCORE DISTRIBUTION"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 248,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 260,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: histogram,
                                    barSize: 28,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            stroke: "#EDE7DB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 251,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "range",
                                            tick: {
                                                fontSize: 11,
                                                fill: '#7A6E5D',
                                                fontFamily: 'Quicksand'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 252,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            tick: {
                                                fontSize: 11,
                                                fill: '#7A6E5D',
                                                fontFamily: 'Quicksand'
                                            },
                                            allowDecimals: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 253,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: TT
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 254,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "count",
                                            radius: [
                                                4,
                                                4,
                                                0,
                                                0
                                            ],
                                            children: histogram.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: b.low >= 0.5 ? '#C62828' : b.low >= 0.25 ? '#E65100' : '#2E7D32'
                                                }, i, false, {
                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                    lineNumber: 257,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 255,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 250,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 249,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 247,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: CARD,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        size: 16,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 265,
                                        columnNumber: 40
                                    }, this),
                                    " TOP ORIGIN COUNTRIES"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 265,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 260,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: origins,
                                    layout: "vertical",
                                    barSize: 18,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            stroke: "#EDE7DB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 268,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            type: "number",
                                            tick: {
                                                fontSize: 11,
                                                fill: '#7A6E5D',
                                                fontFamily: 'Quicksand'
                                            },
                                            allowDecimals: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 269,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            dataKey: "country",
                                            type: "category",
                                            tick: {
                                                fontSize: 12,
                                                fill: '#2C2418',
                                                fontFamily: 'Quicksand',
                                                fontWeight: 600
                                            },
                                            width: 50
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 270,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: TT
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 271,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "count",
                                            fill: "#C06820",
                                            radius: [
                                                0,
                                                4,
                                                4,
                                                0
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 272,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 267,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 266,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 264,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Analytics.jsx",
                lineNumber: 246,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16,
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: CARD,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Weight$3e$__["Weight"], {
                                        size: 16,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 281,
                                        columnNumber: 40
                                    }, this),
                                    " WEIGHT DISCREPANCY vs RISK SCORE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 281,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 260,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScatterChart"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            stroke: "#EDE7DB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 284,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "discrepancy",
                                            name: "Wt Δ%",
                                            tick: {
                                                fontSize: 11,
                                                fill: '#7A6E5D',
                                                fontFamily: 'Quicksand'
                                            },
                                            label: {
                                                value: 'Weight Δ%',
                                                position: 'insideBottom',
                                                offset: -5,
                                                style: {
                                                    fontSize: 11,
                                                    fill: '#7A6E5D',
                                                    fontFamily: 'Quicksand'
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 285,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            dataKey: "riskScore",
                                            name: "Risk",
                                            tick: {
                                                fontSize: 11,
                                                fill: '#7A6E5D',
                                                fontFamily: 'Quicksand'
                                            },
                                            label: {
                                                value: 'Risk Score',
                                                angle: -90,
                                                position: 'insideLeft',
                                                style: {
                                                    fontSize: 11,
                                                    fill: '#7A6E5D',
                                                    fontFamily: 'Quicksand'
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 287,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: TT,
                                            formatter: (v, name)=>[
                                                    typeof v === 'number' ? v.toFixed(3) : v,
                                                    name
                                                ]
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 289,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
                                            data: weightData,
                                            children: weightData.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRiskColor"])(d.level),
                                                    opacity: 0.7
                                                }, i, false, {
                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 290,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 283,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 282,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 280,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: CARD,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 16,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 300,
                                        columnNumber: 40
                                    }, this),
                                    " DWELL TIME DISTRIBUTION"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 260,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                                    data: dwellData,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            stroke: "#EDE7DB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 303,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "range",
                                            tick: {
                                                fontSize: 11,
                                                fill: '#7A6E5D',
                                                fontFamily: 'Quicksand'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 304,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            tick: {
                                                fontSize: 11,
                                                fill: '#7A6E5D',
                                                fontFamily: 'Quicksand'
                                            },
                                            allowDecimals: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 305,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: TT
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 306,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "dwellGrad",
                                                x1: "0",
                                                y1: "0",
                                                x2: "0",
                                                y2: "1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "#C06820",
                                                        stopOpacity: 0.3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 309,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "#C06820",
                                                        stopOpacity: 0.02
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 310,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 308,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 307,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                            type: "monotone",
                                            dataKey: "count",
                                            stroke: "#C06820",
                                            strokeWidth: 2,
                                            fill: "url(#dwellGrad)",
                                            dot: {
                                                fill: '#C06820',
                                                r: 4
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 313,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 302,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 301,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 299,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Analytics.jsx",
                lineNumber: 279,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16,
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: CARD,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        size: 16,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 324,
                                        columnNumber: 40
                                    }, this),
                                    " OFF-HOURS DECLARATION ANALYSIS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 324,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: "45%",
                                        height: 220,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                    data: offHoursData.pie,
                                                    dataKey: "value",
                                                    innerRadius: 55,
                                                    outerRadius: 80,
                                                    paddingAngle: 4,
                                                    strokeWidth: 0,
                                                    isAnimationActive: false,
                                                    children: offHoursData.pie.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                            fill: d.color
                                                        }, i, false, {
                                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                                            lineNumber: 329,
                                                            columnNumber: 69
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                    lineNumber: 328,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    contentStyle: TT
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                    lineNumber: 331,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 327,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 326,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 8,
                                                            marginBottom: 6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                                size: 14,
                                                                color: "#C62828"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                                lineNumber: 337,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'Quicksand',
                                                                    fontSize: 13,
                                                                    color: '#7A6E5D',
                                                                    fontWeight: 600
                                                                },
                                                                children: "Off-Hours (10PM–6AM)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                                lineNumber: 338,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 336,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: 'Quicksand',
                                                            fontSize: 22,
                                                            fontWeight: 700,
                                                            color: '#C62828'
                                                        },
                                                        children: [
                                                            offHoursData.offHours,
                                                            " containers"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 340,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: '#7A6E5D',
                                                            marginTop: 2,
                                                            fontWeight: 500
                                                        },
                                                        children: [
                                                            offHoursData.offCritPct,
                                                            "% flagged critical"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 341,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 335,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 8,
                                                            marginBottom: 6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                                size: 14,
                                                                color: "#2E7D32"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                                lineNumber: 347,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'Quicksand',
                                                                    fontSize: 13,
                                                                    color: '#7A6E5D',
                                                                    fontWeight: 600
                                                                },
                                                                children: "Business Hours"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                                lineNumber: 348,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 346,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: 'Quicksand',
                                                            fontSize: 22,
                                                            fontWeight: 700,
                                                            color: '#2E7D32'
                                                        },
                                                        children: [
                                                            offHoursData.businessHours,
                                                            " containers"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 350,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: '#7A6E5D',
                                                            marginTop: 2,
                                                            fontWeight: 500
                                                        },
                                                        children: [
                                                            offHoursData.busCritPct,
                                                            "% flagged critical"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 351,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 345,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 334,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 325,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    padding: '10px 14px',
                                    background: 'rgba(198,40,40,0.04)',
                                    border: '1px solid rgba(198,40,40,0.12)',
                                    borderRadius: 8,
                                    fontSize: 12,
                                    color: '#7A6E5D',
                                    fontWeight: 500,
                                    lineHeight: 1.5
                                },
                                children: "⚠ Off-hours declarations are a key risk signal. The AI model assigns +0.08 risk weight to containers declared between 10PM and 6AM."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 357,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 323,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: CARD,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                        size: 16,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 364,
                                        columnNumber: 40
                                    }, this),
                                    " VALUE PER KG — RISK CORRELATION"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 364,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 220,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: vpkData,
                                    barSize: 32,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            stroke: "#EDE7DB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 367,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "range",
                                            tick: {
                                                fontSize: 11,
                                                fill: '#7A6E5D',
                                                fontFamily: 'Quicksand'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 368,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            yAxisId: "left",
                                            tick: {
                                                fontSize: 11,
                                                fill: '#7A6E5D',
                                                fontFamily: 'Quicksand'
                                            },
                                            allowDecimals: false,
                                            label: {
                                                value: 'Count',
                                                angle: -90,
                                                position: 'insideLeft',
                                                style: {
                                                    fontSize: 11,
                                                    fill: '#7A6E5D'
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 369,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            yAxisId: "right",
                                            orientation: "right",
                                            tick: {
                                                fontSize: 11,
                                                fill: '#C62828',
                                                fontFamily: 'Quicksand'
                                            },
                                            domain: [
                                                0,
                                                1
                                            ],
                                            label: {
                                                value: 'Avg Risk',
                                                angle: 90,
                                                position: 'insideRight',
                                                style: {
                                                    fontSize: 11,
                                                    fill: '#C62828'
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 371,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: TT
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 374,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            yAxisId: "left",
                                            dataKey: "count",
                                            fill: "#C06820",
                                            radius: [
                                                4,
                                                4,
                                                0,
                                                0
                                            ],
                                            opacity: 0.6,
                                            name: "Containers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 375,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            yAxisId: "right",
                                            dataKey: "avgRisk",
                                            fill: "#C62828",
                                            radius: [
                                                4,
                                                4,
                                                0,
                                                0
                                            ],
                                            name: "Avg Risk Score"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Analytics.jsx",
                                            lineNumber: 376,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 366,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 365,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    padding: '10px 14px',
                                    background: 'rgba(192,104,32,0.04)',
                                    border: '1px solid rgba(192,104,32,0.12)',
                                    borderRadius: 8,
                                    fontSize: 12,
                                    color: '#7A6E5D',
                                    fontWeight: 500,
                                    lineHeight: 1.5
                                },
                                children: "💰 Zero-value declarations (+0.20 risk) and ultra-high value/kg (>$5000, +0.15 risk) are strong smuggling indicators used by the AI model."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 379,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 363,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Analytics.jsx",
                lineNumber: 320,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16,
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: CARD,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        size: 16,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 390,
                                        columnNumber: 40
                                    }, this),
                                    " HS CODE RISK HOTSPOTS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 390,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 8
                                },
                                children: hsData.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 12,
                                            padding: '8px 12px',
                                            background: i === 0 ? 'rgba(198,40,40,0.04)' : 'transparent',
                                            borderRadius: 6,
                                            border: i === 0 ? '1px solid rgba(198,40,40,0.12)' : '1px solid transparent'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 13,
                                                    fontWeight: 700,
                                                    color: '#2C2418',
                                                    minWidth: 50
                                                },
                                                children: h.hsCode
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 398,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    height: 8,
                                                    background: '#EDE7DB',
                                                    borderRadius: 4,
                                                    overflow: 'hidden'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        height: '100%',
                                                        width: `${Math.min(h.avgRisk * 100, 100)}%`,
                                                        background: h.avgRisk >= 0.5 ? '#C62828' : h.avgRisk >= 0.25 ? '#E65100' : '#2E7D32',
                                                        borderRadius: 4,
                                                        transition: 'width 0.6s'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                    lineNumber: 402,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 401,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    minWidth: 45,
                                                    textAlign: 'right',
                                                    color: h.avgRisk >= 0.5 ? '#C62828' : h.avgRisk >= 0.25 ? '#E65100' : '#2E7D32'
                                                },
                                                children: h.avgRisk.toFixed(3)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 408,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 11,
                                                    color: '#7A6E5D',
                                                    minWidth: 20,
                                                    textAlign: 'right',
                                                    fontWeight: 500
                                                },
                                                children: [
                                                    "×",
                                                    h.total
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 411,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 393,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 391,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    padding: '10px 14px',
                                    background: 'rgba(192,104,32,0.04)',
                                    border: '1px solid rgba(192,104,32,0.12)',
                                    borderRadius: 8,
                                    fontSize: 12,
                                    color: '#7A6E5D',
                                    fontWeight: 500,
                                    lineHeight: 1.5
                                },
                                children: "📦 HS codes are standardised commodity classifications. Codes like 7113 (jewelry) and 8471 (electronics) historically carry higher smuggling risk."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 417,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 389,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: CARD,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 16,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 424,
                                        columnNumber: 40
                                    }, this),
                                    " DECLARATION TIME — 24-HOUR RISK MAP ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 10,
                                            color: '#7A6E5D',
                                            fontWeight: 500,
                                            letterSpacing: 0.5
                                        },
                                        children: "(click any hour)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 424,
                                        columnNumber: 112
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 424,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(12, 1fr)',
                                    gap: 4,
                                    marginBottom: 4
                                },
                                children: timeHeatmap.slice(0, 12).map((h, i)=>{
                                    const intensity = h.total === 0 ? 0 : h.avgRisk;
                                    const bg = h.total === 0 ? '#F5F0E8' : intensity >= 0.5 ? `rgba(198,40,40,${0.15 + intensity * 0.5})` : intensity >= 0.25 ? `rgba(230,81,0,${0.1 + intensity * 0.4})` : `rgba(46,125,50,${0.08 + intensity * 0.3})`;
                                    const isSelected = selectedHour === h.hour;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>h.total > 0 ? setSelectedHour(isSelected ? null : h.hour) : null,
                                        style: {
                                            position: 'relative',
                                            borderRadius: 6,
                                            background: bg,
                                            border: isSelected ? '2px solid #C06820' : h.isOffHours ? '1px solid rgba(198,40,40,0.25)' : '1px solid #EDE7DB',
                                            padding: '8px 4px',
                                            textAlign: 'center',
                                            cursor: h.total > 0 ? 'pointer' : 'default',
                                            minHeight: 72,
                                            transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                                            transition: 'all 0.15s ease',
                                            boxShadow: isSelected ? '0 2px 8px rgba(192,104,32,0.25)' : 'none'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                    color: h.isOffHours ? '#C62828' : '#7A6E5D',
                                                    marginBottom: 4
                                                },
                                                children: h.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 449,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                    color: '#2C2418'
                                                },
                                                children: h.total
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 452,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 9,
                                                    color: '#7A6E5D',
                                                    marginTop: 2,
                                                    fontWeight: 600
                                                },
                                                children: h.total > 0 ? `r:${h.avgRisk.toFixed(2)}` : '—'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 455,
                                                columnNumber: 37
                                            }, this),
                                            h.isOffHours && h.total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: 2,
                                                    right: 2,
                                                    width: 5,
                                                    height: 5,
                                                    borderRadius: '50%',
                                                    background: '#C62828'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 459,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 438,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 426,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(12, 1fr)',
                                    gap: 4,
                                    marginBottom: 12
                                },
                                children: timeHeatmap.slice(12).map((h, i)=>{
                                    const intensity = h.total === 0 ? 0 : h.avgRisk;
                                    const bg = h.total === 0 ? '#F5F0E8' : intensity >= 0.5 ? `rgba(198,40,40,${0.15 + intensity * 0.5})` : intensity >= 0.25 ? `rgba(230,81,0,${0.1 + intensity * 0.4})` : `rgba(46,125,50,${0.08 + intensity * 0.3})`;
                                    const isSelected = selectedHour === h.hour;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>h.total > 0 ? setSelectedHour(isSelected ? null : h.hour) : null,
                                        style: {
                                            position: 'relative',
                                            borderRadius: 6,
                                            background: bg,
                                            border: isSelected ? '2px solid #C06820' : h.isOffHours ? '1px solid rgba(198,40,40,0.25)' : '1px solid #EDE7DB',
                                            padding: '8px 4px',
                                            textAlign: 'center',
                                            cursor: h.total > 0 ? 'pointer' : 'default',
                                            minHeight: 72,
                                            transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                                            transition: 'all 0.15s ease',
                                            boxShadow: isSelected ? '0 2px 8px rgba(192,104,32,0.25)' : 'none'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                    color: h.isOffHours ? '#C62828' : '#7A6E5D',
                                                    marginBottom: 4
                                                },
                                                children: h.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 489,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                    color: '#2C2418'
                                                },
                                                children: h.total
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 492,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 9,
                                                    color: '#7A6E5D',
                                                    marginTop: 2,
                                                    fontWeight: 600
                                                },
                                                children: h.total > 0 ? `r:${h.avgRisk.toFixed(2)}` : '—'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 495,
                                                columnNumber: 37
                                            }, this),
                                            h.isOffHours && h.total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: 2,
                                                    right: 2,
                                                    width: 5,
                                                    height: 5,
                                                    borderRadius: '50%',
                                                    background: '#C62828'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 499,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 478,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 466,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 16,
                                    fontSize: 11,
                                    color: '#7A6E5D',
                                    fontWeight: 500,
                                    marginBottom: selectedHour !== null ? 16 : 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: 2,
                                                    background: 'rgba(46,125,50,0.25)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 508,
                                                columnNumber: 89
                                            }, this),
                                            " Low Risk"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 508,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: 2,
                                                    background: 'rgba(230,81,0,0.3)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 509,
                                                columnNumber: 89
                                            }, this),
                                            " Medium Risk"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 509,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: 2,
                                                    background: 'rgba(198,40,40,0.5)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 510,
                                                columnNumber: 89
                                            }, this),
                                            " Critical Risk"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 510,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 5,
                                                    height: 5,
                                                    borderRadius: '50%',
                                                    background: '#C62828'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 511,
                                                columnNumber: 89
                                            }, this),
                                            " Off-Hours"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 511,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 507,
                                columnNumber: 21
                            }, this),
                            selectedHour !== null && selectedContainers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: 'fadeInUp 0.25s ease-out'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 13,
                                                    fontWeight: 700,
                                                    color: '#C06820'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__["Ship"], {
                                                        size: 14,
                                                        style: {
                                                            marginRight: 6,
                                                            verticalAlign: -2
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 519,
                                                        columnNumber: 37
                                                    }, this),
                                                    selectedContainers.length,
                                                    " CONTAINER",
                                                    selectedContainers.length > 1 ? 'S' : '',
                                                    " DECLARED AT ",
                                                    String(selectedHour).padStart(2, '0'),
                                                    ":00"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 518,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setSelectedHour(null),
                                                style: {
                                                    cursor: 'pointer',
                                                    padding: 4,
                                                    borderRadius: 4,
                                                    background: '#EDE7DB',
                                                    display: 'flex'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 14,
                                                    color: "#7A6E5D"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                    lineNumber: 523,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 522,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 517,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 8
                                        },
                                        children: selectedContainers.map((c, ci)=>{
                                            const decl = Number(c.Declared_Weight) || 1;
                                            const meas = Number(c.Measured_Weight) || 0;
                                            const wtDelta = ((meas - decl) / decl * 100).toFixed(1);
                                            const vpk = decl > 0 ? ((Number(c.Declared_Value) || 0) / decl).toFixed(2) : '0';
                                            const riskColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRiskColor"])(c.Risk_Level);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#FFFDF8',
                                                    border: `1px solid ${riskColor}22`,
                                                    borderLeft: `4px solid ${riskColor}`,
                                                    borderRadius: 8,
                                                    padding: '12px 16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            marginBottom: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 8
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: 'Quicksand',
                                                                            fontSize: 14,
                                                                            fontWeight: 700,
                                                                            color: '#2C2418'
                                                                        },
                                                                        children: c.Container_ID
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                                        lineNumber: 541,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: 'Quicksand',
                                                                            fontSize: 10,
                                                                            fontWeight: 700,
                                                                            padding: '2px 8px',
                                                                            borderRadius: 4,
                                                                            background: `${riskColor}15`,
                                                                            color: riskColor,
                                                                            letterSpacing: 1
                                                                        },
                                                                        children: [
                                                                            c.Risk_Level === 'Critical' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                                size: 10,
                                                                                style: {
                                                                                    marginRight: 3,
                                                                                    verticalAlign: -1
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                                                lineNumber: 548,
                                                                                columnNumber: 89
                                                                            }, this),
                                                                            c.Risk_Level.toUpperCase()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                                        lineNumber: 542,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                                lineNumber: 540,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'Quicksand',
                                                                    fontSize: 18,
                                                                    fontWeight: 700,
                                                                    color: riskColor
                                                                },
                                                                children: c.Risk_Score.toFixed(3)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                                lineNumber: 552,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 539,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: 'repeat(5, 1fr)',
                                                            gap: 8
                                                        },
                                                        children: [
                                                            {
                                                                label: 'ROUTE',
                                                                value: `${c.Origin_Country} → ${c.Destination_Country}`,
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    size: 11
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                                    lineNumber: 556,
                                                                    columnNumber: 134
                                                                }, this)
                                                            },
                                                            {
                                                                label: 'WT DELTA',
                                                                value: `${wtDelta}%`,
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Weight$3e$__["Weight"], {
                                                                    size: 11
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 102
                                                                }, this)
                                                            },
                                                            {
                                                                label: 'VALUE/KG',
                                                                value: `$${vpk}`,
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                    size: 11
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                                    lineNumber: 558,
                                                                    columnNumber: 98
                                                                }, this)
                                                            },
                                                            {
                                                                label: 'DWELL',
                                                                value: `${c.Dwell_Time_Hours}h`,
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    size: 11
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                                    lineNumber: 559,
                                                                    columnNumber: 110
                                                                }, this)
                                                            },
                                                            {
                                                                label: 'HS CODE',
                                                                value: c.HS_Code,
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                    size: 11
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                                                    lineNumber: 560,
                                                                    columnNumber: 97
                                                                }, this)
                                                            }
                                                        ].map((f, fi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: 3,
                                                                            marginBottom: 2
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(f.icon, {
                                                                                color: '#7A6E5D'
                                                                            }),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontFamily: 'Quicksand',
                                                                                    fontSize: 9,
                                                                                    color: '#7A6E5D',
                                                                                    letterSpacing: 1,
                                                                                    fontWeight: 700
                                                                                },
                                                                                children: f.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                                                lineNumber: 565,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                                        lineNumber: 563,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: 'Quicksand',
                                                                            fontSize: 13,
                                                                            fontWeight: 600,
                                                                            color: '#2C2418'
                                                                        },
                                                                        children: f.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                                        lineNumber: 567,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, fi, true, {
                                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                                lineNumber: 562,
                                                                columnNumber: 53
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                                        lineNumber: 554,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, ci, true, {
                                                fileName: "[project]/src/app/components/Analytics.jsx",
                                                lineNumber: 534,
                                                columnNumber: 41
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Analytics.jsx",
                                        lineNumber: 526,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 516,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 423,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Analytics.jsx",
                lineNumber: 386,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: CARD,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: LABEL,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                size: 16,
                                color: "#C06820"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Analytics.jsx",
                                lineNumber: 582,
                                columnNumber: 36
                            }, this),
                            " RISK BREAKDOWN BY TRADE REGIME"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 582,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: 260,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                            data: regimeData,
                            barSize: 32,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: "#EDE7DB"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 585,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "regime",
                                    tick: {
                                        fontSize: 12,
                                        fill: '#2C2418',
                                        fontFamily: 'Quicksand',
                                        fontWeight: 600
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 586,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                    tick: {
                                        fontSize: 11,
                                        fill: '#7A6E5D',
                                        fontFamily: 'Quicksand'
                                    },
                                    allowDecimals: false
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 587,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    contentStyle: TT
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 588,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                    wrapperStyle: {
                                        fontFamily: 'Quicksand',
                                        fontSize: 12,
                                        fontWeight: 600
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 589,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: "critical",
                                    name: "Critical",
                                    stackId: "a",
                                    fill: "#C62828",
                                    radius: [
                                        0,
                                        0,
                                        0,
                                        0
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 590,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: "medium",
                                    name: "Medium Risk",
                                    stackId: "a",
                                    fill: "#E65100"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 591,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: "low",
                                    name: "Low Risk",
                                    stackId: "a",
                                    fill: "#2E7D32",
                                    radius: [
                                        4,
                                        4,
                                        0,
                                        0
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Analytics.jsx",
                                    lineNumber: 592,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Analytics.jsx",
                            lineNumber: 584,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Analytics.jsx",
                        lineNumber: 583,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Analytics.jsx",
                lineNumber: 581,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Analytics.jsx",
        lineNumber: 220,
        columnNumber: 9
    }, this);
}
_s(Analytics, "rLz8em1fQYYJepxNHHoaVrQbJP8=");
_c = Analytics;
var _c;
__turbopack_context__.k.register(_c, "Analytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Settings.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-client] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
var _s = __turbopack_context__.k.signature();
;
;
function Settings({ threshold, onThresholdChange }) {
    _s();
    const [modelType, setModelType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('EnsV4');
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSave = ()=>{
        setSaved(true);
        setTimeout(()=>setSaved(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            animation: 'fadeInUp 0.4s ease-out',
            maxWidth: 800,
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: 'Quicksand',
                    fontSize: 22,
                    color: '#2C2418',
                    marginBottom: 24,
                    fontWeight: 700,
                    letterSpacing: 1
                },
                children: "ENGINE CONFIGURATION"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Settings.jsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#FFFDF8',
                            border: '1px solid #D9CDBA',
                            borderRadius: 12,
                            padding: 32,
                            boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                                        size: 20,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'Quicksand',
                                            fontSize: 15,
                                            color: '#2C2418',
                                            letterSpacing: 1,
                                            fontWeight: 700
                                        },
                                        children: "RISK THRESHOLDS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 8,
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Quicksand',
                                            fontSize: 13,
                                            color: '#7A6E5D',
                                            fontWeight: 600
                                        },
                                        children: "Critical Risk Boundary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 27,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Quicksand',
                                            fontSize: 13,
                                            color: '#C62828',
                                            fontWeight: 700
                                        },
                                        children: [
                                            "≥ ",
                                            threshold.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 28,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0.1",
                                max: "0.9",
                                step: "0.01",
                                value: threshold,
                                onChange: (e)=>onThresholdChange(parseFloat(e.target.value)),
                                style: {
                                    width: '100%',
                                    accentColor: '#C06820',
                                    cursor: 'grab'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 12,
                                    color: '#A69882',
                                    marginTop: 12,
                                    fontWeight: 500
                                },
                                children: "Containers with a risk score at or above this threshold will be classified as Critical. Medium risk starts at half this value."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Settings.jsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#FFFDF8',
                            border: '1px solid #D9CDBA',
                            borderRadius: 12,
                            padding: 32,
                            boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                        size: 20,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'Quicksand',
                                            fontSize: 15,
                                            color: '#2C2418',
                                            letterSpacing: 1,
                                            fontWeight: 700
                                        },
                                        children: "ACTIVE MODEL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 41,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr 1fr',
                                    gap: 16
                                },
                                children: [
                                    {
                                        id: 'EnsV3',
                                        name: 'v3 (XGB Baseline)',
                                        perf: 'F1: 94.2%',
                                        desc: 'The original model. Uses a decision-tree approach (XGBoost) to flag risky containers based on past smuggling patterns. Reliable but may miss rare edge cases.'
                                    },
                                    {
                                        id: 'EnsV4',
                                        name: 'v4 (XGB+IF SMOTE)',
                                        perf: 'F1: 97.4%',
                                        desc: 'Our best model. Combines decision trees with anomaly detection (Isolation Forest) and balances the training data so it catches rare smuggling patterns other models miss.'
                                    },
                                    {
                                        id: 'DLV1',
                                        name: 'DL v1 (Exp)',
                                        perf: 'F1: 95.1%',
                                        desc: 'Experimental deep learning model. Uses neural networks to detect complex hidden patterns. Still in testing — may produce unexpected results on unusual shipments.'
                                    }
                                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setModelType(m.id),
                                        style: {
                                            border: `1px solid ${modelType === m.id ? '#C06820' : '#D9CDBA'}`,
                                            background: modelType === m.id ? 'rgba(192,104,32,0.04)' : '#F5F0E8',
                                            borderRadius: 8,
                                            padding: 16,
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            position: 'relative',
                                            overflow: 'visible'
                                        },
                                        onMouseEnter: (e)=>{
                                            const tooltip = e.currentTarget.querySelector('.model-tooltip');
                                            if (tooltip) tooltip.style.opacity = '1';
                                            if (tooltip) tooltip.style.transform = 'translateY(0)';
                                        },
                                        onMouseLeave: (e)=>{
                                            const tooltip = e.currentTarget.querySelector('.model-tooltip');
                                            if (tooltip) tooltip.style.opacity = '0';
                                            if (tooltip) tooltip.style.transform = 'translateY(4px)';
                                        },
                                        children: [
                                            modelType === m.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                    padding: '4px 8px',
                                                    background: '#C06820',
                                                    color: '#FFFFFF',
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 9,
                                                    fontWeight: 800
                                                },
                                                children: "ACTIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Settings.jsx",
                                                lineNumber: 70,
                                                columnNumber: 56
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 14,
                                                    color: '#2C2418',
                                                    marginBottom: 4,
                                                    fontWeight: 600
                                                },
                                                children: m.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Settings.jsx",
                                                lineNumber: 71,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 12,
                                                    color: '#7A6E5D',
                                                    fontWeight: 500
                                                },
                                                children: m.perf
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Settings.jsx",
                                                lineNumber: 72,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "model-tooltip",
                                                style: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    right: 0,
                                                    top: '100%',
                                                    marginTop: 8,
                                                    zIndex: 20,
                                                    background: '#FFFDF8',
                                                    border: '1px solid #D9CDBA',
                                                    borderRadius: 8,
                                                    padding: '12px 14px',
                                                    boxShadow: '0 4px 16px rgba(44,36,24,0.1)',
                                                    fontSize: 13,
                                                    lineHeight: 1.5,
                                                    color: '#2C2418',
                                                    fontWeight: 500,
                                                    opacity: 0,
                                                    transform: 'translateY(4px)',
                                                    transition: 'all 0.2s ease-out',
                                                    pointerEvents: 'none'
                                                },
                                                children: m.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Settings.jsx",
                                                lineNumber: 73,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, m.id, true, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 50,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Settings.jsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#FFFDF8',
                            border: '1px solid #D9CDBA',
                            borderRadius: 12,
                            padding: 32,
                            boxShadow: '0 1px 3px rgba(44,36,24,0.04)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                        size: 20,
                                        color: "#C06820"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'Quicksand',
                                            fontSize: 15,
                                            color: '#2C2418',
                                            letterSpacing: 1,
                                            fontWeight: 700
                                        },
                                        children: "NODE STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '12px 16px',
                                    background: '#F5F0E8',
                                    border: '1px solid #EDE7DB',
                                    borderRadius: 8,
                                    marginBottom: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#7A6E5D',
                                            fontSize: 14,
                                            fontWeight: 500
                                        },
                                        children: "Primary HQ Database (US-EAST)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 96,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#2E7D32',
                                            fontFamily: 'Quicksand',
                                            fontSize: 13,
                                            fontWeight: 600
                                        },
                                        children: "● CONNECTED (14ms)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 97,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '12px 16px',
                                    background: '#F5F0E8',
                                    border: '1px solid #EDE7DB',
                                    borderRadius: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#7A6E5D',
                                            fontSize: 14,
                                            fontWeight: 500
                                        },
                                        children: "Global Threat Intelligence Feed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#2E7D32',
                                            fontFamily: 'Quicksand',
                                            fontSize: 13,
                                            fontWeight: 600
                                        },
                                        children: "● SYNCED (2m ago)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 101,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Settings.jsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: 16,
                            marginTop: 16
                        },
                        children: [
                            saved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 12,
                                    color: '#2E7D32',
                                    letterSpacing: 1,
                                    animation: 'fadeInUp 0.3s',
                                    fontWeight: 700
                                },
                                children: "SETTINGS APPLIED."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 106,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                style: {
                                    background: '#C06820',
                                    border: 'none',
                                    borderRadius: 8,
                                    padding: '12px 32px',
                                    fontFamily: 'Quicksand',
                                    fontSize: 13,
                                    color: '#FFFFFF',
                                    fontWeight: 800,
                                    cursor: 'pointer',
                                    letterSpacing: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Settings.jsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this),
                                    " APPLY CONFIGURATION"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Settings.jsx",
                                lineNumber: 107,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Settings.jsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Settings.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Settings.jsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(Settings, "DXc8jgJ/Sw9zULQHcn8Yv7SEAqU=");
_c = Settings;
var _c;
__turbopack_context__.k.register(_c, "Settings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Admin.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Admin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ─── Reusable Modal Shell ─── */ function Modal({ title, onClose, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            background: 'rgba(44,36,24,0.4)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: '#FFFDF8',
                border: '1px solid #D9CDBA',
                borderRadius: 16,
                padding: '32px',
                width: '100%',
                maxWidth: 480,
                boxShadow: '0 12px 48px rgba(44,36,24,0.15)',
                animation: 'fadeInUp 0.3s ease-out'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 24
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontFamily: 'Quicksand',
                                fontSize: 18,
                                fontWeight: 800,
                                color: '#2C2418',
                                letterSpacing: 1,
                                margin: 0
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Admin.jsx",
                            lineNumber: 12,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                background: '#F5F0E8',
                                border: '1px solid #D9CDBA',
                                borderRadius: 6,
                                padding: 6,
                                cursor: 'pointer',
                                color: '#7A6E5D'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Admin.jsx",
                                lineNumber: 13,
                                columnNumber: 176
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Admin.jsx",
                            lineNumber: 13,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Admin.jsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Admin.jsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Admin.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = Modal;
/* ─── Input Field ─── */ function Field({ label, value, onChange, type = 'text', placeholder }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 16
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    fontFamily: 'Quicksand',
                    fontSize: 11,
                    color: '#C06820',
                    letterSpacing: 2,
                    marginBottom: 6,
                    fontWeight: 700
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                style: {
                    width: '100%',
                    background: '#F5F0E8',
                    border: '1px solid #D9CDBA',
                    borderRadius: 8,
                    padding: '12px 16px',
                    color: '#2C2418',
                    fontFamily: 'Quicksand',
                    fontSize: 14,
                    fontWeight: 500,
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                },
                onFocus: (e)=>e.target.style.borderColor = '#C06820',
                onBlur: (e)=>e.target.style.borderColor = '#D9CDBA'
            }, void 0, false, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Admin.jsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_c1 = Field;
/* ─── Role Select ─── */ function RoleSelect({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 16
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    fontFamily: 'Quicksand',
                    fontSize: 11,
                    color: '#C06820',
                    letterSpacing: 2,
                    marginBottom: 6,
                    fontWeight: 700
                },
                children: "ROLE"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                style: {
                    width: '100%',
                    background: '#F5F0E8',
                    border: '1px solid #D9CDBA',
                    borderRadius: 8,
                    padding: '12px 16px',
                    color: '#2C2418',
                    fontFamily: 'Quicksand',
                    fontSize: 14,
                    fontWeight: 500,
                    outline: 'none',
                    cursor: 'pointer',
                    boxSizing: 'border-box'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "officer",
                        children: "Officer"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "admin",
                        children: "Admin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "pending",
                        children: "Pending"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Admin.jsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_c2 = RoleSelect;
/* ─── Primary Action Button ─── */ function ActionBtn({ onClick, label, color = '#C06820', disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        style: {
            width: '100%',
            padding: '14px',
            borderRadius: 8,
            border: 'none',
            background: disabled ? '#D9CDBA' : color,
            color: '#FFF',
            fontFamily: 'Quicksand',
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: 1,
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'opacity 0.2s'
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/src/app/components/Admin.jsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_c3 = ActionBtn;
function Admin() {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('pending'); // pending | all
    // Modal states
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editUser, setEditUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteConfirm, setDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Create form
    const [newUsername, setNewUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newEmail, setNewEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newRole, setNewRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('officer');
    // Edit form
    const [editUsername, setEditUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editEmail, setEditEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editPassword, setEditPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editRole, setEditRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const fetchUsers = async ()=>{
        try {
            setLoading(true);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getUsers();
            setUsers(data);
            setError('');
        } catch (err) {
            setError('Failed to fetch users: ' + err.message);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Admin.useEffect": ()=>{
            fetchUsers();
        }
    }["Admin.useEffect"], []);
    const pendingUsers = users.filter((u)=>u.role === 'pending');
    const allUsers = users;
    // ── Handlers ──
    const handleVerify = async (userId, role)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].verifyUser(userId, role);
            fetchUsers();
        } catch (err) {
            alert('Failed: ' + err.message);
        }
    };
    const handleReject = async (userId)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].deleteUser(userId);
            fetchUsers();
        } catch (err) {
            alert('Failed: ' + err.message);
        }
    };
    const handleCreate = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].createUser(newUsername, newEmail, newPassword, newRole);
            setShowCreate(false);
            setNewUsername('');
            setNewEmail('');
            setNewPassword('');
            setNewRole('officer');
            fetchUsers();
        } catch (err) {
            alert('Failed: ' + err.message);
        }
    };
    const openEdit = (u)=>{
        setEditUser(u);
        setEditUsername(u.username);
        setEditEmail(u.email);
        setEditPassword('');
        setEditRole(u.role);
    };
    const handleUpdate = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].updateUser(editUser.id, {
                username: editUsername !== editUser.username ? editUsername : null,
                email: editEmail !== editUser.email ? editEmail : null,
                password: editPassword || null,
                role: editRole !== editUser.role ? editRole : null
            });
            setEditUser(null);
            fetchUsers();
        } catch (err) {
            alert('Failed: ' + err.message);
        }
    };
    const handleDelete = async (userId)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].deleteUser(userId);
            setDeleteConfirm(null);
            fetchUsers();
        } catch (err) {
            alert('Failed: ' + err.message);
        }
    };
    const tabStyle = (active)=>({
            padding: '10px 20px',
            borderRadius: 8,
            border: `1px solid ${active ? '#C06820' : '#D9CDBA'}`,
            background: active ? 'rgba(192,104,32,0.08)' : 'transparent',
            color: active ? '#C06820' : '#7A6E5D',
            fontFamily: 'Quicksand',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1,
            cursor: 'pointer',
            transition: 'all 0.2s'
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            animation: 'fadeIn 0.4s ease-out'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 24,
                                    fontWeight: 800,
                                    color: '#2C2418',
                                    letterSpacing: 1,
                                    margin: 0
                                },
                                children: "Admin Panel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Admin.jsx",
                                lineNumber: 157,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'Quicksand',
                                    fontSize: 13,
                                    color: '#7A6E5D',
                                    fontWeight: 600,
                                    marginTop: 4
                                },
                                children: "Manage personnel & clearance requests"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Admin.jsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowCreate(true),
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    padding: '10px 16px',
                                    borderRadius: 8,
                                    background: '#C06820',
                                    border: 'none',
                                    color: '#FFF',
                                    fontFamily: 'Quicksand',
                                    fontSize: 12,
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    letterSpacing: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Admin.jsx",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, this),
                                    " CREATE USER"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Admin.jsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: fetchUsers,
                                style: {
                                    padding: '10px 16px',
                                    borderRadius: 8,
                                    background: '#F5F0E8',
                                    border: '1px solid #D9CDBA',
                                    color: '#C06820',
                                    fontFamily: 'Quicksand',
                                    fontSize: 12,
                                    fontWeight: 700,
                                    cursor: 'pointer'
                                },
                                children: "REFRESH"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Admin.jsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 160,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 155,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab('pending'),
                        style: tabStyle(tab === 'pending'),
                        children: [
                            "PENDING REQUESTS ",
                            pendingUsers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: '#C62828',
                                    color: '#FFF',
                                    borderRadius: 10,
                                    padding: '2px 8px',
                                    fontSize: 10,
                                    marginLeft: 6
                                },
                                children: pendingUsers.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Admin.jsx",
                                lineNumber: 171,
                                columnNumber: 66
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 170,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab('all'),
                        style: tabStyle(tab === 'all'),
                        children: [
                            "ALL USERS (",
                            allUsers.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 169,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '16px',
                    background: 'rgba(198,40,40,0.06)',
                    borderRadius: 8,
                    border: '1px solid rgba(198,40,40,0.2)',
                    color: '#C62828',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: 'Quicksand',
                    fontSize: 13,
                    fontWeight: 600
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 178,
                        columnNumber: 21
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 177,
                columnNumber: 17
            }, this),
            tab === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#FFFDF8',
                    border: '1px solid #D9CDBA',
                    borderRadius: 12,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(44,36,24,0.04)'
                },
                children: [
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 32,
                            textAlign: 'center',
                            color: '#A69882',
                            fontFamily: 'Quicksand',
                            fontSize: 13,
                            fontWeight: 600
                        },
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 185,
                        columnNumber: 33
                    }, this),
                    !loading && pendingUsers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 48,
                            textAlign: 'center',
                            color: '#A69882',
                            fontFamily: 'Quicksand',
                            fontSize: 14,
                            fontWeight: 600
                        },
                        children: "No pending requests. All personnel are verified."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 187,
                        columnNumber: 25
                    }, this),
                    !loading && pendingUsers.map((u, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '20px 24px',
                                borderBottom: idx < pendingUsers.length - 1 ? '1px solid #EDE7DB' : 'none',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 40,
                                                height: 40,
                                                borderRadius: 10,
                                                background: 'rgba(198,40,40,0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                size: 18,
                                                color: "#C62828"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Admin.jsx",
                                                lineNumber: 193,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Admin.jsx",
                                            lineNumber: 192,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: 'Quicksand',
                                                        fontSize: 15,
                                                        fontWeight: 700,
                                                        color: '#2C2418'
                                                    },
                                                    children: u.username
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Admin.jsx",
                                                    lineNumber: 196,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: 'Quicksand',
                                                        fontSize: 12,
                                                        color: '#7A6E5D',
                                                        fontWeight: 500
                                                    },
                                                    children: u.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Admin.jsx",
                                                    lineNumber: 197,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Admin.jsx",
                                            lineNumber: 195,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Admin.jsx",
                                    lineNumber: 191,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleVerify(u.id, 'officer'),
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 6,
                                                padding: '8px 14px',
                                                borderRadius: 6,
                                                background: '#C06820',
                                                border: 'none',
                                                color: '#FFF',
                                                fontFamily: 'Quicksand',
                                                fontSize: 11,
                                                fontWeight: 700,
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Admin.jsx",
                                                    lineNumber: 202,
                                                    columnNumber: 37
                                                }, this),
                                                " APPROVE"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Admin.jsx",
                                            lineNumber: 201,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleVerify(u.id, 'admin'),
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 6,
                                                padding: '8px 14px',
                                                borderRadius: 6,
                                                background: 'transparent',
                                                border: '1px solid #C06820',
                                                color: '#C06820',
                                                fontFamily: 'Quicksand',
                                                fontSize: 11,
                                                fontWeight: 700,
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Admin.jsx",
                                                    lineNumber: 205,
                                                    columnNumber: 37
                                                }, this),
                                                " AS ADMIN"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Admin.jsx",
                                            lineNumber: 204,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleReject(u.id),
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 6,
                                                padding: '8px 14px',
                                                borderRadius: 6,
                                                background: 'transparent',
                                                border: '1px solid #C62828',
                                                color: '#C62828',
                                                fontFamily: 'Quicksand',
                                                fontSize: 11,
                                                fontWeight: 700,
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Admin.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 37
                                                }, this),
                                                " REJECT"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Admin.jsx",
                                            lineNumber: 207,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Admin.jsx",
                                    lineNumber: 200,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, u.id, true, {
                            fileName: "[project]/src/app/components/Admin.jsx",
                            lineNumber: 190,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 184,
                columnNumber: 17
            }, this),
            tab === 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#FFFDF8',
                    border: '1px solid #D9CDBA',
                    borderRadius: 12,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(44,36,24,0.04)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: '100%',
                        borderCollapse: 'collapse'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    background: '#F5F0E8',
                                    borderBottom: '1px solid #D9CDBA'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '16px 24px',
                                            textAlign: 'left',
                                            fontFamily: 'Quicksand',
                                            fontSize: 11,
                                            color: '#7A6E5D',
                                            letterSpacing: 1,
                                            fontWeight: 700
                                        },
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Admin.jsx",
                                        lineNumber: 222,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '16px 24px',
                                            textAlign: 'left',
                                            fontFamily: 'Quicksand',
                                            fontSize: 11,
                                            color: '#7A6E5D',
                                            letterSpacing: 1,
                                            fontWeight: 700
                                        },
                                        children: "USERNAME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Admin.jsx",
                                        lineNumber: 223,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '16px 24px',
                                            textAlign: 'left',
                                            fontFamily: 'Quicksand',
                                            fontSize: 11,
                                            color: '#7A6E5D',
                                            letterSpacing: 1,
                                            fontWeight: 700
                                        },
                                        children: "EMAIL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Admin.jsx",
                                        lineNumber: 224,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '16px 24px',
                                            textAlign: 'left',
                                            fontFamily: 'Quicksand',
                                            fontSize: 11,
                                            color: '#7A6E5D',
                                            letterSpacing: 1,
                                            fontWeight: 700
                                        },
                                        children: "ROLE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Admin.jsx",
                                        lineNumber: 225,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '16px 24px',
                                            textAlign: 'right',
                                            fontFamily: 'Quicksand',
                                            fontSize: 11,
                                            color: '#7A6E5D',
                                            letterSpacing: 1,
                                            fontWeight: 700
                                        },
                                        children: "ACTIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Admin.jsx",
                                        lineNumber: 226,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Admin.jsx",
                                lineNumber: 221,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Admin.jsx",
                            lineNumber: 220,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 5,
                                        style: {
                                            padding: 32,
                                            textAlign: 'center',
                                            color: '#A69882',
                                            fontFamily: 'Quicksand',
                                            fontSize: 13,
                                            fontWeight: 600
                                        },
                                        children: "Loading..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Admin.jsx",
                                        lineNumber: 230,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Admin.jsx",
                                    lineNumber: 230,
                                    columnNumber: 41
                                }, this),
                                !loading && allUsers.map((u, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: idx < allUsers.length - 1 ? '1px solid #EDE7DB' : 'none'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '14px 24px',
                                                    fontFamily: 'monospace',
                                                    fontSize: 13,
                                                    color: '#7A6E5D'
                                                },
                                                children: [
                                                    "#",
                                                    u.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Admin.jsx",
                                                lineNumber: 233,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '14px 24px',
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: '#2C2418'
                                                },
                                                children: u.username
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Admin.jsx",
                                                lineNumber: 234,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '14px 24px',
                                                    fontFamily: 'Quicksand',
                                                    fontSize: 13,
                                                    color: '#7A6E5D',
                                                    fontWeight: 500
                                                },
                                                children: u.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Admin.jsx",
                                                lineNumber: 235,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '14px 24px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 6,
                                                        padding: '4px 10px',
                                                        borderRadius: 4,
                                                        background: u.role === 'admin' ? 'rgba(46,125,50,0.1)' : u.role === 'officer' ? '#F5F0E8' : 'rgba(198,40,40,0.06)',
                                                        color: u.role === 'admin' ? '#2E7D32' : u.role === 'officer' ? '#7A6E5D' : '#C62828',
                                                        border: `1px solid ${u.role === 'admin' ? 'rgba(46,125,50,0.2)' : u.role === 'officer' ? '#D9CDBA' : 'rgba(198,40,40,0.2)'}`,
                                                        fontFamily: 'Quicksand',
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        letterSpacing: 1,
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: [
                                                        u.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Admin.jsx",
                                                            lineNumber: 244,
                                                            columnNumber: 68
                                                        }, this),
                                                        u.role === 'officer' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Admin.jsx",
                                                            lineNumber: 245,
                                                            columnNumber: 70
                                                        }, this),
                                                        u.role === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Admin.jsx",
                                                            lineNumber: 246,
                                                            columnNumber: 70
                                                        }, this),
                                                        u.role
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Admin.jsx",
                                                    lineNumber: 237,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Admin.jsx",
                                                lineNumber: 236,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '14px 24px',
                                                    textAlign: 'right'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'inline-flex',
                                                        gap: 6
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openEdit(u),
                                                            style: {
                                                                padding: '6px 10px',
                                                                borderRadius: 6,
                                                                background: '#F5F0E8',
                                                                border: '1px solid #D9CDBA',
                                                                color: '#C06820',
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 4,
                                                                fontFamily: 'Quicksand',
                                                                fontSize: 11,
                                                                fontWeight: 700
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Admin.jsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 49
                                                                }, this),
                                                                " EDIT"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Admin.jsx",
                                                            lineNumber: 252,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setDeleteConfirm(u),
                                                            style: {
                                                                padding: '6px 10px',
                                                                borderRadius: 6,
                                                                background: 'transparent',
                                                                border: '1px solid rgba(198,40,40,0.3)',
                                                                color: '#C62828',
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 4,
                                                                fontFamily: 'Quicksand',
                                                                fontSize: 11,
                                                                fontWeight: 700
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Admin.jsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 49
                                                                }, this),
                                                                " DELETE"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Admin.jsx",
                                                            lineNumber: 255,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Admin.jsx",
                                                    lineNumber: 251,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Admin.jsx",
                                                lineNumber: 250,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, u.id, true, {
                                        fileName: "[project]/src/app/components/Admin.jsx",
                                        lineNumber: 232,
                                        columnNumber: 33
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Admin.jsx",
                            lineNumber: 229,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Admin.jsx",
                    lineNumber: 219,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 218,
                columnNumber: 17
            }, this),
            showCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "CREATE NEW USER",
                onClose: ()=>setShowCreate(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "USERNAME",
                        value: newUsername,
                        onChange: setNewUsername,
                        placeholder: "e.g. officer_john"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 270,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "EMAIL",
                        value: newEmail,
                        onChange: setNewEmail,
                        type: "email",
                        placeholder: "john@customs.gov"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 271,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "PASSWORD",
                        value: newPassword,
                        onChange: setNewPassword,
                        type: "password",
                        placeholder: "••••••••"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 272,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleSelect, {
                        value: newRole,
                        onChange: setNewRole
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 273,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                        onClick: handleCreate,
                        label: "CREATE USER",
                        disabled: !newUsername || !newEmail || !newPassword
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 274,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 269,
                columnNumber: 17
            }, this),
            editUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: `EDIT USER — ${editUser.username}`,
                onClose: ()=>setEditUser(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "USERNAME",
                        value: editUsername,
                        onChange: setEditUsername
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 281,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "EMAIL",
                        value: editEmail,
                        onChange: setEditEmail,
                        type: "email"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 282,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "NEW PASSWORD (leave blank to keep)",
                        value: editPassword,
                        onChange: setEditPassword,
                        type: "password",
                        placeholder: "••••••••"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 283,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleSelect, {
                        value: editRole,
                        onChange: setEditRole
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 284,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                        onClick: handleUpdate,
                        label: "SAVE CHANGES"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 285,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 280,
                columnNumber: 17
            }, this),
            deleteConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "CONFIRM DELETION",
                onClose: ()=>setDeleteConfirm(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'Quicksand',
                            fontSize: 14,
                            color: '#2C2418',
                            marginBottom: 24,
                            fontWeight: 500,
                            lineHeight: 1.6
                        },
                        children: [
                            "Are you sure you want to permanently delete the user ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: deleteConfirm.username
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Admin.jsx",
                                lineNumber: 293,
                                columnNumber: 78
                            }, this),
                            "? This action cannot be undone."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 292,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setDeleteConfirm(null),
                                style: {
                                    flex: 1,
                                    padding: '14px',
                                    borderRadius: 8,
                                    border: '1px solid #D9CDBA',
                                    background: 'transparent',
                                    color: '#7A6E5D',
                                    fontFamily: 'Quicksand',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    cursor: 'pointer'
                                },
                                children: "CANCEL"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Admin.jsx",
                                lineNumber: 296,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleDelete(deleteConfirm.id),
                                style: {
                                    flex: 1,
                                    padding: '14px',
                                    borderRadius: 8,
                                    border: 'none',
                                    background: '#C62828',
                                    color: '#FFF',
                                    fontFamily: 'Quicksand',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    cursor: 'pointer'
                                },
                                children: "DELETE USER"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Admin.jsx",
                                lineNumber: 297,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Admin.jsx",
                        lineNumber: 295,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Admin.jsx",
                lineNumber: 291,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Admin.jsx",
        lineNumber: 153,
        columnNumber: 9
    }, this);
}
_s(Admin, "CpHujhSEKv0WKt2wYv9oELbzjXQ=");
_c4 = Admin;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Modal");
__turbopack_context__.k.register(_c1, "Field");
__turbopack_context__.k.register(_c2, "RoleSelect");
__turbopack_context__.k.register(_c3, "ActionBtn");
__turbopack_context__.k.register(_c4, "Admin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
// Data configs
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.js [app-client] (ecmascript)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Login$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Login.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Sidebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/auth.js [app-client] (ecmascript)");
// Pages
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Overview$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Overview.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UploadData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/UploadData.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Containers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Containers.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Analytics$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Analytics.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Settings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Settings.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Admin$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Admin.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
/* ─── Loading Overlay ─── */ function LoadingOverlay({ progress, message }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            background: 'rgba(245,240,232,0.95)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    width: 120,
                    height: 120,
                    marginBottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            border: '2px solid #D9CDBA',
                            borderRadius: '50%'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            border: '2px solid transparent',
                            borderTop: '2px solid #C06820',
                            borderRadius: '50%',
                            animation: 'radarSpin 1.5s linear infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 15,
                            border: '1px solid #D9CDBA',
                            borderRadius: '50%'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 15,
                            border: '2px solid transparent',
                            borderTop: '2px solid #C62828',
                            borderRadius: '50%',
                            animation: 'radarSpin 2s linear infinite reverse'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Quicksand',
                            fontSize: 18,
                            fontWeight: 700,
                            color: '#C06820'
                        },
                        children: [
                            progress,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: 'Quicksand',
                    fontSize: 14,
                    color: '#C06820',
                    letterSpacing: 3,
                    marginBottom: 8,
                    fontWeight: 700
                },
                children: "SCANNING MANIFEST"
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    color: '#7A6E5D',
                    fontWeight: 500
                },
                children: message
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 280,
                    height: 4,
                    background: '#EDE7DB',
                    borderRadius: 2,
                    marginTop: 20,
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: '100%',
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #A85818, #C06820)',
                        transition: 'width 0.3s',
                        borderRadius: 2
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = LoadingOverlay;
function App() {
    _s();
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [criticalThreshold, setCriticalThreshold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5);
    // Reclassify containers when threshold changes
    const handleThresholdChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleThresholdChange]": (newThreshold)=>{
            setCriticalThreshold(newThreshold);
            setData({
                "App.useCallback[handleThresholdChange]": (prev)=>prev.map({
                        "App.useCallback[handleThresholdChange]": (row)=>{
                            const score = row.Risk_Score;
                            let level;
                            if (score >= newThreshold) level = 'Critical';
                            else if (score >= newThreshold * 0.5) level = 'Medium Risk';
                            else level = 'Low Risk';
                            return {
                                ...row,
                                Risk_Level: level
                            };
                        }
                    }["App.useCallback[handleThresholdChange]"])
            }["App.useCallback[handleThresholdChange]"]);
        }
    }["App.useCallback[handleThresholdChange]"], []);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loadMsg, setLoadMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [clock, setClock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    // Clock tick for header
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const t = setInterval({
                "App.useEffect.t": ()=>setClock(new Date())
            }["App.useEffect.t"], 1000);
            return ({
                "App.useEffect": ()=>clearInterval(t)
            })["App.useEffect"];
        }
    }["App.useEffect"], []);
    // Normalize API snake_case keys to PascalCase expected by components
    const normalizeRow = (row)=>({
            Container_ID: row.container_id ?? row.Container_ID,
            Risk_Score: row.risk_score ?? row.Risk_Score ?? 0,
            Risk_Level: row.risk_level ?? row.Risk_Level ?? 'Low Risk',
            Anomaly_Flag: row.anomaly_flag ?? row.Anomaly_Flag ?? 0,
            Declared_Value: row.declared_value ?? row.Declared_Value ?? 0,
            Declared_Weight: row.declared_weight ?? row.Declared_Weight ?? 0,
            Measured_Weight: row.measured_weight ?? row.Measured_Weight ?? 0,
            Dwell_Time_Hours: row.dwell_time_hours ?? row.Dwell_Time_Hours ?? 0,
            Origin_Country: row.origin_country ?? row.Origin_Country ?? '',
            Destination_Country: row.destination_country ?? row.Destination_Country ?? '',
            HS_Code: row.hs_code ?? row.HS_Code ?? '',
            Trade_Regime: row.trade_regime ?? row.Trade_Regime ?? '',
            Shipping_Line: row.shipping_line ?? row.Shipping_Line ?? '',
            Declaration_Date: row.declaration_date ?? row.Declaration_Date ?? '',
            Declaration_Time: row.declaration_time ?? row.Declaration_Time ?? '',
            Explanation_Summary: row.explanation_summary ?? row.Explanation_Summary ?? ''
        });
    // Fetch data on login
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (isAuthenticated) {
                setLoading(true);
                setLoadMsg('Fetching Intelligence Data...');
                Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getStats().catch({
                        "App.useEffect": (e)=>null
                    }["App.useEffect"]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getResults(1, 100).catch({
                        "App.useEffect": (e)=>null
                    }["App.useEffect"])
                ]).then({
                    "App.useEffect": ([statsRes, resultsRes])=>{
                        if (statsRes) setStats(statsRes);
                        const apiData = resultsRes?.data || [];
                        if (apiData.length > 0) {
                            setData(apiData.map(normalizeRow));
                        } else {
                            // Fall back to sample data if API has no predictions
                            setData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_DATA"]);
                        }
                        setLoading(false);
                    }
                }["App.useEffect"]);
            }
        }
    }["App.useEffect"], [
        isAuthenticated
    ]);
    // Handle Token on Initialize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
            if (token) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getUsersMe().then({
                    "App.useEffect": (userData)=>{
                        setUser(userData);
                        setIsAuthenticated(true);
                    }
                }["App.useEffect"]).catch({
                    "App.useEffect": ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeToken"])();
                    }
                }["App.useEffect"]);
            }
        }
    }["App.useEffect"], []);
    const handleLogin = (loggedUser)=>{
        setUser(loggedUser);
        setIsAuthenticated(true);
        setCurrentView('overview');
    };
    const handleLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeToken"])();
        setIsAuthenticated(false);
        setUser(null);
    };
    // Shared generic CSV parser
    const processCSV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[processCSV]": (file)=>{
            setLoading(true);
            setProgress(0);
            setLoadMsg('Parsing CSV…');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: {
                    "App.useCallback[processCSV]": (result)=>{
                        const rows = result.data;
                        setLoadMsg(`Processing ${rows.length.toLocaleString()} containers…`);
                        let idx = 0;
                        const scored = [];
                        const batch = Math.max(1, Math.floor(rows.length / 50));
                        const process = {
                            "App.useCallback[processCSV].process": ()=>{
                                const end = Math.min(idx + batch, rows.length);
                                for(; idx < end; idx++)scored.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeMockRisk"])(rows[idx]));
                                setProgress(Math.floor(idx / rows.length * 100));
                                setLoadMsg(`Scoring container ${idx.toLocaleString()} of ${rows.length.toLocaleString()}…`);
                                if (idx < rows.length) requestAnimationFrame(process);
                                else {
                                    setTimeout({
                                        "App.useCallback[processCSV].process": ()=>{
                                            setData(scored);
                                            setLoading(false);
                                            setCurrentView('overview'); // redirect to overview on success
                                        }
                                    }["App.useCallback[processCSV].process"], 600);
                                }
                            }
                        }["App.useCallback[processCSV].process"];
                        setTimeout(process, 400);
                    }
                }["App.useCallback[processCSV]"]
            });
        }
    }["App.useCallback[processCSV]"], []);
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Login$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onLogin: handleLogin
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 170,
            columnNumber: 12
        }, this);
    }
    // Determine current page component
    let ViewComponent;
    switch(currentView){
        case 'overview':
            ViewComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Overview$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: data
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 176,
                columnNumber: 38
            }, this);
            break; // stats can be added here if needed
        case 'containers':
            ViewComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Containers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: data
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 177,
                columnNumber: 40
            }, this);
            break;
        case 'analytics':
            ViewComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Analytics$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: data
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 178,
                columnNumber: 39
            }, this);
            break;
        case 'upload':
            ViewComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UploadData$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onFileLoaded: processCSV
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 179,
                columnNumber: 36
            }, this);
            break;
        case 'settings':
            ViewComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Settings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                threshold: criticalThreshold,
                onThresholdChange: handleThresholdChange
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 180,
                columnNumber: 38
            }, this);
            break;
        case 'admin':
            ViewComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Admin$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 181,
                columnNumber: 35
            }, this);
            break;
        default:
            ViewComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Overview$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: data
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 182,
                columnNumber: 30
            }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            minHeight: '100vh',
            background: '#F5F0E8'
        },
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingOverlay, {
                progress: progress,
                message: loadMsg
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 187,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentView: currentView,
                setView: setCurrentView,
                onLogout: handleLogout,
                userId: user
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            padding: '16px 32px',
                            borderBottom: '1px solid #D9CDBA',
                            background: 'rgba(255,253,248,0.9)',
                            backdropFilter: 'blur(10px)',
                            position: 'sticky',
                            top: 0,
                            zIndex: 100,
                            height: 60
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 6
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                background: '#2E7D32',
                                                animation: 'glow-green 2s infinite'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'Quicksand',
                                                fontSize: 11,
                                                color: '#2E7D32',
                                                letterSpacing: 2,
                                                fontWeight: 700
                                            },
                                            children: "SYSTEM ACTIVE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'Quicksand',
                                        fontSize: 12,
                                        color: '#7A6E5D',
                                        fontWeight: 500
                                    },
                                    children: [
                                        clock.toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric'
                                        }),
                                        " ",
                                        clock.toLocaleTimeString('en-GB')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'Quicksand',
                                        fontSize: 10,
                                        color: '#FFFFFF',
                                        background: '#C06820',
                                        borderRadius: 4,
                                        padding: '3px 8px',
                                        letterSpacing: 1,
                                        fontWeight: 800
                                    },
                                    children: "CUSTOMS"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            flex: 1,
                            overflowY: 'auto',
                            padding: '32px 40px',
                            position: 'relative'
                        },
                        children: ViewComponent
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s(App, "NIgQKgv3LxwvSpMkPbfvutrPtA0=");
_c1 = App;
var _c, _c1;
__turbopack_context__.k.register(_c, "LoadingOverlay");
__turbopack_context__.k.register(_c1, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_1ddf3d95._.js.map