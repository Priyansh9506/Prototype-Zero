import { getToken, removeToken } from './auth';

let baseUrl = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' ? `http://${window.location.hostname}:8000` : 'http://127.0.0.1:8000');
if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, -1);
}
export const API_BASE_URL = baseUrl;

async function fetchWithAuth(url, options = {}) {
    const token = getToken();
    const isFormData = options.body instanceof FormData;

    const headers = {
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        ...options.headers,
    };

    // Remove any explicitly undefined headers (safety net)
    Object.keys(headers).forEach(k => { if (headers[k] === undefined) delete headers[k]; });

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers,
    });

    if (response.status === 401) {
        // Token expired or invalid
        removeToken();
        window.location.reload();
        throw new Error('Session expired. Please log in again.');
    }

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    return response.json();
}

export const api = {
    login: async (username, password) => {
        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);

        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.detail || 'Login failed');
        }

        return response.json();
    },

    getUsersMe: () => fetchWithAuth('/users/me'),
    
    getStats: () => fetchWithAuth('/stats'),
    
    getResults: (page = 1, pageSize = 50, riskLevel = '', search = '') => {
        const params = new URLSearchParams({
            page,
            page_size: pageSize,
        });
        if (riskLevel) params.append('risk_level', riskLevel);
        if (search) params.append('search', search);

        return fetchWithAuth(`/results?${params.toString()}`);
    },

    predictBatch: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return fetchWithAuth('/predict/batch', {
            method: 'POST',
            body: formData,
        });
    },

    getTaskStatus: (taskId) => fetchWithAuth(`/tasks/${taskId}`),

    getUsers: () => fetchWithAuth('/users'),

    verifyUser: (userId, role) => fetchWithAuth(`/admin/verify_user/${userId}?role=${role}`, {
        method: 'PUT'
    }),

    createUser: (username, email, password, role) => fetchWithAuth(`/admin/users?role=${role}`, {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
    }),

    updateUser: (userId, { username, email, password, role }) => {
        const params = new URLSearchParams();
        if (username) params.append('username', username);
        if (email) params.append('email', email);
        if (password) params.append('password', password);
        if (role) params.append('role', role);
        return fetchWithAuth(`/admin/users/${userId}?${params.toString()}`, {
            method: 'PUT'
        });
    },

    deleteUser: (userId) => fetchWithAuth(`/admin/users/${userId}`, {
        method: 'DELETE'
    }),
};
