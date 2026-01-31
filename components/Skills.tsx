'use client';

import { motion } from 'framer-motion';

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            gradient: "gradient-text",
            bgColor: "bg-primary/10",
            borderColor: "border-primary/20",
            hoverBg: "hover:bg-primary/20",
            skills: ['React', 'Flutter (Dart)', 'React Native', 'HTML & CSS', 'Next.js', 'TypeScript', 'Python']
        },
        {
            title: "Backend & Database",
            gradient: "gradient-text",
            bgColor: "bg-secondary/10",
            borderColor: "border-secondary/20",
            hoverBg: "hover:bg-secondary/20",
            skills: ['SQL', 'Database Design', 'Database Management']
        },
        {
            title: "Data & Analysis",
            gradient: "gradient-accent-text",
            bgColor: "bg-accent/10",
            borderColor: "border-accent/20",
            hoverBg: "hover:bg-accent/20",
            skills: ['Excel', 'Orange', 'Tableau', 'Google Analytics']
        },
        {
            title: "Tools & Workflow",
            gradient: "gradient-text",
            bgColor: "bg-primary/10",
            borderColor: "border-primary/20",
            hoverBg: "hover:bg-primary/20",
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Skills</span> & Technologies
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
                            className="p-6 rounded-2xl glass hover:shadow-xl transition-all"
                        >
                            <h3 className={`text-2xl font-bold mb-4 ${category.gradient}`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`px-4 py-2 rounded-full ${category.bgColor} text-foreground border ${category.borderColor} ${category.hoverBg} transition-colors text-sm`}
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
