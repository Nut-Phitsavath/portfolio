'use client';

import { useLanguage } from '@/lib/i18n';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-10 px-6 border-t border-border">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Nattaphonh Phitsavath</p>
                <p>{t.footer.builtWith}</p>
            </div>
        </footer>
    );
}
