import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Code2, Sparkles, Terminal } from 'lucide-react';
import { heroContent } from '../data/siteContent';
import MagneticButton from './ui/MagneticButton';

const headlineWords = heroContent.headline.split(' ');

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-atmos-layer" data-depth-speed="0.08" data-depth-x="-0.05" data-pointer-depth="0.34" />
      <div className="hero-atmos-layer hero-atmos-layer-b" data-depth-speed="0.12" data-depth-x="0.08" data-pointer-depth="0.54" />

      <div className="hero-stage site-container">
        <div className="hero-centerpiece" data-depth-speed="0.22" data-depth-scale="0.03" data-pointer-depth="0.95">
          <div className="hero-core" />
          <div className="hero-core-ring hero-core-ring-a" />
          <div className="hero-core-ring hero-core-ring-b" />
          <div className="hero-core-dot hero-core-dot-a" />
          <div className="hero-core-dot hero-core-dot-b" />
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 26, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="hero-name"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            {heroContent.name}
          </motion.p>

          <motion.p
            className="hero-badge"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>🟢</span> {heroContent.badge}
          </motion.p>

          <h1 className="hero-title">
            {headlineWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="hero-title-word"
                initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: 0.16 + index * 0.07 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.p
            className="hero-support"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6 }}
          >
            {heroContent.supportingLine}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.72 }}
          >
            <MagneticButton href="#projects" variant="primary" className="hero-btn-primary">
              View My Work <ArrowRight size={15} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost" className="hero-btn-ghost">
              Hire Me
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero-floating-panel hero-panel-left"
          data-depth-speed="0.28"
          data-depth-x="-0.08"
          data-pointer-depth="1.05"
          initial={{ opacity: 0, x: -24, y: 18 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5 }}
        >
          <p className="hero-panel-label"><Terminal size={14} /> Build Preview</p>
          <pre>{`> npm run deploy
✓ premium ui pass
✓ java api connected
✓ production build ready`}</pre>
        </motion.aside>

        <motion.aside
          className="hero-floating-panel hero-panel-right"
          data-depth-speed="0.26"
          data-depth-x="0.1"
          data-pointer-depth="1.1"
          initial={{ opacity: 0, x: 24, y: 18 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.65, delay: 0.56 }}
        >
          <p className="hero-panel-label"><BarChart3 size={14} /> Product Metrics</p>
          <div className="hero-metric-row"><span>Delivery Quality</span><span>Premium</span></div>
          <div className="hero-metric-row"><span>Backend Layer</span><span>Java / Spring</span></div>
          <div className="hero-metric-row"><span>UI System</span><span>Modern Web</span></div>
        </motion.aside>

        <div className="hero-float-badge hero-float-badge-a" data-depth-speed="0.21" data-pointer-depth="0.88">
          <Code2 size={13} /> Full Stack Engineer
        </div>
        <div className="hero-float-badge hero-float-badge-b" data-depth-speed="0.24" data-pointer-depth="0.94">
          <Sparkles size={13} /> Product-Grade UI
        </div>
      </div>

      <motion.a
        href="#projects"
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.45, 0.92, 0.45], y: [0, 7, 0] }}
        transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        Scroll to Explore
      </motion.a>
    </section>
  );
}
