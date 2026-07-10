'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const projectMeta = [
    {
        techStack: ["Next.js", "TypeScript", "Prisma", "Turso DB", "Tailwind CSS"],
        githubUrl: "https://github.com/Nut-Phitsavath/ai-integrated-pos-system",
    },
    {
        techStack: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://nut-phitsavath.github.io/typing-practice/",
        githubUrl: "https://github.com/Nut-Phitsavath/typing-practice",
    },
];

export default function Projects() {
    const { t } = useLanguage();
    const projects = t.projects.items.map((item, i) => ({ ...item, ...projectMeta[i] }));

    return (
        <section id="projects" className="py-24 md:py-32 px-6 bg-muted/40">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 max-w-2xl"
                >
                    <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">{t.projects.eyebrow}</p>
                    <h2 className="font-serif italic text-4xl md:text-5xl mb-4">
                        {t.projects.heading}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t.projects.subheading}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card p-8 flex flex-col"
                        >
                            <h3 className="font-serif italic text-2xl mb-3">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                                    {t.projects.keyFeatures}
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {project.features.map((feature) => (
                                        <li key={feature} className="text-sm text-muted-foreground flex items-start">
                                            <span className="mr-2 text-accent">-</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="tag px-3 py-1 text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-auto pt-2">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary flex items-center gap-2 px-5 py-2.5 text-sm"
                                    >
                                        <ExternalLink size={16} />
                                        {t.projects.liveDemo}
                                    </a>
                                )}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary flex items-center gap-2 px-5 py-2.5 text-sm"
                                >
                                    <Github size={16} />
                                    {t.projects.viewCode}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
