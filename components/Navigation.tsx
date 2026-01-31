'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function Navigation() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold gradient-text flex items-center gap-2"
                >
                    <Code2 size={24} className="text-primary" />
                    Portfolio
                </motion.div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#about" className="text-muted-foreground hover:text-foreground">About</a>
                    <a href="#projects" className="text-muted-foreground hover:text-foreground">Projects</a>
                    <a href="#skills" className="text-muted-foreground hover:text-foreground">Skills</a>
                    <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark hover:shadow-glow">
                        Contact
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
