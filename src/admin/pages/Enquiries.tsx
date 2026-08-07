import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Mail, Briefcase, Globe, Calendar, DollarSign, Trash2, CheckCircle, RefreshCcw } from 'lucide-react';

type Enquiry = {
    id: string;
    created_at: string;
    name: string;
    email: string;
    company: string;
    industry: string;
    website: string;
    project_type: string;
    timeline: string;
    budget: string;
    status: 'new' | 'contacted' | 'closed';
};

export function Enquiries() {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'closed'>('all');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const fetchEnquiries = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('enquiries')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setEnquiries(data as Enquiry[]);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchEnquiries();

        // Optional realtime subscription
        const channel = supabase.channel('schema-db-changes')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'enquiries' },
                (payload) => {
                    const newEnquiry = payload.new as Enquiry;
                    setEnquiries(prev => [newEnquiry, ...prev]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const updateStatus = async (id: string, status: 'new' | 'contacted' | 'closed') => {
        const { error } = await supabase.from('enquiries').update({ status }).eq('id', id);
        if (!error) {
            setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
        }
    };

    const deleteEnquiry = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

        const { error } = await supabase.from('enquiries').delete().eq('id', id);
        if (!error) {
            setEnquiries(prev => prev.filter(e => e.id !== id));
        }
    };

    const filtered = filter === 'all' ? enquiries : enquiries.filter(e => e.status === filter);

    // Counts for tabs
    const counts = {
        all: enquiries.length,
        new: enquiries.filter(e => e.status === 'new').length,
        contacted: enquiries.filter(e => e.status === 'contacted').length,
        closed: enquiries.filter(e => e.status === 'closed').length,
    };

    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-light text-white">Enquiries Inbox</h1>
                <button onClick={fetchEnquiries} className="p-2 text-white/50 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <RefreshCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex border-b border-white/10 mb-8 gap-6">
                {(['all', 'new', 'contacted', 'closed'] as const).map(tab => (
                    <button
                        key={tab}
                        onClick={() => setFilter(tab)}
                        className={`pb-3 text-sm tracking-wide capitalize flex items-center gap-2 border-b-2 transition-all ${filter === tab ? 'border-accent text-accent' : 'border-transparent text-white/50 hover:text-white'}`}
                    >
                        {tab}
                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-white/70">{counts[tab]}</span>
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pb-32">
                {loading && enquiries.length === 0 ? (
                    <div className="text-white/50 text-sm">Loading enquiries...</div>
                ) : filtered.length === 0 ? (
                    <div className="text-white/30 text-sm p-8 border border-white/5 rounded-2xl text-center bg-[#1a1a1a]">
                        No {filter === 'all' ? '' : filter} enquiries yet.
                    </div>
                ) : (
                    filtered.map(enq => (
                        <div key={enq.id} className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 transition-all">
                            <div className="flex justify-between items-start cursor-pointer" onClick={() => setExpandedId(expandedId === enq.id ? null : enq.id)}>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-medium text-white">{enq.name}</h3>
                                        <span className={`text-[9px] uppercase tracking-widest px-2 py-1 rounded-full ${enq.status === 'new' ? 'bg-accent/20 text-accent border border-accent/20' : enq.status === 'contacted' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/20' : 'bg-green-500/20 text-green-300 border border-green-500/20'}`}>
                                            {enq.status}
                                        </span>
                                    </div>
                                    <div className="text-sm font-light text-white/50 flex gap-4">
                                        <span>{enq.email}</span>
                                        {enq.company && <span>• {enq.company}</span>}
                                    </div>
                                </div>
                                <div className="text-xs text-white/30">
                                    {new Date(enq.created_at).toLocaleDateString()}
                                </div>
                            </div>

                            {expandedId === enq.id && (
                                <div className="mt-6 pt-6 border-t border-white/5 space-y-6 animate-in fade-in slide-in-from-top-2">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-secondary mb-1">Project Type</span>
                                            <span className="text-sm text-white font-light flex items-center gap-2"><Briefcase className="w-3 h-3 text-white/50" /> {enq.project_type || 'N/A'}</span>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-secondary mb-1">Timeline</span>
                                            <span className="text-sm text-white font-light flex items-center gap-2"><Calendar className="w-3 h-3 text-white/50" /> {enq.timeline || 'N/A'}</span>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-secondary mb-1">Budget</span>
                                            <span className="text-sm text-white font-light flex items-center gap-2"><DollarSign className="w-3 h-3 text-white/50" /> {enq.budget || 'N/A'}</span>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-secondary mb-1">Website</span>
                                            <span className="text-sm text-white font-light flex items-center gap-2"><Globe className="w-3 h-3 text-white/50" /> {enq.website || 'N/A'}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 justify-end pt-2 border-t border-white/5">
                                        <a href={`mailto:${enq.email}`} className="px-4 py-2 border border-white/10 hover:border-white/30 rounded text-xs transition-colors flex items-center gap-2">
                                            <Mail className="w-3 h-3" /> Email
                                        </a>
                                        {enq.status !== 'contacted' && (
                                            <button onClick={() => updateStatus(enq.id, 'contacted')} className="px-4 py-2 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 rounded text-xs transition-colors flex items-center gap-2">
                                                <CheckCircle className="w-3 h-3" /> Mark Contacted
                                            </button>
                                        )}
                                        {enq.status !== 'closed' && (
                                            <button onClick={() => updateStatus(enq.id, 'closed')} className="px-4 py-2 bg-green-600/20 text-green-400 hover:bg-green-600/30 rounded text-xs transition-colors flex items-center gap-2">
                                                <CheckCircle className="w-3 h-3" /> Mark Closed
                                            </button>
                                        )}
                                        <button onClick={() => deleteEnquiry(enq.id)} className="px-4 py-2 text-red-500 hover:text-red-400 border border-red-500/20 hover:border-red-500/40 rounded text-xs transition-colors p-2 flex items-center justify-center">
                                            <Trash2 className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
