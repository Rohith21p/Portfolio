import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mb-12 max-w-3xl"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="inline-flex rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-200/85">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-50 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-slate-300/85 md:text-lg">{description}</p>
    </motion.div>
  );
}
