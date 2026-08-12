import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { useAuth, AuthProvider } from './components/AuthProvider';
import { Login } from './pages/Login';
import { supabase } from '../lib/supabase';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { session, loading } = useAuth();
    if (loading) return <div className="flex items-center justify-center h-screen bg-[#0a0a0a] text-white">Loading...</div>;
    if (!session) return <Navigate to="/admin/login" replace />;

    return (
        <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-[#111] border-r border-white/10 flex flex-col">
                <div className="p-6 border-b border-white/5">
                    <h2 className="text-xl font-light text-primary">IV BITS Admin</h2>
                </div>
                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1 px-3">
                        <li>
                            <Link to="/admin" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/5 transition-colors">Dashboard</Link>
                        </li>
                        <li className="pt-4 pb-2 px-3 text-xs font-semibold text-white/30 uppercase tracking-widest">Pages</li>
                        <li><Link to="/admin/home" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/5 transition-colors">Home</Link></li>
                        <li><Link to="/admin/about" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/5 transition-colors">About</Link></li>
                        <li><Link to="/admin/services" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/5 transition-colors">Services</Link></li>
                        <li><Link to="/admin/contact" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/5 transition-colors">Contact</Link></li>
                        <li className="pt-4 pb-2 px-3 text-xs font-semibold text-white/30 uppercase tracking-widest">System</li>
                        <li><Link to="/admin/settings" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/5 transition-colors">Global Settings</Link></li>
                        <li><Link to="/admin/seo" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/5 transition-colors">SEO Manager</Link></li>
                        <li className="pt-4 pb-2 px-3 text-xs font-semibold text-white/30 uppercase tracking-widest">Inbox</li>
                        <li><Link to="/admin/enquiries" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between">Enquiries</Link></li>
                    </ul>
                </nav>
                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={() => supabase.auth.signOut()}
                        className="w-full text-left px-3 py-2 rounded text-red-400 hover:bg-red-400/10 transition-colors"
                    >
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-8 h-full">
                    {children}
                </div>
            </div>
        </div>
    );
}

import { PageEditor } from './pages/PageEditor';
import { Enquiries } from './pages/Enquiries';
import { SeoManager } from './pages/SeoManager';

// Temporary placeholder for page editors
const Dashboard = () => <div><h1 className="text-3xl font-light mb-4">Dashboard</h1><p className="text-white/50">Select a page from the sidebar to edit its content.</p></div>;

export default function AdminApp() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/enquiries" element={<ProtectedRoute><Enquiries /></ProtectedRoute>} />
                <Route path="/home" element={<ProtectedRoute><PageEditor name="Home" /></ProtectedRoute>} />
                <Route path="/about" element={<ProtectedRoute><PageEditor name="About" /></ProtectedRoute>} />
                <Route path="/services" element={<ProtectedRoute><PageEditor name="Solutions" /></ProtectedRoute>} />
                <Route path="/contact" element={<ProtectedRoute><PageEditor name="Contact" /></ProtectedRoute>} />
                <Route path="/settings" element={<ProtectedRoute><PageEditor name="Settings" /></ProtectedRoute>} />
                <Route path="/seo" element={<ProtectedRoute><SeoManager /></ProtectedRoute>} />
            </Routes>
        </AuthProvider>
    );
}
