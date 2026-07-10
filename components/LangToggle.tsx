'use client';

import { useLanguage } from '@/lib/i18n';

export default function LangToggle() {
    const { lang, setLang } = useLanguage();

    return (
        <button
            onClick={() => setLang(lang === 'en' ? 'lo' : 'en')}
            className="px-2 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Switch language"
        >
            {lang === 'en' ? 'ລາວ' : 'EN'}
        </button>
    );
}
