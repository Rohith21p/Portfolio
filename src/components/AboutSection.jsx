import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { aboutContent } from '../data/siteContent';
import SectionHeader from './ui/SectionHeader';

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing" data-reveal>
      <div className="site-container">
        <SectionHeader
          eyebrow="About"
          title={aboutContent.heading}
          description={aboutContent.summary}
        />

        <div className="about-grid">
          <motion.article
            className="surface-card about-main"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              I work across frontend and backend layers to build dependable software products that are clean,
              fast, and easy to scale.
            </p>
            <p>
              My approach combines strong engineering fundamentals with thoughtful UI quality, so every
              project feels polished and performs reliably in production.
            </p>
          </motion.article>

          <div className="about-points" data-depth-speed="0.1" data-depth-x="0.05">
            {aboutContent.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="about-point"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <CheckCircle2 size={16} />
                <p>{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
