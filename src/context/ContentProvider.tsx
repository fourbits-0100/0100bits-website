import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { getFallbackContent } from '../lib/content';

type ContentData = Record<string, any>;

interface ContentContextType {
    content: Record<string, Record<string, ContentData>>;
    settings: Record<string, ContentData>;
    loading: boolean;
    getContent: (page: string, key: string) => ContentData;
    getSetting: (key: string) => ContentData;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [content, setContent] = useState<Record<string, Record<string, ContentData>>>({});
    const [settings, setSettings] = useState<Record<string, ContentData>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                // Fetch sections
                const { data: sectionsData, error: sectionsError } = await supabase
                    .from('sections')
                    .select('*')
                    .eq('enabled', true);

                if (sectionsError) throw sectionsError;

                const groupedContent: Record<string, Record<string, ContentData>> = {};
                sectionsData?.forEach(section => {
                    if (!groupedContent[section.page]) {
                        groupedContent[section.page] = {};
                    }
                    groupedContent[section.page][section.section_key] = section.data;
                });

                setContent(groupedContent);

                // Fetch settings
                const { data: settingsData, error: settingsError } = await supabase
                    .from('site_settings')
                    .select('*');

                if (settingsError) throw settingsError;

                const mappedSettings: Record<string, ContentData> = {};
                settingsData?.forEach(setting => {
                    mappedSettings[setting.key] = setting.value;
                });

                setSettings(mappedSettings);
            } catch (err) {
                console.error('Error fetching CMS content:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, []);

    const getContent = (page: string, key: string) => {
        return content[page]?.[key] || getFallbackContent(page, key);
    };

    const getSetting = (key: string) => {
        return settings[key] || getFallbackContent('settings', key);
    };

    return (
        <ContentContext.Provider value={{ content, settings, loading, getContent, getSetting }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
