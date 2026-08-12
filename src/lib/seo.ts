import { DEFAULTS } from './content';

export const SEO_LIMITS = {
    title: 60,
    description: 160,
} as const;

export const SEO_OPTIONS = {
    robots: ['index,follow', 'noindex,follow', 'index,nofollow', 'noindex,nofollow'],
    og_type: ['website', 'article'],
    twitter_card: ['summary', 'summary_large_image'],
} as const;

export interface SeoConfig {
    title: string;
    description: string;
    keywords: string[];
    canonical_url: string;
    robots: string;
    og_title: string;
    og_description: string;
    og_image: string;
    og_type: string;
    twitter_card: string;
}

export type PageKey = 'home' | 'about' | 'solutions' | 'contact';

export const ROUTE_PAGE_MAP: Record<string, PageKey> = {
    '/': 'home',
    '/about': 'about',
    '/solutions': 'solutions',
    '/contact': 'contact',
};

export const SITE_URL = ((import.meta.env as any).VITE_SITE_URL as string || '').replace(/\/+$/, '');

export function resolveUrl(value?: string): string {
    if (!value) return SITE_URL;
    if (/^https?:\/\//i.test(value)) return value;
    return `${SITE_URL}${value.startsWith('/') ? '' : '/'}${value}`;
}

export function getSeoForRoute(pathname: string, seoRow?: Record<string, Partial<SeoConfig>> | null): { page: PageKey; seo: SeoConfig } {
    const page = ROUTE_PAGE_MAP[pathname] || 'home';
    const defaults = (DEFAULTS.settings as any)?.seo?.[page] || {};
    return { page, seo: { ...defaults, ...(seoRow?.[page] || {}) } };
}

const PAGE_SCHEMAS: Record<string, string> = {
    about: 'AboutPage',
    solutions: 'CollectionPage',
    contact: 'ContactPage',
};

export function buildJsonLd(page: PageKey, seo: SeoConfig, settings: Record<string, any>): Record<string, any>[] {
    const brandName = settings?.brand?.name || 'IV BITS';
    const email = settings?.contact?.email || 'fourbits0100@gmail.com';
    const url = resolveUrl(seo.canonical_url || (page === 'home' ? '/' : `/${page}`));

    const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: brandName,
        url: SITE_URL,
        logo: resolveUrl(seo.og_image || '/og/default.jpg'),
        email,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Vadodara',
            addressRegion: 'Gujarat',
            addressCountry: 'IN',
        },
    };

    const schemas: Record<string, any>[] = [organization];

    if (page === 'home') {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: brandName,
            url: SITE_URL,
            publisher: { '@type': 'Organization', name: brandName, url: SITE_URL },
        });
    } else if (PAGE_SCHEMAS[page]) {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': PAGE_SCHEMAS[page],
            name: seo.title,
            description: seo.description,
            url,
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        });
    }

    return schemas;
}
