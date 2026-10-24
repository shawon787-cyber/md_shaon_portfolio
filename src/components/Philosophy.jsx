import { motion } from 'framer-motion';
import { SectionShell } from '@/components/Section';
import { principles } from '@/data/site';
import { usePrefersReducedMotion } from '@/hooks/useScroll';

export default function Philosophy() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell id="philosophy" className="py-20 sm:py-24">
      <motion.h2
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:text-4xl"
      >
        Good code is invisible.{' '}
        <span className="text-gradient-emerald">Great experiences aren't.</span>
      </motion.h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface group rounded-xl p-5 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow-sm"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent transition-transform group-hover:scale-110">
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{p.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
