import { motion } from 'framer-motion';

export default function TestimonialCard({ item, index }) {
  return (
    <motion.blockquote
      className="glass-panel h-full rounded-2xl border border-blue-200/20 p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.12, duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, borderColor: 'rgba(156, 174, 255, 0.4)' }}
    >
      <p className="text-base leading-relaxed text-slate-200">“{item.quote}”</p>
      <footer className="mt-5">
        <p className="text-sm font-semibold text-white">{item.name}</p>
        <p className="text-xs text-blue-100/75">{item.role}</p>
      </footer>
    </motion.blockquote>
  );
}
