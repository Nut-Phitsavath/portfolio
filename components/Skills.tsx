'use client';

import { motion } from 'framer-motion';

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ['React', 'Flutter (Dart)', 'React Native', 'HTML & CSS', 'Next.js', 'TypeScript', 'Python']
        },
        {
            title: "Backend & Database",
            skills: ['SQL', 'Database Design', 'Database Management']
        },
        {
            title: "Data & Analysis",
            skills: ['Excel', 'Orange', 'Tableau', 'Google Analytics']
        },
        {
            title: "Tools & Workflow",
            skills: ['Git & GitHub', 'VS Code', 'Antigravity', 'Tailwind CSS', 'npm', 'Figma']
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-heading text-4xl md:text-5xl mb-6">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Technologies and tools I work with to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                            className="p-6 ink-card hatch-shadow"
                        >
                            <h3 className="font-heading text-2xl mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-4 py-2 ink-btn text-sm"
                                    >
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
