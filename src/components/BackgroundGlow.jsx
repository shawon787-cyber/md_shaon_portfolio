import { usePrefersReducedMotion } from '@/hooks/useScroll';

export default function BackgroundGlow() {
  const reduced = usePrefersReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#080B0A]" />

      {/* Emerald radial glows */}
      <div
        className={`absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.10),transparent_65%)] ${
          reduced ? '' : 'animate-pulse-glow'
        }`}
      />
      <div
        className={`absolute top-[40%] -right-40 h-[500px] w-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,255,178,0.06),transparent_65%)] ${
          reduced ? '' : 'animate-pulse-glow'
        }`}
        style={{ animationDelay: '2s' }}
      />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.05),transparent_70%)]" />

      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
}
