'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import EyeDoodle from './doodles/EyeDoodle';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Surreal accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ rotate: [-3, 3, -3] }}
                    transition={{ duration: 90, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/3 right-[8%] w-72 text-border opacity-20"
                >
                    <EyeDoodle className="w-full h-auto" />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    {/* Greeting Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 ink-card mb-8"
                    >
                        <span className="text-sm text-muted-foreground">Welcome to my portfolio</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-heading text-6xl md:text-8xl mb-6 leading-tight"
                    >
                        I&apos;m Nattaphonh Phitsavath
                        <br />
                        <span className="text-3xl md:text-5xl text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
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
                            className="w-full sm:w-auto px-8 py-4 ink-btn ink-hover items-center justify-center gap-2"
                        >
                            View My Work
                            <ArrowDown size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 ink-btn ink-hover items-center justify-center"
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
                            whileHover={{ y: -3 }}
                            href="https://github.com/Nut-Phitsavath"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 ink-btn ink-hover"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3 }}
                            href="https://www.linkedin.com/in/nattaphonh-phitsavath-68149b353/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 ink-btn ink-hover"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3 }}
                            href="mailto:n.phitsavath@gmail.com"
                            className="p-3 ink-btn ink-hover"
                            aria-label="Email"
                        >
                            <Mail size={22} />
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
