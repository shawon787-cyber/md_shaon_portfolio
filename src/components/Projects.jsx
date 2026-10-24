import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { SectionShell, SectionLabel, SectionHeading } from '@/components/Section';
import { projects, profile } from '@/data/site';
import { usePrefersReducedMotion } from '@/hooks/useScroll';

function ProjectVisual({ project, index }) {
  // CSS-generated visual keyed off project index for variety
  const variants = [
    'from-emerald-500/20 via-teal-500/5 to-transparent',
    'from-teal-500/20 via-cyan-500/5 to-transparent',
    'from-rose-500/15 via-emerald-500/5 to-transparent',
    'from-emerald-500/20 via-lime-500/5 to-transparent',
    'from-teal-500/20 via-emerald-500/5 to-transparent',
    'from-emerald-500/20 via-green-500/5 to-transparent',
  ];
  const grad = variants[index % variants.length];

  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${grad}`}>
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-5xl font-bold text-white/[0.06] sm:text-6xl">
          {project.name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      {/* Mock browser chrome */}
      <div className="absolute left-4 right-4 top-4 flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-bg-base/50 px-3 py-2 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 h-1.5 flex-1 rounded-full bg-white/[0.06]" />
      </div>
      <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
        <div className="h-1.5 w-2/3 rounded-full bg-white/[0.08]" />
        <div className="h-1.5 w-1/2 rounded-full bg-white/[0.06]" />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className="card-surface group flex flex-col overflow-hidden rounded-xl shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-glow"
    >
      {/* Visual */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06]">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <ProjectVisual project={project} index={index} />
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-bg-base/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-soft backdrop-blur">
          {project.category}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <ArrowUpRight
            size={18}
            className="mt-0.5 shrink-0 text-ink-muted/50 transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

        <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/[0.07] bg-bg-secondary/50 px-2 py-1 font-mono text-[11px] text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-muted transition-colors hover:text-accent focus-ring rounded-md"
          >
            <Github size={15} />
            Code
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent transition-colors hover:text-accent-soft focus-ring rounded-md"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span
              title="No live deployment available"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-muted/30"
            >
              <ExternalLink size={15} />
              No demo
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const reduced = usePrefersReducedMotion();
  return (
    <SectionShell id="projects">
      <SectionLabel>03 / Selected Work</SectionLabel>
      <SectionHeading className="mt-4 max-w-2xl">
        Projects built with <span className="text-gradient-emerald">purpose.</span>
      </SectionHeading>
      <motion.p
        initial={reduced ? false : { opacity: 0 }}
        whileInView={reduced ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted"
      >
        A selection of web applications demonstrating my approach to frontend development, full-stack
        functionality, and user-focused design.
      </motion.p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        whileInView={reduced ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex justify-center"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-5 py-3 text-sm font-semibold text-ink transition-all hover:border-accent/50 hover:text-accent focus-ring"
        >
          <Github size={16} />
          View More on GitHub
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </SectionShell>
  );
}
