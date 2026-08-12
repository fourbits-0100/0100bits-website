import React from 'react';
import { FieldSchema } from '../../lib/content';

export const TextInput = ({ value, onChange, label, disabled }: any) => (
    <div className="mb-4">
        <label className="block text-xs font-semibold text-white/50 uppercase mb-1">{label}</label>
        <input
            type="text"
            value={value || ''}
            onChange={e => onChange(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-white/10 rounded px-3 py-2 text-sm outline-none focus:border-primary text-white"
            disabled={disabled}
        />
    </div>
);

export const TextArea = ({ value, onChange, label, disabled }: any) => (
    <div className="mb-4">
        <label className="block text-xs font-semibold text-white/50 uppercase mb-1">{label}</label>
        <textarea
            value={value || ''}
            onChange={e => onChange(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-white/10 rounded px-3 py-2 text-sm outline-none focus:border-primary min-h-[100px] text-white"
            disabled={disabled}
        />
    </div>
);

export const SelectInput = ({ value, onChange, label, options, disabled }: any) => (
    <div className="mb-4">
        <label className="block text-xs font-semibold text-white/50 uppercase mb-1">{label}</label>
        <select
            value={value || options?.[0] || ''}
            onChange={e => onChange(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-white/10 rounded px-3 py-2 text-sm outline-none focus:border-primary text-white"
            disabled={disabled}
        >
            {(options || []).map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

export const ListEditor = ({ value, onChange, label, disabled }: any) => {
    const items = Array.isArray(value) ? value : [];

    const handleUpdate = (idx: number, newVal: string) => {
        const newItems = [...items];
        newItems[idx] = newVal;
        onChange(newItems);
    };

    const handleMove = (idx: number, dir: 1 | -1) => {
        if (idx + dir < 0 || idx + dir >= items.length) return;
        const newItems = [...items];
        const temp = newItems[idx];
        newItems[idx] = newItems[idx + dir];
        newItems[idx + dir] = temp;
        onChange(newItems);
    };

    const handleAdd = () => onChange([...items, '']);
    const handleRemove = (idx: number) => onChange(items.filter((_, i) => i !== idx));

    return (
        <div className="mb-6 border border-white/10 rounded overflow-hidden">
            <div className="bg-[#111] px-4 py-2 border-b border-white/10 flex justify-between items-center">
                <span className="text-sm font-semibold capitalize">{label}</span>
                <button type="button" onClick={handleAdd} className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors">+ Add Item</button>
            </div>
            <div className="p-4 space-y-2 bg-[#1a1a1a]">
                {items.map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                        <div className="flex flex-col gap-1 mt-1">
                            <button type="button" onClick={() => handleMove(idx, -1)} disabled={idx === 0} className="text-white/30 hover:text-white disabled:opacity-30">▲</button>
                            <button type="button" onClick={() => handleMove(idx, 1)} disabled={idx === items.length - 1} className="text-white/30 hover:text-white disabled:opacity-30">▼</button>
                        </div>
                        <textarea
                            value={item}
                            onChange={(e) => handleUpdate(idx, e.target.value)}
                            className="flex-1 bg-[#222] border border-white/5 rounded px-3 py-2 text-sm outline-none focus:border-primary text-white"
                            rows={2}
                        />
                        <button type="button" onClick={() => handleRemove(idx)} className="text-red-400/50 hover:text-red-400 p-2">✕</button>
                    </div>
                ))}
                {items.length === 0 && <div className="text-xs text-secondary/50 text-center py-4">No items yet.</div>}
            </div>
        </div>
    );
};

export const ObjectListEditor = ({ value, onChange, label, objectSchema }: any) => {
    const items = Array.isArray(value) ? value : [];

    const handleUpdate = (idx: number, key: string, newVal: any) => {
        const newItems = [...items];
        newItems[idx] = { ...newItems[idx], [key]: newVal };
        onChange(newItems);
    };

    const handleAdd = () => onChange([...items, {}]);
    const handleRemove = (idx: number) => onChange(items.filter((_, i) => i !== idx));
    const handleMove = (idx: number, dir: 1 | -1) => {
        if (idx + dir < 0 || idx + dir >= items.length) return;
        const newItems = [...items];
        const temp = newItems[idx];
        newItems[idx] = newItems[idx + dir];
        newItems[idx + dir] = temp;
        onChange(newItems);
    };

    const schemaKeys = Object.keys(objectSchema || {});

    return (
        <div className="mb-6 border border-white/10 rounded overflow-hidden">
            <div className="bg-[#111] px-4 py-2 border-b border-white/10 flex justify-between items-center">
                <span className="text-sm font-semibold capitalize">{label}</span>
                <button type="button" onClick={handleAdd} className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors">+ Add Item</button>
            </div>
            <div className="p-4 space-y-4 bg-[#1a1a1a]">
                {items.map((item, idx) => (
                    <div key={idx} className="relative border border-white/5 bg-[#222] p-4 rounded pr-12">
                        <div className="absolute right-2 top-2 flex flex-col gap-2">
                            <button type="button" onClick={() => handleRemove(idx)} className="text-red-400/50 hover:text-red-400 pb-2 border-b border-white/10">✕</button>
                            <button type="button" onClick={() => handleMove(idx, -1)} disabled={idx === 0} className="text-white/30 hover:text-white disabled:opacity-30">▲</button>
                            <button type="button" onClick={() => handleMove(idx, 1)} disabled={idx === items.length - 1} className="text-white/30 hover:text-white disabled:opacity-30">▼</button>
                        </div>

                        {schemaKeys.map(key => {
                            const field = objectSchema[key];
                            if (field.type === 'text') {
                                return <TextInput key={key} label={field.label} value={item[key]} onChange={(val: any) => handleUpdate(idx, key, val)} />;
                            }
                            if (field.type === 'textarea') {
                                return <TextArea key={key} label={field.label} value={item[key]} onChange={(val: any) => handleUpdate(idx, key, val)} />;
                            }
                            if (field.type === 'list') {
                                return <ListEditor key={key} label={field.label} value={item[key]} onChange={(val: any) => handleUpdate(idx, key, val)} />;
                            }
                            return <div key={key} className="text-xs text-red-400">Unsupported field type: {field.type} in object list.</div>;
                        })}
                    </div>
                ))}
                {items.length === 0 && <div className="text-xs text-secondary/50 text-center py-4">No items yet.</div>}
            </div>
        </div>
    );
};

export const SaveBar = ({ isDirty, onSave, onRevert, loading }: any) => (
    <div className={`fixed bottom-0 left-64 right-0 p-4 border-t border-white/10 flex justify-between items-center transition-all bg-[#0a0a0a]/90 backdrop-blur ${isDirty ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="text-sm font-medium text-amber-500/80">Unsaved changes</div>
        <div className="flex gap-2">
            <button onClick={onRevert} className="px-4 py-2 bg-[#222] hover:bg-[#333] text-sm rounded transition-colors" disabled={loading}>Revert</button>
            <button onClick={onSave} className="px-4 py-2 bg-primary hover:bg-primary/80 text-black font-semibold text-sm rounded transition-colors" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
            </button>
        </div>
    </div>
);
