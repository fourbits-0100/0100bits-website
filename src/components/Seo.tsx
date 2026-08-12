import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useContent } from '../context/ContentProvider';
import { getSeoForRoute, resolveUrl, buildJsonLd } from '../lib/seo';

export function Seo() {
    const { pathname } = useLocation();
    const { getSetting, settings } = useContent();
    const seoRow = getSetting('seo');

    useEffect(() => {
        const head = document.head;

        const upsertMeta = (attr: 'name' | 'property', key: string, content?: string) => {
            const selector = attr === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`;
            let el = head.querySelector(`meta[data-seo="${key}"]`) as HTMLMetaElement | null;
            if (!el) el = head.querySelector(selector) as HTMLMetaElement | null;

            if (!content) {
                el?.remove();
                return;
            }

            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, key);
                head.appendChild(el);
            }
            el.setAttribute('data-seo', key);
            el.setAttribute('content', content);
        };

        const upsertLink = (rel: string, key: string, href?: string) => {
            let el = head.querySelector(`link[data-seo="${key}"]`) as HTMLLinkElement | null;
            if (!el) el = head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

            if (!href) {
                el?.remove();
                return;
            }

            if (!el) {
                el = document.createElement('link');
                el.setAttribute('rel', rel);
                head.appendChild(el);
            }
            el.setAttribute('data-seo', key);
            el.setAttribute('href', href);
        };

        const { page, seo } = getSeoForRoute(pathname, seoRow);

        const canonical = resolveUrl(seo.canonical_url || (page === 'home' ? '/' : `/${page}`));
        const ogImage = resolveUrl(seo.og_image || '/og/default.jpg');
        const ogTitle = seo.og_title || seo.title;
        const ogDescription = seo.og_description || seo.description;
        const keywords = Array.isArray(seo.keywords) ? seo.keywords.filter(Boolean).join(', ') : '';

        document.title = seo.title || 'IV BITS';

        upsertMeta('name', 'description', seo.description || undefined);
        upsertMeta('name', 'keywords', keywords || undefined);
        upsertMeta('name', 'robots', seo.robots || undefined);
        upsertLink('canonical', 'canonical', canonical);

        upsertMeta('property', 'og:site_name', 'IV BITS');
        upsertMeta('property', 'og:title', ogTitle || undefined);
        upsertMeta('property', 'og:description', ogDescription || undefined);
        upsertMeta('property', 'og:image', ogImage);
        upsertMeta('property', 'og:url', canonical);
        upsertMeta('property', 'og:type', seo.og_type || 'website');

        upsertMeta('name', 'twitter:card', seo.twitter_card || 'summary_large_image');
        upsertMeta('name', 'twitter:title', ogTitle || undefined);
        upsertMeta('name', 'twitter:description', ogDescription || undefined);
        upsertMeta('name', 'twitter:image', ogImage);

        const ldSchemas = buildJsonLd(page, seo, settings);
        let ldEl = head.querySelector('script[data-seo="jsonld"]') as HTMLScriptElement | null;
        if (!ldEl) {
            ldEl = document.createElement('script');
            ldEl.setAttribute('type', 'application/ld+json');
            ldEl.setAttribute('data-seo', 'jsonld');
            head.appendChild(ldEl);
        }
        ldEl.textContent = JSON.stringify(ldSchemas);
    }, [pathname, seoRow, settings]);

    return null;
}
