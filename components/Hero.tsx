'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    {/* Greeting Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                    >
                        <Sparkles size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">Welcome to my portfolio</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        I'm{' '}
                        <span className="gradient-text">Nattaphonh Phitsavath</span>
                        <br />
                        <span className="text-3xl md:text-5xl text-muted-foreground font-normal">
                            Aspiring Software Developer
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                    >
                        Building mobile and web applications with React, Flutter, and modern frontend technologies.
                        Experienced in SQL database management and data analysis. Eager to grow through hands-on development.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark hover:shadow-glow transform hover:scale-105 inline-flex items-center justify-center gap-2"
                        >
                            View My Work
                            <ArrowDown size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 border-2 border-border rounded-full font-medium hover:bg-muted transform hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex items-center justify-center gap-6"
                    >
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            href="https://github.com/Nut-Phitsavath"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            href="https://www.linkedin.com/in/nattaphonh-phitsavath-68149b353/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            href="mailto:n.phitsavath@gmail.com"
                            className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <ArrowDown size={32} className="text-muted-foreground opacity-50" />
            </motion.div>
        </section>
    );
}
