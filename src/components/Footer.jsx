import { ArrowUp } from 'lucide-react';
import { profile } from '@/data/site';
import { usePrefersReducedMotion } from '@/hooks/useScroll';

export default function Footer() {
  const reduced = usePrefersReducedMotion();
  const year = new Date().getFullYear();

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:px-8 sm:py-12">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            toTop();
          }}
          className="font-mono text-base font-semibold tracking-tight text-ink focus-ring rounded-md"
        >
          <span className="text-accent">{'<'}</span>
          SHAWON
          <span className="text-accent">{'/>'}</span>
        </a>

        <p className="text-center text-[13px] text-ink-muted">
          Designed and built by Md Shaon.
        </p>

        <div className="flex items-center gap-5 text-[13px] text-ink-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent focus-ring rounded-md"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent focus-ring rounded-md"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent focus-ring rounded-md"
          >
            Email
          </a>
        </div>

        <div className="flex w-full items-center justify-between border-t border-white/[0.06] pt-6">
          <p className="font-mono text-[12px] text-ink-muted/60">© {year} Md Shaon. All rights reserved.</p>
          <button
            onClick={toTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.1] px-3 py-2 text-[12px] font-medium text-ink-muted transition-all hover:border-accent/40 hover:text-accent focus-ring"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
