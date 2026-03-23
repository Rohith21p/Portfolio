import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + Math.random() * 14, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center gap-6 bg-[#03050f]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 rounded-2xl bg-blue-500/25 blur-2xl" />
        <div className="glass-panel relative rounded-2xl px-7 py-5 shadow-neon">
          <p className="font-sora text-sm uppercase tracking-[0.35em] text-slate-200/80">Rohith V</p>
          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-blue-200/70">Loading Premium Experience</p>
        </div>
      </motion.div>

      <div className="h-1.5 w-64 overflow-hidden rounded-full bg-slate-700/50">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-400"
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'easeOut', duration: 0.25 }}
        />
      </div>

      <p className="text-xs font-medium tracking-[0.25em] text-slate-400">{Math.round(progress)}%</p>
    </motion.div>
  );
}
