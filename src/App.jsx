import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import AnimatedCursor from './components/AnimatedCursor';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import {
  contact,
  navLinks,
  projects,
  services,
  skills,
  testimonials,
  typingTexts
} from './data/portfolioData';

const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

function AppContent() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="noise-overlay" />
      <div className="soft-grid" />
      <AnimatedCursor />

      <Navbar links={navLinks} />

      <main>
        <Hero typingTexts={typingTexts} />

        <section id="about" className="section-wrap py-20 md:py-28">
          <motion.div
            className="glass-panel rounded-3xl border border-blue-200/20 p-7 md:p-12"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              eyebrow="About"
              title="I design and engineer experiences that feel premium and perform at scale"
              description="I’m Rohith V, an MCA graduate specializing in Java, Full Stack Development, and modern web applications. I build clean, responsive, and scalable solutions using technologies like Spring Boot, React, and MySQL."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: 'Experience Focus', value: 'SaaS-style products' },
                { label: 'Delivery Style', value: 'Fast + Reliable' },
                { label: 'Collaboration', value: 'Clear communication' }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-blue-200/20 bg-slate-900/45 p-4 md:p-5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-100 md:text-base">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="section-divider" />

        <section id="skills" className="section-wrap py-10 md:py-16">
          <SectionHeading
            eyebrow="Skills"
            title="Core technical stack for full-cycle product development"
            description="From backend architecture to polished frontend experiences, I build production-ready applications with performance and maintainability in mind."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.article
                key={skill.name}
                className="glass-panel h-full rounded-2xl border border-blue-200/20 p-5"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 0 32px rgba(103, 142, 255, 0.32), 0 0 80px rgba(124, 88, 255, 0.16)',
                  borderColor: 'rgba(159, 178, 255, 0.45)'
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-50">{skill.name}</h3>
                  <span className="rounded-full border border-blue-300/20 bg-blue-500/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-100/90">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/85">{skill.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section id="projects" className="section-wrap py-10 md:py-16">
          <SectionHeading
            eyebrow="Projects"
            title="Featured work crafted for reliability, scalability, and real users"
            description="Each project combines clean architecture with practical UX so businesses and clients get software that is dependable and easy to use."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <a
              href="https://github.com/Rohith21p"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
              data-cursor="hover"
            >
              Explore More on GitHub
            </a>
          </motion.div>
        </section>

        <div className="section-divider" />

        <section id="services" className="section-wrap py-10 md:py-16">
          <SectionHeading
            eyebrow="Services"
            title="Freelance services designed to ship polished outcomes quickly"
            description="Flexible engagement for startups, businesses, and students who need high-quality implementation with transparent updates."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section id="testimonials" className="section-wrap py-10 md:py-16">
          <SectionHeading
            eyebrow="Testimonials"
            title="Client feedback that reflects delivery speed and quality"
            description="Strong communication and clean execution are a core part of every project I take on."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section id="contact" className="section-wrap py-12 pb-24 md:py-16 md:pb-28">
          <motion.div
            className="glass-panel rounded-3xl border border-blue-200/20 p-7 md:p-12"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              eyebrow="Contact"
              title="Have a project in mind? Let’s build something amazing."
              description="Available for freelance web development, Java projects, full stack applications, and API integration tasks."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${contact.email}`}
                className="glass-panel rounded-2xl border border-blue-200/20 p-5 transition hover:border-blue-200/45"
                data-cursor="hover"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">Email</p>
                <p className="mt-2 text-sm font-medium text-slate-100 md:text-base">{contact.email}</p>
              </a>

              <a
                href={`https://wa.me/91${contact.phone}`}
                target="_blank"
                rel="noreferrer"
                className="glass-panel rounded-2xl border border-blue-200/20 p-5 transition hover:border-blue-200/45"
                data-cursor="hover"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">Phone / WhatsApp</p>
                <p className="mt-2 text-sm font-medium text-slate-100 md:text-base">{contact.phone}</p>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-panel rounded-2xl border border-blue-200/20 p-5 transition hover:border-blue-200/45"
                data-cursor="hover"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">LinkedIn</p>
                <p className="mt-2 text-sm font-medium text-slate-100 md:text-base">Rohith1206 Profile</p>
              </a>

              <div className="glass-panel rounded-2xl border border-blue-200/20 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">Location</p>
                <p className="mt-2 text-sm font-medium text-slate-100 md:text-base">{contact.location}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${contact.email}`} className="primary-btn" data-cursor="hover">
                Start a Project
              </a>
              <a
                href="https://github.com/Rohith21p"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
                data-cursor="hover"
              >
                View GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-blue-200/10 py-6 text-center text-xs text-slate-400">
        © {currentYear} Rohith V. Crafted with React, Tailwind, Framer Motion & Three.js
      </footer>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? <Preloader key="preloader" /> : <AppContent key="content" />}
    </AnimatePresence>
  );
}
