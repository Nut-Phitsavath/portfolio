'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen flex items-center relative pt-28 pb-16">
            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-12 md:gap-16 items-end">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="font-mono text-sm uppercase tracking-widest text-accent mb-6"
                        >
                            {t.hero.eyebrow}
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-serif italic text-6xl md:text-8xl leading-[1.05] mb-6"
                        >
                            Nattaphonh Phitsavath
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-muted-foreground max-w-xl mb-10"
                        >
                            {t.hero.paragraph}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-4 mb-10"
                        >
                            <a href="#projects" className="btn-primary px-6 py-3 gap-2">
                                {t.hero.ctaWork}
                                <ArrowDown size={16} />
                            </a>
                            <a href="#contact" className="btn-secondary px-6 py-3">
                                {t.hero.ctaContact}
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center gap-3"
                        >
                            <a
                                href="https://github.com/Nut-Phitsavath"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 btn-secondary"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nattaphonh-phitsavath-68149b353/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 btn-secondary"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="mailto:n.phitsavath@gmail.com"
                                className="p-2.5 btn-secondary"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="card p-6"
                    >
                        <ul className="flex flex-col gap-5">
                            {t.hero.facts.map((fact) => (
                                <li key={fact.label} className="border-b border-border last:border-0 pb-5 last:pb-0">
                                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
                                        {fact.label}
                                    </p>
                                    <p className="text-base">{fact.value}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
