'use client';

import { Github, Linkedin, Mail, ArrowDown, Code2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero Section */}
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
              Hi, I'm{' '}
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

      {/* About Section */}
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
              {[
                {
                  title: "� Mobile & Web Development",
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
              ].map((item, index) => (
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

      {/* Projects Section Placeholder */}
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

      {/* Skills Section */}
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
            {/* Frontend Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0 }}
              className="p-6 rounded-2xl glass hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Flutter (Dart)', 'React Native', 'HTML & CSS', 'Next.js', 'TypeScript'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-primary/10 text-foreground border border-primary/20 hover:bg-primary/20 transition-colors text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend & Database */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-6 rounded-2xl glass hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">Backend & Database</h3>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'Database Design', 'Database Management'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-secondary/10 text-foreground border border-secondary/20 hover:bg-secondary/20 transition-colors text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Data & Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-6 rounded-2xl glass hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-accent-text">Data & Analysis</h3>
              <div className="flex flex-wrap gap-2">
                {['Excel', 'Orange', 'Tableau', 'Google Analytics', 'Data Mining'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-accent/10 text-foreground border border-accent/20 hover:bg-accent/20 transition-colors text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools & Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="p-6 rounded-2xl glass hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">Tools & Workflow</h3>
              <div className="flex flex-wrap gap-2">
                {['Git & GitHub', 'VS Code', 'Tailwind CSS', 'npm'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-primary/10 text-foreground border border-primary/20 hover:bg-primary/20 transition-colors text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nattaphonh Phitsavath. Built with Next.js & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}
