import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { SectionShell, SectionLabel, SectionHeading } from '@/components/Section';
import { experiences } from '@/data/site';
import { usePrefersReducedMotion } from '@/hooks/useScroll';

export default function Experience() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell id="experience">
      <SectionLabel>04 / Experience</SectionLabel>
      <SectionHeading className="mt-4 max-w-2xl">
        My professional <span className="text-gradient-emerald">journey.</span>
      </SectionHeading>

      <div className="relative mt-14 pl-6 sm:pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-white/[0.08] to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={reduced ? false : { opacity: 0, x: -20 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              {/* Node */}
              <div className="absolute -left-[1.65rem] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[2.15rem]">
                <span
                  className={`h-3 w-3 rounded-full border-2 ${
                    exp.current
                      ? 'border-accent bg-accent shadow-glow-sm'
                      : 'border-white/20 bg-bg-base'
                  }`}
                />
                {exp.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                )}
              </div>

              <div className="card-surface rounded-xl p-5 transition-all hover:border-accent/25 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-ink sm:text-lg">{exp.role}</h3>
                    <p className="mt-1 font-mono text-[13px] text-accent-soft">{exp.org}</p>
                  </div>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-[13px] text-ink-muted">
                  <MapPin size={13} className="text-ink-muted/70" />
                  {exp.location}
                </div>

                <p className="mt-4 text-[14px] leading-relaxed text-ink-muted">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
