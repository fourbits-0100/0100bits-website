import { useContent } from '../context/ContentProvider';

export function Footer() {
    const { getSetting } = useContent();
    const footerData = getSetting('footer');
    const brandData = getSetting('brand');

    return (
        <footer className="py-12 px-6 border-t border-white/10 mt-32 relative z-10 bg-black/40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="max-w-md">
                    <h2 className="text-2xl font-light text-primary mb-4">{brandData?.name || 'IV BITS'}</h2>
                    <p className="text-secondary font-light text-sm leading-relaxed">
                        Engineering intelligent businesses through software, artificial intelligence, enterprise applications, digital products, and long-term partnerships.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm font-light text-secondary">
                    <span className="hover:text-primary cursor-pointer transition-colors">Engineering</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Artificial Intelligence</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Enterprise Applications</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Digital Products</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Research</span>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between text-xs text-secondary/60">
                <p>{footerData?.text || '© 2026 IV BITS.'}</p>
                <p className="font-medium text-white/50">Built Together. Engineered for Tomorrow.</p>
            </div>
        </footer>
    );
}
