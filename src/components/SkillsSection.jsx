import { motion } from 'framer-motion';
import { Brain, Cloud, Database, LayoutGrid, Server, Wrench } from 'lucide-react';
import { skillCategories } from '../data/siteContent';
import SectionHeader from './ui/SectionHeader';

const iconMap = {
  layout: LayoutGrid,
  server: Server,
  database: Database,
  brain: Brain,
  wrench: Wrench,
  cloud: Cloud
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-spacing" data-reveal>
      <div className="site-container">
        <SectionHeader
          eyebrow="Skills"
          title="Technical stack organized for real product delivery"
          description="A clean capability map across frontend, backend, database, tooling, AI workflows, and deployment."
        />

        <div className="skills-grid">
          {skillCategories.map((bucket, index) => {
            const Icon = iconMap[bucket.icon] || LayoutGrid;

            return (
              <motion.article
                key={bucket.category}
                className="surface-card skill-card"
                data-depth-speed={(0.07 + index * 0.01).toFixed(3)}
                data-depth-x={index % 2 === 0 ? '-0.03' : '0.03'}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="skill-head">
                  <span className="skill-icon-wrap">
                    <Icon size={16} />
                  </span>
                  <h3>{bucket.category}</h3>
                </div>

                <div className="skill-chip-wrap">
                  {bucket.skills.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
