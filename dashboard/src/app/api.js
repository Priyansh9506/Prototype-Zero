import { getToken, removeToken } from './auth';

const API_BASE_URL = 'http://localhost:8000';

async function fetchWithAuth(url, options = {}) {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

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
