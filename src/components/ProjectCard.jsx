import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;

    const rotateY = ((relativeX / rect.width) * 2 - 1) * 7;
    const rotateX = ((relativeY / rect.height) * -2 + 1) * 6;

    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.article
      className="card-tilt glass-panel hover-shine group h-full rounded-2xl border border-blue-200/20 p-5 md:p-6"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, borderColor: 'rgba(154, 173, 255, 0.48)' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(980px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
    >
      <div className="overflow-hidden rounded-xl border border-blue-200/20 bg-slate-900/50">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-slate-50">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300/85">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((stack) => (
          <span
            key={stack}
            className="rounded-full border border-blue-200/20 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-100"
          >
            {stack}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="secondary-btn !px-4 !py-2 text-xs"
          data-cursor="hover"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="primary-btn !px-4 !py-2 text-xs"
          data-cursor="hover"
        >
          Demo
        </a>
      </div>
    </motion.article>
  );
}
