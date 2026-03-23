import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { Suspense, lazy, useRef } from 'react';
import TypingText from './TypingText';

const ThreeHeroBackground = lazy(() => import('./ThreeHeroBackground'));

export default function Hero({ typingTexts }) {
  const sectionRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 130, damping: 17, mass: 0.65 });
  const smoothY = useSpring(mouseY, { stiffness: 130, damping: 17, mass: 0.65 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    mouseX.set(x * 28);
    mouseY.set(y * 20);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <Suspense fallback={<div className="absolute inset-0 -z-20" aria-hidden="true" />}>
        <ThreeHeroBackground />
      </Suspense>
      <div className="hero-glow -z-10" />
      <div className="section-wrap">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 max-w-4xl">
          <motion.div
            className="glass-panel inline-flex items-center gap-2 rounded-full border border-green-300/25 px-4 py-2 text-xs font-medium tracking-wide text-green-200"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm">🟢</span> Available for Freelance
          </motion.div>

          <motion.div
            style={{ x: smoothX, y: smoothY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8"
          >
            <h1 className="font-sora text-4xl font-bold leading-[1.05] text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl">
              Turning Ideas into{' '}
              <span className="text-gradient">Powerful Web &amp; AI Solutions</span>
            </h1>

            <div className="mt-6 min-h-8 text-base sm:text-lg md:text-xl">
              <TypingText texts={typingTexts} />
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300/90 md:text-lg">
              I build modern, fast, and scalable applications for real-world problems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="primary-btn" data-cursor="hover">
                View Projects
              </a>
              <a href="#contact" className="secondary-btn" data-cursor="hover">
                Hire Me
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full border border-blue-300/20 bg-slate-900/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        Scroll
      </motion.a>
    </section>
  );
}
