import { motion } from 'framer-motion';
import { Blocks, BrainCircuit, Braces, Building2, LayoutDashboard, ServerCog } from 'lucide-react';
import { services } from '../data/siteContent';
import SectionHeader from './ui/SectionHeader';

const iconMap = {
  'Full Stack Web Development': Blocks,
  'Java Systems': ServerCog,
  'Dashboard / Admin Panel Development': LayoutDashboard,
  'AI Tools': BrainCircuit,
  'API Integration': Braces,
  'Custom Business Apps': Building2
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-spacing" data-reveal>
      <div className="site-container">
        <SectionHeader
          eyebrow="Services"
          title="Services designed for client delivery"
          description="Clear service blocks focused on practical outcomes, maintainable code, and reliable project execution."
        />

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.title] || Blocks;

            return (
              <motion.article
                key={service.title}
                className="surface-card service-card"
                data-depth-speed={(0.07 + index * 0.01).toFixed(3)}
                data-depth-x={index % 2 === 0 ? '-0.03' : '0.03'}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="service-icon">
                  <Icon size={16} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
