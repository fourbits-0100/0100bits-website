import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            navigate('/admin');
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-[#0a0a0a] text-white">
            <div className="w-full max-w-md p-8 bg-[#111] rounded-xl border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-light mb-6 text-center text-primary">Admin Access</h2>
                {error && <div className="mb-4 text-red-400 text-sm">{error}</div>}
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-xs text-white/50 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full bg-[#222] border border-white/5 rounded px-4 py-2 outline-none focus:border-red-900 transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-white/50 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full bg-[#222] border border-white/5 rounded px-4 py-2 outline-none focus:border-red-900 transition-colors"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 w-full bg-red-900 hover:bg-red-800 text-white rounded py-2 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}
