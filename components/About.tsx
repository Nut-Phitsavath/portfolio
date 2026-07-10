'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">{t.about.eyebrow}</p>
                        <p className="font-serif italic text-3xl md:text-4xl leading-snug">
                            {t.about.lead}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-0"
                    >
                        {t.about.focusAreas.map((area, index) => (
                            <div
                                key={area.title}
                                className={`py-6 ${index !== 0 ? 'border-t border-border' : 'pt-0'}`}
                            >
                                <h3 className="text-lg font-medium mb-1">{area.title}</h3>
                                <p className="text-muted-foreground">{area.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
