import React, { useState } from 'react';
import { Hexagon, Lock, User, Terminal } from 'lucide-react';

export default function Login({ onLogin }) {
    const [userId, setUserId] = useState('');
    const [clearance, setClearance] = useState('');
    const [error, setError] = useState('');
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!userId || !clearance) {
            setError('AGENCY ID AND CLEARANCE CODE REQUIRED.');
            return;
        }

        setIsAuthenticating(true);

        // Mock authentication delay
        setTimeout(() => {
            if (clearance.length >= 4) {
                onLogin(userId);
            } else {
                setError('INVALID CLEARANCE CODE. ACCESS DENIED.');
                setIsAuthenticating(false);
            }
        }, 1500);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            background: 'radial-gradient(circle at 50% 50%, #0F1628 0%, #0A0E1A 100%)',
            position: 'relative'
        }}>
            {/* Decorative background elements */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 70%)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,59,48,0.02) 0%, transparent 70%)', borderRadius: '50%' }} />

            <div style={{
                background: 'rgba(20,28,46,0.85)',
                backdropFilter: 'blur(20px)',
                border: '1px solid #1E2D45',
                borderRadius: 16,
                padding: '48px 40px',
                width: '100%',
                maxWidth: 480,
                boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                zIndex: 10,
                animation: 'fadeInUp 0.6s ease-out both'
            }}>

                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 16, background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.2)', marginBottom: 24, animation: 'glow-green 3s infinite alternate' }}>
                        <Hexagon size={36} color="#00D4FF" strokeWidth={2} />
                    </div>
                    <h1 style={{ fontFamily: 'Orbitron', fontSize: 24, fontWeight: 800, color: '#E8EDF5', letterSpacing: 2, marginBottom: 8, textTransform: 'uppercase' }}>
                        SmartContainer
                    </h1>
                    <div style={{ fontFamily: 'Orbitron', fontSize: 12, color: '#8B9AB5', letterSpacing: 4 }}>
                        RISK ASSESSMENT ENGINE
                    </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div>
                        <label style={{ display: 'block', fontFamily: 'Orbitron', fontSize: 10, color: '#00D4FF', letterSpacing: 2, marginBottom: 8 }}>
                            AGENCY ID
                        </label>
                        <div style={{ position: 'relative' }}>
                            <User size={16} color="#8B9AB5" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                placeholder="e.g. OFFICER_748"
                                style={{
                                    width: '100%', background: '#0A0E1A', border: '1px solid #1E2D45', borderRadius: 8,
                                    padding: '14px 16px 14px 44px', color: '#E8EDF5', fontFamily: 'JetBrains Mono', fontSize: 14,
                                    outline: 'none', transition: 'border-color 0.2s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#00D4FF'}
                                onBlur={(e) => e.target.style.borderColor = '#1E2D45'}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontFamily: 'Orbitron', fontSize: 10, color: '#00D4FF', letterSpacing: 2, marginBottom: 8 }}>
                            SECURITY CLEARANCE CODE
                        </label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={16} color="#8B9AB5" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="password"
                                value={clearance}
                                onChange={(e) => setClearance(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    width: '100%', background: '#0A0E1A', border: '1px solid #1E2D45', borderRadius: 8,
                                    padding: '14px 16px 14px 44px', color: '#E8EDF5', fontFamily: 'JetBrains Mono', fontSize: 14,
                                    outline: 'none', transition: 'border-color 0.2s', letterSpacing: 4
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#00D4FF'}
                                onBlur={(e) => e.target.style.borderColor = '#1E2D45'}
                            />
                        </div>
                    </div>

                    {error && (
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px',
                            background: 'rgba(255,59,48,0.1)', border: '1px solid rgba(255,59,48,0.3)',
                            borderRadius: 8, color: '#FF3B30', fontFamily: 'JetBrains Mono', fontSize: 11,
                            animation: 'fadeInUp 0.3s ease-out'
                        }}>
                            <Terminal size={14} />
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isAuthenticating}
                        style={{
                            marginTop: 12, width: '100%', background: isAuthenticating ? '#1E2D45' : 'linear-gradient(135deg, #0094B3, #00D4FF)',
                            border: 'none', borderRadius: 8, padding: '16px',
                            fontFamily: 'Orbitron', fontSize: 14, color: isAuthenticating ? '#8B9AB5' : '#0A0E1A',
                            fontWeight: 800, cursor: isAuthenticating ? 'not-allowed' : 'pointer', letterSpacing: 2,
                            transition: 'all 0.3s', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8
                        }}
                    >
                        {isAuthenticating ? (
                            <>
                                <div style={{ width: 14, height: 14, border: '2px solid #8B9AB5', borderTopColor: 'transparent', borderRadius: '50%', animation: 'radarSpin 1s linear infinite' }} />
                                AUTHENTICATING...
                            </>
                        ) : (
                            'INITIALISE SESSION'
                        )}
                    </button>
                </form>

                <div style={{ marginTop: 32, textAlign: 'center', fontFamily: 'JetBrains Mono', fontSize: 10, color: '#5C6A82' }}>
                    RESTRICTED GOVERNMENT SYSTEM. UNAUTHORISED ACCESS IS STRICTLY PROHIBITED.
                </div>
            </div>
        </div>
    );
}
