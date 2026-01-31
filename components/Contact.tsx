'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Get In <span className="gradient-accent-text">Touch</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                        Have a project in mind or want to collaborate? Let's chat!
                    </p>
                    <div className="text-muted-foreground">
                        <p>Contact form coming soon...</p>
                        <p className="text-sm mt-2">We'll add a functional contact form here!</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
