'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const { t } = useLanguage();

    const links = [
        { href: '#about', label: t.nav.about },
        { href: '#projects', label: t.nav.projects },
        { href: '#skills', label: t.nav.skills },
        { href: '#contact', label: t.nav.contact },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border"
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#" className="font-serif text-2xl italic">
                    Nattaphonh
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="text-sm text-muted-foreground link-underline">
                            {link.label}
                        </a>
                    ))}
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2 text-sm">
                        {t.nav.resume}
                    </a>
                    <div className="flex items-center gap-1 pl-2 border-l border-border">
                        <LangToggle />
                        <ThemeToggle />
                    </div>
                </div>

                <button
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden p-2 -mr-2 text-foreground"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden overflow-hidden border-t border-border bg-background"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-muted-foreground"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                className="btn-primary px-5 py-2.5 text-sm w-fit"
                            >
                                {t.nav.resume}
                            </a>
                            <div className="flex items-center gap-3 pt-2 border-t border-border">
                                <LangToggle />
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
