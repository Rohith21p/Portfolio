import { motion } from 'framer-motion';

export default function ServiceCard({ service, index }) {
  return (
    <motion.article
      className="glass-panel hover-shine h-full rounded-2xl border border-blue-200/20 p-5 md:p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, borderColor: 'rgba(158, 177, 255, 0.42)' }}
    >
      <h3 className="text-lg font-semibold text-slate-100">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300/85">{service.description}</p>
    </motion.article>
  );
}
