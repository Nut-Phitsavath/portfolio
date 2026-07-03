'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import WarpedClockDoodle from './doodles/WarpedClockDoodle';

export default function Projects() {
    const projects = [
        {
            title: "AI-Powered Smart POS System",
            description: "A POS system for hardware stores. Handles sales, inventory, and customer orders. Integrated AI to recommend products based on items in the cart, and helps analyze sales and recommend actions on the dashboard.",
            techStack: ["Next.js", "TypeScript", "Prisma", "Turso DB", "Tailwind CSS"],
            githubUrl: "https://github.com/Nut-Phitsavath/ai-integrated-pos-system",
            features: [
                "Manage inventory and stock levels",
                "Sales dashboard with analytics",
                "Multiple payment methods (cash/card)",
                "AI product recommendations"
            ]
        },
        {
            title: "Typing Practice",
            description: "A Monkeytype-inspired typing trainer with adaptive difficulty — it tracks which words and characters trip you up and weights practice rounds toward your weak spots. Pure HTML/CSS/JS, no framework or build step.",
            techStack: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://nut-phitsavath.github.io/typing-practice/",
            githubUrl: "https://github.com/Nut-Phitsavath/typing-practice",
            features: [
                "Five modes: words, timed, and character/hand drills",
                "Adaptive weighting repeats your weak words and keys",
                "Live WPM, accuracy, and consistency stats",
                "On-screen keyboard with finger-position highlighting"
            ]
        }
    ];

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <WarpedClockDoodle className="w-16 h-16 mx-auto mb-2 text-border opacity-40" />
                    <h2 className="font-heading text-4xl md:text-5xl mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Here are some of my recent projects showcasing my skills and passion for development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 ink-card hatch-shadow"
                        >
                            {/* Title */}
                            <h3 className="font-heading text-2xl mb-4">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Features */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold mb-3 text-foreground/80">Key Features:</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                            <span className="mr-2">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold mb-3 text-foreground/80">Tech Stack:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 ink-btn text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 ink-btn ink-hover font-medium"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                )}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 ink-btn ink-hover font-medium"
                                >
                                    <Github size={18} />
                                    View Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
