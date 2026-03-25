import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/siteContent';
import MagneticButton from './ui/MagneticButton';
import SectionHeader from './ui/SectionHeader';

function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glowX: 50, glowY: 50 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const nx = x / rect.width;
    const ny = y / rect.height;

    setTilt({
      x: (0.5 - ny) * 5,
      y: (nx - 0.5) * 5,
      glowX: nx * 100,
      glowY: ny * 100
    });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0, glowX: 50, glowY: 50 });
  };

  return (
    <motion.article
      className={`surface-card project-card ${project.featured ? 'project-featured' : ''}`}
      style={{
        transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        '--card-glow-x': `${tilt.glowX}%`,
        '--card-glow-y': `${tilt.glowY}%`
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-image-wrap">
        <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
        {project.featured ? <span className="project-badge">Featured</span> : null}
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p className="project-summary">{project.summary}</p>
        <p className="project-meta">
          <span>Problem:</span> {project.problem}
        </p>
        <p className="project-meta">
          <span>Impact:</span> {project.impact}
        </p>

        <div className="project-feature-list">
          {project.features.map((feature) => (
            <span key={feature} className="project-feature">
              {feature}
            </span>
          ))}
        </div>

        <div className="project-chip-wrap">
          {project.tech.map((tech) => (
            <span key={tech} className="skill-chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <MagneticButton href={project.demo} variant="primary" className="!px-4 !py-2 !text-sm">
            Live Demo <ArrowUpRight size={13} />
          </MagneticButton>
          <MagneticButton href={project.github} variant="ghost" className="!px-4 !py-2 !text-sm">
            GitHub
          </MagneticButton>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing" data-reveal>
      <div className="site-container">
        <SectionHeader
          eyebrow="Projects"
          title="Selected product-focused projects"
          description="Real systems built with practical architecture, clear business logic, and production-ready implementation quality."
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-shell"
              data-depth-speed={(0.08 + index * 0.016).toFixed(3)}
              data-depth-x={index % 2 === 0 ? '-0.04' : '0.04'}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
