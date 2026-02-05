'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "AI-Powered Smart POS System",
            description: "A POS system for hardware stores. Handles sales, inventory, and customer orders. Integrated AI to recommend products based on items in the cart, and helps analyze sales and recommend actions on the dashboard.",
            techStack: ["Next.js", "TypeScript", "Prisma", "Turso DB", "Tailwind CSS"],
            liveUrl: "https://ai-integrated-pos-system-production.up.railway.app", // Replace with your actual Railway URL
            githubUrl: "https://github.com/Nut-Phitsavath/ai-integrated-pos-system", // Replace with your actual GitHub URL
            gradient: "from-blue-500 to-purple-600",
            features: [
                "Manage inventory and stock levels",
                "Sales dashboard with analytics",
                "Multiple payment methods (cash/card)",
                "AI product recommendations"
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="gradient-accent-text">Projects</span>
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
                            className="group relative rounded-2xl glass overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                            <div className="relative p-8">
                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-4 gradient-text">
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
                                                <span className="mr-2 text-primary">•</span>
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
                                                className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors font-medium"
                                    >
                                        <Github size={18} />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
