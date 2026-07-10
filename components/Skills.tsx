'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

const skillLists = [
    ['React', 'Flutter (Dart)', 'React Native', 'HTML & CSS', 'Next.js', 'TypeScript'],
    ['Python', 'FastAPI', 'SQL', 'Database design', 'Docker'],
    ['Excel', 'Tableau', 'Google Analytics'],
    ['Git & GitHub', 'Tailwind CSS', 'Figma'],
];

export default function Skills() {
    const { t } = useLanguage();
    const skillCategories = t.skills.categories.map((cat, i) => ({ ...cat, skills: skillLists[i] }));

    return (
        <section id="skills" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 max-w-2xl"
                >
                    <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">{t.skills.eyebrow}</p>
                    <h2 className="font-serif italic text-4xl md:text-5xl">
                        {t.skills.heading}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
                            className="card p-6"
                        >
                            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="tag px-3 py-1.5 text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
