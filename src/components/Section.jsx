import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useScroll';

export function SectionLabel({ children }) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 12 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80"
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ children, className = '' }) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.h2
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className={`text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.75rem] ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function SectionShell({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
