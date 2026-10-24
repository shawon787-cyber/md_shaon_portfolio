import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SectionShell, SectionLabel, SectionHeading } from '@/components/Section';
import { aboutHighlights, profile } from '@/data/site';
import { usePrefersReducedMotion } from '@/hooks/useScroll';

const bio = [
  "I'm a frontend and WordPress developer with a background in Zoology and a strong passion for software development and modern web technologies.",
  "I've gained hands-on experience through remote work with a Germany-based company and collaboration with a local agency. My work includes building and customizing WordPress websites, improving performance, and developing modern web interfaces.",
  'Alongside WordPress, I work with React, Next.js, Node.js, Express.js, and MongoDB to build responsive frontend experiences and full-stack applications.',
  "I enjoy turning ideas and designs into practical digital products with clean code, thoughtful UI/UX, and a strong focus on usability.",
];

function ProfilePanel() {
  const reduced = usePrefersReducedMotion();
  return (
    <div className="card-surface relative overflow-hidden rounded-2xl shadow-card">
      <div className="absolute inset-0 bg-radial-emerald" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-[11px] text-ink-muted">about.md</span>
        </div>
        <div className="space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
          <div>
            <span className="text-accent">const</span>{' '}
            <span className="text-accent-soft">shaon</span>{' '}
            <span className="text-ink-muted">=</span> <span className="text-ink">{'{'}</span>
          </div>
          <div className="pl-4">
            <span className="text-ink-muted">location</span>
            <span className="text-ink-muted">:</span>{' '}
            <span className="text-accent-soft">"Sylhet, BD"</span>,
          </div>
          <div className="pl-4">
            <span className="text-ink-muted">focus</span>
            <span className="text-ink-muted">:</span>{' '}
            <span className="text-ink">[</span>
            <span className="text-accent-soft">"frontend"</span>,{' '}
            <span className="text-accent-soft">"wordpress"</span>,{' '}
            <span className="text-accent-soft">"mern"</span>
            <span className="text-ink">]</span>,
          </div>
          <div className="pl-4">
            <span className="text-ink-muted">background</span>
            <span className="text-ink-muted">:</span>{' '}
            <span className="text-accent-soft">"Zoology → Software"</span>,
          </div>
          <div className="pl-4">
            <span className="text-ink-muted">remote</span>
            <span className="text-ink-muted">:</span>{' '}
            <span className="text-[#d19a66]">true</span>,
          </div>
          <div className="pl-4">
            <span className="text-ink-muted">learning</span>
            <span className="text-ink-muted">:</span>{' '}
            <span className="text-[#d19a66]">true</span>,
          </div>
          <div>
            <span className="text-ink">{'}'}</span>
          </div>
          <div className="mt-3 border-t border-white/[0.06] pt-3 text-ink-muted">
            <span className="text-accent">➜</span> shipping things people use.
            <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-accent align-middle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell id="about">
      <SectionLabel>01 / About Me</SectionLabel>
      <SectionHeading className="mt-4 max-w-2xl">
        A developer focused on building things that{' '}
        <span className="text-gradient-emerald">work beautifully.</span>
      </SectionHeading>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-muted">
            {bio.map((p, i) => (
              <motion.p
                key={i}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 text-ink-muted transition-colors hover:text-accent focus-ring"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-ink-muted transition-colors hover:text-accent focus-ring"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-md p-2 text-ink-muted transition-colors hover:text-accent focus-ring"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <ProfilePanel />
        </motion.div>
      </div>

      {/* Highlights */}
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {aboutHighlights.map((h, i) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={h.title}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface group rounded-xl p-5 transition-all hover:border-accent/30 hover:shadow-glow-sm"
            >
              <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent">
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-ink">{h.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{h.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
