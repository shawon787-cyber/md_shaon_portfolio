import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Sparkles, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { profile, socials } from '@/data/site';
import { usePrefersReducedMotion } from '@/hooks/useScroll';

function RoleRotator() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reduced]);

  if (reduced) {
    return <span className="text-gradient-emerald">{profile.roles.join(' · ')}</span>;
  }

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <motion.span
        key={index}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="text-gradient-emerald inline-block whitespace-nowrap"
      >
        {profile.roles[index]}
      </motion.span>
    </span>
  );
}

function HeroVisual() {
  const reduced = usePrefersReducedMotion();
  const techLabels = [
    { label: 'React', x: '8%', y: '18%', delay: 0 },
    { label: 'Next.js', x: '72%', y: '8%', delay: 0.6 },
    { label: 'Node.js', x: '4%', y: '62%', delay: 1.2 },
    { label: 'WordPress', x: '78%', y: '58%', delay: 1.8 },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      {/* Glow ring */}
      <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.10),transparent_70%)] blur-2xl" />

      {/* Floating tech labels */}
      {techLabels.map((t) => (
        <motion.div
          key={t.label}
          className={`absolute ${reduced ? '' : 'animate-float'}`}
          style={{ left: t.x, top: t.y, animationDelay: `${t.delay}s` }}
        >
          <span className="glass card-surface rounded-full px-3 py-1.5 font-mono text-xs text-accent-soft shadow-glow-sm">
            {t.label}
          </span>
        </motion.div>
      ))}

      {/* Code editor panel */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className={`card-surface overflow-hidden rounded-xl shadow-card ${reduced ? '' : 'animate-float-slow'}`}>
          {/* Editor header */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[11px] text-ink-muted">developer.tsx</span>
          </div>
          {/* Code body */}
          <pre className="overflow-hidden px-4 py-4 font-mono text-[11px] leading-relaxed sm:text-xs">
            <code>
              <span className="text-ink-muted">{'// portfolio.tsx'}</span>
              {'\n'}
              <span className="text-[#c678dd]">const</span>{' '}
              <span className="text-accent">developer</span>{' '}
              <span className="text-ink-muted">=</span>{' '}
              <span className="text-ink">{'{'}</span>
              {'\n'}
              {'  '}name<span className="text-ink-muted">:</span>{' '}
              <span className="text-accent-soft">"Md Shaon"</span>,
              {'\n'}
              {'  '}role<span className="text-ink-muted">:</span>{' '}
              <span className="text-accent-soft">"Frontend"</span>,
              {'\n'}
              {'  '}stack<span className="text-ink-muted">:</span>{' '}
              <span className="text-ink">[</span>
              <span className="text-accent-soft">"React"</span>,{' '}
              <span className="text-accent-soft">"Node"</span>
              <span className="text-ink">]</span>,
              {'\n'}
              {'  '}remote<span className="text-ink-muted">:</span>{' '}
              <span className="text-[#d19a66]">true</span>,
              {'\n'}
              {'  '}available<span className="text-ink-muted">:</span>{' '}
              <span className="text-[#d19a66]">true</span>,
              {'\n'}
              <span className="text-ink">{'}'}</span>
            </code>
          </pre>
        </div>
      </motion.div>

      {/* Terminal card */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="absolute bottom-2 left-0 w-[58%]"
      >
        <div className={`card-surface overflow-hidden rounded-lg shadow-card ${reduced ? '' : 'animate-float'}`}
          style={{ animationDelay: '1s' }}
        >
          <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
            <TerminalIcon />
            <span className="font-mono text-[10px] text-ink-muted">zsh — bash</span>
          </div>
          <div className="px-3 py-2.5 font-mono text-[10px] leading-relaxed sm:text-[11px]">
            <div className="text-ink-muted">
              <span className="text-accent">➜</span> ~/shaon
            </div>
            <div className="text-accent-soft">$ npm run build</div>
            <div className="text-ink-muted">✓ built in 1.24s</div>
            <div className="text-ink">
              <span className="text-accent">➜</span> ready to ship
              <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-accent align-middle" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TerminalIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-accent">
      <path d="M4 17l6-6-6-6M12 19h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-28 sm:pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-28">
        {/* Left: text */}
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent/80"
          >
            Hello, I'm Md Shaon — Software Developer
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Building digital experiences that{' '}
            <span className="text-gradient-emerald">feel as good</span> as they perform.
          </motion.h1>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-lg font-medium text-ink"
          >
            <RoleRotator />
          </motion.div>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted"
          >
            I build modern, responsive web applications and custom WordPress solutions with a focus on
            clean interfaces, reliable functionality, and performance.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-accent" />
              {profile.location} · Working with teams worldwide
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg-base transition-all hover:bg-accent-soft hover:shadow-glow focus-ring"
            >
              Explore My Work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-5 py-3 text-sm font-semibold text-ink transition-all hover:border-accent/50 hover:text-accent focus-ring"
            >
              <Sparkles size={16} />
              Let's Connect
            </button>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-8 flex items-center gap-1"
          >
            {socials.map((s) => {
              const Icon = s.icon;
              if (s.disabled) {
                return (
                  <span
                    key={s.label}
                    title={`${s.label} link not configured yet`}
                    className="cursor-not-allowed rounded-md p-2 text-ink-muted/40"
                  >
                    <Icon size={18} />
                  </span>
                );
              }
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-md p-2 text-ink-muted transition-colors hover:text-accent focus-ring"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right: visual */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
