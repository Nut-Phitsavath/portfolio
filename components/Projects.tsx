'use client';

import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="gradient-accent-text">Projects</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                        Here are some of my recent projects showcasing my skills and passion for development.
                    </p>
                    <div className="text-muted-foreground">
                        <p>Projects showcase coming soon...</p>
                        <p className="text-sm mt-2">We'll add your amazing projects here!</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
