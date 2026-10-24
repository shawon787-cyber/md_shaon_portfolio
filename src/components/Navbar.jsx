import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';
import { navLinks, profile } from '@/data/site';
import { useScrolled, useActiveSection, usePrefersReducedMotion } from '@/hooks/useScroll';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  const reduced = usePrefersReducedMotion();
  const active = useActiveSection(navLinks.map((l) => l.href.replace('#', '')));

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={reduced ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass border-b border-white/[0.06]' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="font-mono text-base font-semibold tracking-tight text-ink focus-ring rounded-md"
        >
          <span className="text-accent">{'<'}</span>
          SHAWON
          <span className="text-accent">{'/>'}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`relative rounded-md px-3 py-2 text-sm transition-colors focus-ring ${
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-px bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden rounded-md p-2 text-ink-muted transition-colors hover:text-accent focus-ring sm:block"
          >
            <Github size={18} />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-md p-2 text-ink-muted transition-colors hover:text-ink focus-ring md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden glass border-b border-white/[0.06] md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className={`block rounded-md px-3 py-3 text-sm transition-colors ${
                        isActive ? 'text-accent' : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
