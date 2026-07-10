'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const channelMeta = [
    { value: 'n.phitsavath@gmail.com', href: 'mailto:n.phitsavath@gmail.com', icon: Mail },
    { value: 'nattaphonh-phitsavath', href: 'https://www.linkedin.com/in/nattaphonh-phitsavath-68149b353/', icon: Linkedin },
    { value: 'Nut-Phitsavath', href: 'https://github.com/Nut-Phitsavath', icon: Github },
    { value: 'Download PDF', href: '/resume.pdf', icon: FileText },
];

export default function Contact() {
    const { t } = useLanguage();
    const channels = t.contact.channels.map((c, i) => ({ ...c, ...channelMeta[i] }));

    return (
        <section id="contact" className="py-24 md:py-32 px-6 bg-muted/40">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">{t.contact.eyebrow}</p>
                    <h2 className="font-serif italic text-4xl md:text-5xl mb-4">
                        {t.contact.heading}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl">
                        {t.contact.lead}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {channels.map((channel, index) => (
                        <motion.a
                            key={channel.label}
                            href={channel.href}
                            target={channel.href.startsWith('http') || channel.href.endsWith('.pdf') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="card p-5 flex items-center gap-4"
                        >
                            <span className="p-2.5 rounded-lg bg-accent-soft text-accent-soft-foreground shrink-0">
                                <channel.icon size={18} />
                            </span>
                            <span>
                                <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                                    {channel.label}
                                </span>
                                <span className="block text-sm">{channel.value}</span>
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
