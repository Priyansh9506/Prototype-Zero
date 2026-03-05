import React, { useRef, useState } from 'react';
import { Upload, FileText, CheckCircle, Database } from 'lucide-react';

export default function UploadData({ onFileLoaded }) {
    const fileRef = useRef(null);
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = (e) => {
        e.preventDefault(); e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
        else if (e.type === 'dragleave') setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault(); e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFileLoaded(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            onFileLoaded(e.target.files[0]);
        }
    };

    return (
        <div style={{ animation: 'fadeInUp 0.4s ease-out', maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Orbitron', fontSize: 20, color: '#E8EDF5', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>DATA INGESTION</h2>
            <p style={{ color: '#8B9AB5', fontSize: 14, marginBottom: 32 }}>Upload container shipment manifest data (CSV format) for real-time risk scoring and anomaly detection using the Hybrid Ensemble Model.</p>

            <div
                onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
                onClick={() => fileRef.current?.click()}
                style={{
                    border: `2px dashed ${dragActive ? '#00D4FF' : '#1E2D45'}`,
                    borderRadius: 16, padding: '64px 32px', textAlign: 'center', cursor: 'pointer',
                    background: dragActive ? 'rgba(0,212,255,0.05)' : 'rgba(20,28,46,0.6)',
                    backdropFilter: 'blur(10px)', transition: 'all 0.3s',
                    animation: 'dropzonePulse 4s infinite',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00D4FF'; e.currentTarget.style.background = 'rgba(0,212,255,0.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = dragActive ? '#00D4FF' : '#1E2D45'; e.currentTarget.style.background = dragActive ? 'rgba(0,212,255,0.05)' : 'rgba(20,28,46,0.6)'; }}
            >
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(0,212,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <Upload size={40} color="#00D4FF" />
                </div>
                <h3 style={{ fontFamily: 'Orbitron', fontSize: 18, color: '#E8EDF5', marginBottom: 12 }}>Drag & Drop CSV File</h3>
                <p style={{ color: '#8B9AB5', fontSize: 14, marginBottom: 24 }}>or click to browse your local file system</p>
                <input ref={fileRef} type="file" accept=".csv" hidden onChange={handleChange} />

                <button style={{
                    background: 'linear-gradient(135deg, #0094B3, #00D4FF)', border: 'none', borderRadius: 8,
                    padding: '12px 24px', fontFamily: 'Orbitron', fontSize: 12, color: '#0A0E1A', fontWeight: 800,
                    cursor: 'pointer', letterSpacing: 1, pointerEvents: 'none'
                }}>
                    SELECT DATASET
                </button>
            </div>

            <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
                <div style={{ background: '#0F1628', border: '1px solid #1E2D45', borderRadius: 12, padding: 20 }}>
                    <Database size={24} color="#00D4FF" style={{ marginBottom: 12 }} />
                    <h4 style={{ fontFamily: 'Orbitron', fontSize: 12, color: '#E8EDF5', marginBottom: 8, letterSpacing: 1 }}>REQUIRED COLUMNS</h4>
                    <p style={{ fontSize: 12, color: '#8B9AB5', lineHeight: 1.6 }}>Container_ID, Declared_Weight, Measured_Weight, Declared_Value, Dwell_Time_Hours, Origin_Country, ...</p>
                </div>
                <div style={{ background: '#0F1628', border: '1px solid #1E2D45', borderRadius: 12, padding: 20 }}>
                    <FileText size={24} color="#00D4FF" style={{ marginBottom: 12 }} />
                    <h4 style={{ fontFamily: 'Orbitron', fontSize: 12, color: '#E8EDF5', marginBottom: 8, letterSpacing: 1 }}>FORMAT</h4>
                    <p style={{ fontSize: 12, color: '#8B9AB5', lineHeight: 1.6 }}>Comma-separated values (.csv) with headers in top row. Maximum file size 50MB.</p>
                </div>
                <div style={{ background: '#0F1628', border: '1px solid #1E2D45', borderRadius: 12, padding: 20 }}>
                    <CheckCircle size={24} color="#00D4FF" style={{ marginBottom: 12 }} />
                    <h4 style={{ fontFamily: 'Orbitron', fontSize: 12, color: '#E8EDF5', marginBottom: 8, letterSpacing: 1 }}>LOCAL PROCESSING</h4>
                    <p style={{ fontSize: 12, color: '#8B9AB5', lineHeight: 1.6 }}>Data is parsed securely in-browser. No sensitive operational data leaves this machine.</p>
                </div>
            </div>
        </div>
    );
}
