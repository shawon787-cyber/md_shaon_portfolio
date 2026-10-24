import { motion } from 'framer-motion';
import { SectionShell, SectionLabel, SectionHeading } from '@/components/Section';
import { skillCategories } from '@/data/site';
import { usePrefersReducedMotion } from '@/hooks/useScroll';

const skillIconMap = {
  HTML5: '🌐',
  CSS3: '🎨',
  JavaScript: '✦',
  React: '⚛',
  'Next.js': '▲',
  TypeScript: 'TS',
  'Tailwind CSS': '~',
  'Node.js': '⬢',
  'Express.js': 'EX',
  'REST APIs': '{}',
  MongoDB: '◇',
  WordPress: 'W',
  WooCommerce: 'WC',
  Shopify: 'S',
  Figma: '✎',
  'UI/UX Design': '◈',
  'Framer Motion': '〰',
  'Three.js': '3D',
  Git: '⎇',
  GitHub: '⌥',
  'VS Code': '[]',
  npm: '⬇',
};

export default function Skills() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell id="skills">
      <SectionLabel>02 / Tech Stack</SectionLabel>
      <SectionHeading className="mt-4 max-w-2xl">
        Tools I use to bring ideas to{' '}
        <span className="text-gradient-emerald">life.</span>
      </SectionHeading>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, ci) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="card-surface rounded-xl p-5 transition-all hover:border-accent/25"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-accent/10 p-2 text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-ink">{cat.title}</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.03 }}
                    className="group/skill inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-bg-secondary/60 px-2.5 py-1.5 text-[12px] font-medium text-ink-muted transition-all hover:border-accent/40 hover:text-ink"
                  >
                    <span className="font-mono text-[10px] text-accent/70">
                      {skillIconMap[skill] || '•'}
                    </span>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
