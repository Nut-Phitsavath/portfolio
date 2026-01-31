'use client';

import { motion } from 'framer-motion';

export default function About() {
    const cards = [
        {
            title: "📱 Mobile & Web Development",
            description: "Building cross-platform apps with Flutter and React/React Native"
        },
        {
            title: "💾 Data & Databases",
            description: "SQL database management, data mining, and data analysis"
        },
        {
            title: "🎨 Frontend Development",
            description: "Creating responsive interfaces with React, HTML, and CSS"
        }
    ];

    return (
        <section id="about" className="py-24 px-6 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                        Fresh graduate transitioning from business to software development.
                        Eager to contribute to a team and learn from experienced developers.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cards.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }}
                                className="p-6 rounded-2xl glass hover:shadow-xl transition-all"
                            >
                                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
