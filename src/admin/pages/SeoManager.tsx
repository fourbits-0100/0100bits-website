import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { DEFAULTS } from '../../lib/content';
import { SEO_LIMITS, SEO_OPTIONS, resolveUrl, SeoConfig, PageKey } from '../../lib/seo';
import { TextInput, TextArea, ListEditor, SelectInput, SaveBar } from '../components/EditorPrimitives';

const PAGES: { key: PageKey; label: string; path: string }[] = [
    { key: 'home', label: 'Home', path: '/' },
    { key: 'about', label: 'About', path: '/about' },
    { key: 'solutions', label: 'Solutions', path: '/solutions' },
    { key: 'contact', label: 'Contact', path: '/contact' },
];

type SeoRow = Record<string, Partial<SeoConfig>>;

const getDefaults = (): SeoRow => {
    const defaults: SeoRow = {};
    PAGES.forEach(p => {
        defaults[p.key] = { ...(DEFAULTS.settings as any).seo[p.key] };
    });
    return defaults;
};

export function SeoManager() {
    const [data, setData] = useState<SeoRow>({});
    const [originalData, setOriginalData] = useState<SeoRow>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeKey, setActiveKey] = useState<PageKey>('home');

    const isDirty = JSON.stringify(data) !== JSON.stringify(originalData);
    const current = data[activeKey] || {};
    const activePage = PAGES.find(p => p.key === activeKey);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            setLoading(true);
            const defaults = getDefaults();
            const { data: dbData, error } = await supabase
                .from('site_settings')
                .select('*')
                .eq('key', 'seo')
                .maybeSingle();

            if (!error && dbData && isMounted) {
                PAGES.forEach(p => {
                    defaults[p.key] = { ...defaults[p.key], ...((dbData.value as SeoRow)?.[p.key] || {}) };
                });
            }

            if (isMounted) {
                setData(defaults);
                setOriginalData(JSON.parse(JSON.stringify(defaults)));
                setLoading(false);
            }
        };

        fetchData();
        return () => { isMounted = false };
    }, []);

    const handleUpdate = (field: keyof SeoConfig, val: any) => {
        setData(prev => ({
            ...prev,
            [activeKey]: { ...(prev[activeKey] || {}), [field]: val }
        }));
    };

    const handleReset = () => {
        setData(prev => ({
            ...prev,
            [activeKey]: { ...(DEFAULTS.settings as any).seo[activeKey] }
        }));
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const { error } = await supabase
                .from('site_settings')
                .upsert({ key: 'seo', value: data });

            if (error) {
                console.error('Failed to save SEO settings', error);
            } else {
                setOriginalData(JSON.parse(JSON.stringify(data)));
            }
        } catch (e) {
            console.error('Failed to save SEO settings', e);
        } finally {
            setSaving(false);
        }
    };

    const previewTitle = (current.og_title || current.title || '').trim();
    const previewUrl = resolveUrl((current.canonical_url || activePage?.path || '').trim());
    const previewDesc = (current.og_description || current.description || '').trim();
    const titleLen = (current.title || '').length;
    const descLen = (current.description || '').length;

    const counterClass = (len: number, max: number) =>
        len > max ? 'text-red-400' : len >= max - 10 ? 'text-amber-400' : 'text-white/40';

    if (loading) return <div className="text-white/50">Loading SEO settings...</div>;

    return (
        <div className="h-full">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-light text-white">SEO Manager</h1>
                <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-[#222] hover:bg-[#333] text-sm rounded transition-colors border border-white/10"
                >
                    Reset {activePage?.label} to defaults
                </button>
            </div>

            {/* Page Tabs */}
            <div className="flex border-b border-white/10 mb-8 gap-6">
                {PAGES.map(p => (
                    <button
                        key={p.key}
                        onClick={() => setActiveKey(p.key)}
                        className={`pb-3 text-sm tracking-wide border-b-2 transition-all ${activeKey === p.key ? 'border-accent text-accent' : 'border-transparent text-white/50 hover:text-white'}`}
                    >
                        {p.label}
                    </button>
                ))}
            </div>

            <div className="flex gap-8 items-start">
                {/* Editor */}
                <div className="flex-1 max-w-2xl">
                    <TextInput label="Meta Title" value={current.title} onChange={(v: string) => handleUpdate('title', v)} />
                    <div className="flex justify-end -mt-3 mb-4 text-xs">
                        <span className={counterClass(titleLen, SEO_LIMITS.title)}>{titleLen}/{SEO_LIMITS.title}</span>
                    </div>

                    <TextArea label="Meta Description" value={current.description} onChange={(v: string) => handleUpdate('description', v)} />
                    <div className="flex justify-end -mt-3 mb-4 text-xs">
                        <span className={counterClass(descLen, SEO_LIMITS.description)}>{descLen}/{SEO_LIMITS.description}</span>
                    </div>

                    <ListEditor label="Keywords" value={current.keywords} onChange={(v: string[]) => handleUpdate('keywords', v)} />

                    <TextInput label="Canonical URL" value={current.canonical_url} onChange={(v: string) => handleUpdate('canonical_url', v)} />
                    <SelectInput label="Robots" value={current.robots} options={SEO_OPTIONS.robots} onChange={(v: string) => handleUpdate('robots', v)} />

                    <div className="border-t border-white/10 my-8" />
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">Open Graph</h3>

                    <TextInput label="OG Title" value={current.og_title} onChange={(v: string) => handleUpdate('og_title', v)} />
                    <TextArea label="OG Description" value={current.og_description} onChange={(v: string) => handleUpdate('og_description', v)} />
                    <TextInput label="OG Image" value={current.og_image} onChange={(v: string) => handleUpdate('og_image', v)} />
                    <SelectInput label="OG Type" value={current.og_type} options={SEO_OPTIONS.og_type} onChange={(v: string) => handleUpdate('og_type', v)} />

                    <div className="border-t border-white/10 my-8" />
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">Twitter</h3>

                    <SelectInput label="Twitter Card" value={current.twitter_card} options={SEO_OPTIONS.twitter_card} onChange={(v: string) => handleUpdate('twitter_card', v)} />
                </div>

                {/* Google SERP Preview */}
                <div className="w-96 flex-shrink-0">
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">Google Preview</h3>
                    <div className="bg-white rounded-xl p-6 shadow-2xl">
                        <div className="text-[20px] leading-snug text-[#1a0dab] font-medium mb-1 truncate">
                            {previewTitle || 'Meta title preview'}
                        </div>
                        <div className="text-[14px] text-[#006621] mb-1 truncate">
                            {previewUrl || 'https://your-site.com'}
                        </div>
                        <div className="text-[14px] leading-snug text-[#545454] line-clamp-2">
                            {previewDesc || 'Meta description preview'}
                        </div>
                    </div>
                    <p className="text-xs text-white/30 mt-3 leading-relaxed">
                        Preview uses OG title/description when set, otherwise falls back to meta values. Canonical and og:url are resolved from the configured site URL.
                    </p>
                </div>
            </div>

            <SaveBar
                isDirty={isDirty}
                loading={saving}
                onSave={handleSave}
                onRevert={() => setData(JSON.parse(JSON.stringify(originalData)))}
            />
        </div>
    );
}
