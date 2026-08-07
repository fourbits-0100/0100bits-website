import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { PAGE_SCHEMAS, getFallbackContent } from '../../lib/content';
import { TextInput, TextArea, ListEditor, ObjectListEditor, SaveBar } from '../components/EditorPrimitives';

export function PageEditor({ name }: { name: string }) {
    const pageKey = name.toLowerCase().replace(' ', '');
    const schemas = PAGE_SCHEMAS[pageKey] || [];

    const [data, setData] = useState<Record<string, any>>({});
    const [originalData, setOriginalData] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeSection, setActiveSection] = useState(schemas[0]?.key || '');

    const isDirty = JSON.stringify(data) !== JSON.stringify(originalData);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            setLoading(true);
            const { data: dbData, error } = await supabase
                .from('sections')
                .select('*')
                .eq('page', pageKey);

            if (!error && dbData && isMounted) {
                const loaded: Record<string, any> = {};
                // Pre-fill with defaults first
                schemas.forEach(s => {
                    const fallback = getFallbackContent(pageKey, s.key);
                    if (fallback) loaded[s.key] = fallback;
                });
                // Overwrite with DB data if present
                dbData.forEach(row => {
                    // Check if DB actually has populated JSON
                    if (row.data && Object.keys(row.data).length > 0) {
                        loaded[row.section_key] = row.data;
                    }
                });

                setData(loaded);
                setOriginalData(JSON.parse(JSON.stringify(loaded)));
            }
            if (isMounted) setLoading(false);
        };

        fetchData();
        return () => { isMounted = false };
    }, [pageKey]);

    const handleUpdate = (sectionKey: string, fieldName: string, val: any) => {
        setData(prev => ({
            ...prev,
            [sectionKey]: {
                ...(prev[sectionKey] || {}),
                [fieldName]: val
            }
        }));
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            // Upsert all dirty sections
            const promises = schemas.map(schema => {
                const sectionData = data[schema.key] || {};
                const origSectionData = originalData[schema.key] || {};

                if (JSON.stringify(sectionData) !== JSON.stringify(origSectionData)) {
                    return supabase.from('sections').upsert({
                        page: pageKey,
                        section_key: schema.key,
                        label: schema.label,
                        enabled: true,
                        data: sectionData
                    }, { onConflict: 'page, section_key' });
                }
                return Promise.resolve();
            });

            await Promise.all(promises);
            setOriginalData(JSON.parse(JSON.stringify(data)));
        } catch (e) {
            console.error("Failed to save", e);
        } finally {
            setSaving(false);
        }
    };

    const currentSchema = schemas.find(s => s.key === activeSection);
    const currentSectionData = data[activeSection] || {};

    if (loading) return <div className="text-white/50">Loading {name} content...</div>;
    if (!schemas.length) return <div className="text-white/50">No schema defined for {name}.</div>;

    return (
        <div className="flex gap-8 h-full">
            {/* Section Nav */}
            <div className="w-48 flex-shrink-0">
                <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">Sections</h3>
                <ul className="space-y-1">
                    {schemas.map(s => (
                        <li key={s.key}>
                            <button
                                onClick={() => setActiveSection(s.key)}
                                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${activeSection === s.key ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {s.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Editor Area */}
            <div className="flex-1 pb-32">
                <h2 className="text-2xl font-light mb-6 text-white">{currentSchema?.label}</h2>
                <div className="space-y-2">
                    {currentSchema?.fields.map(field => {
                        if (field.type === 'text') {
                            return (
                                <TextInput
                                    key={field.name}
                                    label={field.label}
                                    value={currentSectionData[field.name]}
                                    onChange={(val: string) => handleUpdate(activeSection, field.name, val)}
                                />
                            );
                        }
                        if (field.type === 'textarea') {
                            return (
                                <TextArea
                                    key={field.name}
                                    label={field.label}
                                    value={currentSectionData[field.name]}
                                    onChange={(val: string) => handleUpdate(activeSection, field.name, val)}
                                />
                            );
                        }
                        if (field.type === 'list') {
                            return (
                                <ListEditor
                                    key={field.name}
                                    label={field.label}
                                    value={currentSectionData[field.name]}
                                    onChange={(val: string[]) => handleUpdate(activeSection, field.name, val)}
                                />
                            );
                        }
                        if (field.type === 'object_list') {
                            return (
                                <ObjectListEditor
                                    key={field.name}
                                    label={field.label}
                                    value={currentSectionData[field.name]}
                                    objectSchema={field.objectSchema}
                                    onChange={(val: any[]) => handleUpdate(activeSection, field.name, val)}
                                />
                            );
                        }
                        return <div key={field.name} className="text-red-400">Unsupported type: {field.type}</div>
                    })}
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
