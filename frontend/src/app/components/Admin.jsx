"use client";
import React, { useState, useEffect } from 'react';
import { UserCheck, Shield, AlertTriangle, User, Plus, Pencil, Trash2, X } from 'lucide-react';
import { api } from '../api';

/* ─── Reusable Modal Shell ─── */
function Modal({ title, onClose, children }) {
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9000, background: 'rgba(44,36,24,0.4)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#FFFDF8', border: '1px solid #D9CDBA', borderRadius: 16, padding: '32px', width: '100%', maxWidth: 480, boxShadow: '0 12px 48px rgba(44,36,24,0.15)', animation: 'fadeInUp 0.3s ease-out' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <h3 style={{ fontFamily: 'Quicksand', fontSize: 18, fontWeight: 800, color: '#2C2418', letterSpacing: 1, margin: 0 }}>{title}</h3>
                    <button onClick={onClose} style={{ background: '#F5F0E8', border: '1px solid #D9CDBA', borderRadius: 6, padding: 6, cursor: 'pointer', color: '#7A6E5D' }}><X size={16} /></button>
                </div>
                {children}
            </div>
        </div>
    );
}

/* ─── Input Field ─── */
function Field({ label, value, onChange, type = 'text', placeholder }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontFamily: 'Quicksand', fontSize: 11, color: '#C06820', letterSpacing: 2, marginBottom: 6, fontWeight: 700 }}>{label}</label>
            <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
                style={{ width: '100%', background: '#F5F0E8', border: '1px solid #D9CDBA', borderRadius: 8, padding: '12px 16px', color: '#2C2418', fontFamily: 'Quicksand', fontSize: 14, fontWeight: 500, outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#C06820'} onBlur={e => e.target.style.borderColor = '#D9CDBA'}
            />
        </div>
    );
}

/* ─── Role Select ─── */
function RoleSelect({ value, onChange }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontFamily: 'Quicksand', fontSize: 11, color: '#C06820', letterSpacing: 2, marginBottom: 6, fontWeight: 700 }}>ROLE</label>
            <select value={value} onChange={e => onChange(e.target.value)}
                style={{ width: '100%', background: '#F5F0E8', border: '1px solid #D9CDBA', borderRadius: 8, padding: '12px 16px', color: '#2C2418', fontFamily: 'Quicksand', fontSize: 14, fontWeight: 500, outline: 'none', cursor: 'pointer', boxSizing: 'border-box' }}>
                <option value="officer">Officer</option>
                <option value="admin">Admin</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    );
}

/* ─── Primary Action Button ─── */
function ActionBtn({ onClick, label, color = '#C06820', disabled, isProcessing }) {
    return (
        <button onClick={onClick} disabled={disabled || isProcessing}
            style={{ 
                width: '100%', padding: '14px', borderRadius: 8, border: isProcessing ? '1px solid #2E7D32' : 'none', 
                background: isProcessing ? '#F1F8E9' : (disabled ? '#D9CDBA' : color), 
                color: isProcessing ? '#2E7D32' : '#FFF', 
                fontFamily: 'Quicksand', fontSize: 14, fontWeight: 800, letterSpacing: 1, 
                cursor: (disabled || isProcessing) ? 'not-allowed' : 'pointer', transition: 'all 0.2s', 
                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 
            }}>
            {isProcessing ? (
                <>
                    PROCESSING...
                    <div style={{ width: 14, height: 14, border: '2px solid rgba(46,125,50,0.3)', borderTopColor: '#2E7D32', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                </>
            ) : label}
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </button>
    );
}

export default function Admin() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [tab, setTab] = useState('pending'); // pending | all

    // Modal states
    const [showCreate, setShowCreate] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [deleteConfirm, setDeleteConfirm] = useState(null);

    // Create form
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newRole, setNewRole] = useState('officer');

    // Edit form
    const [editUsername, setEditUsername] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editPassword, setEditPassword] = useState('');
    const [editRole, setEditRole] = useState('');

    const fetchUsers = async (background = false) => {
        try {
            if (!background) setLoading(true);
            const data = await api.getUsers();
            setUsers(data);
            setError('');
        } catch (err) {
            setError('Failed to fetch users: ' + err.message);
        } finally {
            if (!background) setLoading(false);
        }
    };

    useEffect(() => { fetchUsers(); }, []);

    const pendingUsers = users.filter(u => u.role === 'pending');
    const allUsers = users;

    // ── Handlers ──
    const showSuccess = (msg) => {
        setSuccessMsg(msg);
        setTimeout(() => setSuccessMsg(''), 3000);
    };

    const handleVerify = async (userId, role) => {
        try { 
            setActionLoading(true); 
            await api.verifyUser(userId, role); 
            showSuccess('User successfully verified!');
            fetchUsers(true); 
        }
        catch (err) { setError('Failed to verify: ' + err.message); }
        finally { setActionLoading(false); }
    };

    const handleReject = async (userId) => {
        try { 
            setActionLoading(true); 
            await api.deleteUser(userId); 
            showSuccess('User request rejected.');
            fetchUsers(true); 
        }
        catch (err) { setError('Failed to reject: ' + err.message); }
        finally { setActionLoading(false); }
    };

    const handleCreate = async () => {
        try {
            setActionLoading(true);
            await api.createUser(newUsername, newEmail, newPassword, newRole);
            setShowCreate(false);
            setNewUsername(''); setNewEmail(''); setNewPassword(''); setNewRole('officer');
            showSuccess('User created successfully!');
            fetchUsers(true);
        } catch (err) { setError('Failed to create user: ' + err.message); }
        finally { setActionLoading(false); }
    };

    const openEdit = (u) => {
        setEditUser(u);
        setEditUsername(u.username);
        setEditEmail(u.email);
        setEditPassword('');
        setEditRole(u.role);
    };

    const handleUpdate = async () => {
        try {
            setActionLoading(true);
            await api.updateUser(editUser.id, {
                username: editUsername !== editUser.username ? editUsername : null,
                email: editEmail !== editUser.email ? editEmail : null,
                password: editPassword || null,
                role: editRole !== editUser.role ? editRole : null,
            });
            setEditUser(null);
            showSuccess('User updated successfully!');
            fetchUsers(true);
        } catch (err) { setError('Failed to update user: ' + err.message); }
        finally { setActionLoading(false); }
    };

    const handleDelete = async (userId) => {
        try { 
            setActionLoading(true); 
            await api.deleteUser(userId); 
            setDeleteConfirm(null); 
            showSuccess('User deleted permanently.');
            fetchUsers(true); 
        }
        catch (err) { setError('Failed to delete user: ' + err.message); }
        finally { setActionLoading(false); }
    };

    const tabStyle = (active) => ({
        padding: '10px 20px', borderRadius: 8, border: `1px solid ${active ? '#C06820' : '#D9CDBA'}`,
        background: active ? 'rgba(192,104,32,0.08)' : 'transparent', color: active ? '#C06820' : '#7A6E5D',
        fontFamily: 'Quicksand', fontSize: 12, fontWeight: 700, letterSpacing: 1, cursor: 'pointer', transition: 'all 0.2s'
    });

    return (
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24, animation: 'fadeIn 0.4s ease-out' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontFamily: 'Quicksand', fontSize: 24, fontWeight: 800, color: '#2C2418', letterSpacing: 1, margin: 0 }}>Admin Panel</h1>
                    <div style={{ fontFamily: 'Quicksand', fontSize: 13, color: '#7A6E5D', fontWeight: 600, marginTop: 4 }}>Manage personnel & clearance requests</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={() => setShowCreate(true)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', borderRadius: 8, background: '#C06820', border: 'none', color: '#FFF', fontFamily: 'Quicksand', fontSize: 12, fontWeight: 700, cursor: 'pointer', letterSpacing: 1, opacity: actionLoading ? 0.6 : 1 }} disabled={actionLoading}>
                        <Plus size={14} /> CREATE USER
                    </button>
                    <button onClick={() => fetchUsers(false)} style={{ padding: '10px 16px', borderRadius: 8, background: '#F5F0E8', border: '1px solid #D9CDBA', color: '#C06820', fontFamily: 'Quicksand', fontSize: 12, fontWeight: 700, cursor: 'pointer', opacity: actionLoading ? 0.6 : 1 }} disabled={actionLoading}>REFRESH</button>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => setTab('pending')} style={tabStyle(tab === 'pending')}>
                    PENDING REQUESTS {pendingUsers.length > 0 && <span style={{ background: '#C62828', color: '#FFF', borderRadius: 10, padding: '2px 8px', fontSize: 10, marginLeft: 6 }}>{pendingUsers.length}</span>}
                </button>
                <button onClick={() => setTab('all')} style={tabStyle(tab === 'all')}>ALL USERS ({allUsers.length})</button>
            </div>

            {/* Notifications */}
            {successMsg && (
                <div style={{ padding: '16px', background: 'rgba(46,125,50,0.06)', borderRadius: 8, border: '1px solid rgba(46,125,50,0.2)', color: '#2E7D32', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Quicksand', fontSize: 13, fontWeight: 600, animation: 'fadeIn 0.3s' }}>
                    <UserCheck size={16} />{successMsg}
                </div>
            )}
            {error && (
                <div style={{ padding: '16px', background: 'rgba(198,40,40,0.06)', borderRadius: 8, border: '1px solid rgba(198,40,40,0.2)', color: '#C62828', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'Quicksand', fontSize: 13, fontWeight: 600, animation: 'fadeIn 0.3s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <AlertTriangle size={16} />{error}
                    </div>
                    <button onClick={() => setError('')} style={{ background: 'transparent', border: 'none', color: '#C62828', cursor: 'pointer' }}><X size={14} /></button>
                </div>
            )}

            {/* ── PENDING TAB ── */}
            {tab === 'pending' && (
                <div style={{ background: '#FFFDF8', border: '1px solid #D9CDBA', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(44,36,24,0.04)' }}>
                    {loading && <div style={{ padding: 32, textAlign: 'center', color: '#A69882', fontFamily: 'Quicksand', fontSize: 13, fontWeight: 600 }}>Loading...</div>}
                    {!loading && pendingUsers.length === 0 && (
                        <div style={{ padding: 48, textAlign: 'center', color: '#A69882', fontFamily: 'Quicksand', fontSize: 14, fontWeight: 600 }}>No pending requests. All personnel are verified.</div>
                    )}
                    {!loading && pendingUsers.map((u, idx) => (
                        <div key={u.id} style={{ padding: '20px 24px', borderBottom: idx < pendingUsers.length - 1 ? '1px solid #EDE7DB' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(198,40,40,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <AlertTriangle size={18} color="#C62828" />
                                </div>
                                <div>
                                    <div style={{ fontFamily: 'Quicksand', fontSize: 15, fontWeight: 700, color: '#2C2418' }}>{u.username}</div>
                                    <div style={{ fontFamily: 'Quicksand', fontSize: 12, color: '#7A6E5D', fontWeight: 500 }}>{u.email}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 8 }}>
                                <button onClick={() => handleVerify(u.id, 'officer')} disabled={actionLoading} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 6, background: actionLoading ? '#D9CDBA' : '#C06820', border: 'none', color: '#FFF', fontFamily: 'Quicksand', fontSize: 11, fontWeight: 700, cursor: actionLoading ? 'not-allowed' : 'pointer' }}>
                                    <UserCheck size={14} /> APPROVE
                                </button>
                                <button onClick={() => handleVerify(u.id, 'admin')} disabled={actionLoading} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 6, background: 'transparent', border: `1px solid ${actionLoading ? '#D9CDBA' : '#C06820'}`, color: actionLoading ? '#D9CDBA' : '#C06820', fontFamily: 'Quicksand', fontSize: 11, fontWeight: 700, cursor: actionLoading ? 'not-allowed' : 'pointer' }}>
                                    <Shield size={14} /> AS ADMIN
                                </button>
                                <button onClick={() => handleReject(u.id)} disabled={actionLoading} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 6, background: 'transparent', border: `1px solid ${actionLoading ? '#D9CDBA' : '#C62828'}`, color: actionLoading ? '#D9CDBA' : '#C62828', fontFamily: 'Quicksand', fontSize: 11, fontWeight: 700, cursor: actionLoading ? 'not-allowed' : 'pointer' }}>
                                    <Trash2 size={14} /> REJECT
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* ── ALL USERS TAB ── */}
            {tab === 'all' && (
                <div style={{ background: '#FFFDF8', border: '1px solid #D9CDBA', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(44,36,24,0.04)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: '#F5F0E8', borderBottom: '1px solid #D9CDBA' }}>
                                <th style={{ padding: '16px 24px', textAlign: 'left', fontFamily: 'Quicksand', fontSize: 11, color: '#7A6E5D', letterSpacing: 1, fontWeight: 700 }}>ID</th>
                                <th style={{ padding: '16px 24px', textAlign: 'left', fontFamily: 'Quicksand', fontSize: 11, color: '#7A6E5D', letterSpacing: 1, fontWeight: 700 }}>USERNAME</th>
                                <th style={{ padding: '16px 24px', textAlign: 'left', fontFamily: 'Quicksand', fontSize: 11, color: '#7A6E5D', letterSpacing: 1, fontWeight: 700 }}>EMAIL</th>
                                <th style={{ padding: '16px 24px', textAlign: 'left', fontFamily: 'Quicksand', fontSize: 11, color: '#7A6E5D', letterSpacing: 1, fontWeight: 700 }}>ROLE</th>
                                <th style={{ padding: '16px 24px', textAlign: 'right', fontFamily: 'Quicksand', fontSize: 11, color: '#7A6E5D', letterSpacing: 1, fontWeight: 700 }}>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && <tr><td colSpan={5} style={{ padding: 32, textAlign: 'center', color: '#A69882', fontFamily: 'Quicksand', fontSize: 13, fontWeight: 600 }}>Loading...</td></tr>}
                            {!loading && allUsers.map((u, idx) => (
                                <tr key={u.id} style={{ borderBottom: idx < allUsers.length - 1 ? '1px solid #EDE7DB' : 'none' }}>
                                    <td style={{ padding: '14px 24px', fontFamily: 'monospace', fontSize: 13, color: '#7A6E5D' }}>#{u.id}</td>
                                    <td style={{ padding: '14px 24px', fontFamily: 'Quicksand', fontSize: 14, fontWeight: 600, color: '#2C2418' }}>{u.username}</td>
                                    <td style={{ padding: '14px 24px', fontFamily: 'Quicksand', fontSize: 13, color: '#7A6E5D', fontWeight: 500 }}>{u.email}</td>
                                    <td style={{ padding: '14px 24px' }}>
                                        <span style={{
                                            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 4,
                                            background: u.role === 'admin' ? 'rgba(46,125,50,0.1)' : u.role === 'officer' ? '#F5F0E8' : 'rgba(198,40,40,0.06)',
                                            color: u.role === 'admin' ? '#2E7D32' : u.role === 'officer' ? '#7A6E5D' : '#C62828',
                                            border: `1px solid ${u.role === 'admin' ? 'rgba(46,125,50,0.2)' : u.role === 'officer' ? '#D9CDBA' : 'rgba(198,40,40,0.2)'}`,
                                            fontFamily: 'Quicksand', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase'
                                        }}>
                                            {u.role === 'admin' && <Shield size={12} />}
                                            {u.role === 'officer' && <User size={12} />}
                                            {u.role === 'pending' && <AlertTriangle size={12} />}
                                            {u.role}
                                        </span>
                                    </td>
                                    <td style={{ padding: '14px 24px', textAlign: 'right' }}>
                                        <div style={{ display: 'inline-flex', gap: 6 }}>
                                            <button onClick={() => openEdit(u)} disabled={actionLoading} style={{ padding: '6px 10px', borderRadius: 6, background: '#F5F0E8', border: '1px solid #D9CDBA', color: actionLoading ? '#D9CDBA' : '#C06820', cursor: actionLoading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Quicksand', fontSize: 11, fontWeight: 700 }}>
                                                <Pencil size={12} /> EDIT
                                            </button>
                                            <button onClick={() => setDeleteConfirm(u)} disabled={actionLoading} style={{ padding: '6px 10px', borderRadius: 6, background: 'transparent', border: '1px solid rgba(198,40,40,0.3)', color: actionLoading ? '#D9CDBA' : '#C62828', cursor: actionLoading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Quicksand', fontSize: 11, fontWeight: 700 }}>
                                                <Trash2 size={12} /> DELETE
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ── CREATE MODAL ── */}
            {showCreate && (
                <Modal title="CREATE NEW USER" onClose={() => setShowCreate(false)}>
                    <Field label="USERNAME" value={newUsername} onChange={setNewUsername} placeholder="e.g. officer_john" />
                    <Field label="EMAIL" value={newEmail} onChange={setNewEmail} type="email" placeholder="john@customs.gov" />
                    <Field label="PASSWORD" value={newPassword} onChange={setNewPassword} type="password" placeholder="••••••••" />
                    <RoleSelect value={newRole} onChange={setNewRole} />
                    <ActionBtn onClick={handleCreate} label="CREATE USER" disabled={!newUsername || !newEmail || !newPassword} isProcessing={actionLoading} />
                </Modal>
            )}

            {/* ── EDIT MODAL ── */}
            {editUser && (
                <Modal title={`EDIT USER — ${editUser.username}`} onClose={() => setEditUser(null)}>
                    <Field label="USERNAME" value={editUsername} onChange={setEditUsername} />
                    <Field label="EMAIL" value={editEmail} onChange={setEditEmail} type="email" />
                    <Field label="NEW PASSWORD (leave blank to keep)" value={editPassword} onChange={setEditPassword} type="password" placeholder="••••••••" />
                    <RoleSelect value={editRole} onChange={setEditRole} />
                    <ActionBtn onClick={handleUpdate} label="SAVE CHANGES" isProcessing={actionLoading} />
                </Modal>
            )}

            {/* ── DELETE CONFIRM MODAL ── */}
            {deleteConfirm && (
                <Modal title="CONFIRM DELETION" onClose={() => setDeleteConfirm(null)}>
                    <div style={{ fontFamily: 'Quicksand', fontSize: 14, color: '#2C2418', marginBottom: 24, fontWeight: 500, lineHeight: 1.6 }}>
                        Are you sure you want to permanently delete the user <strong>{deleteConfirm.username}</strong>? This action cannot be undone.
                    </div>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <button onClick={() => setDeleteConfirm(null)} disabled={actionLoading} style={{ flex: 1, padding: '14px', borderRadius: 8, border: '1px solid #D9CDBA', background: 'transparent', color: actionLoading ? '#D9CDBA' : '#7A6E5D', fontFamily: 'Quicksand', fontSize: 14, fontWeight: 700, cursor: actionLoading ? 'not-allowed' : 'pointer' }}>CANCEL</button>
                        <ActionBtn onClick={() => handleDelete(deleteConfirm.id)} label="DELETE USER" color="#C62828" isProcessing={actionLoading} />
                    </div>
                </Modal>
            )}
        </div>
    );
}
