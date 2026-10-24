/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#080B0A',
          secondary: '#0D1210',
          card: '#111916',
        },
        accent: {
          DEFAULT: '#25D366',
          soft: '#7CFFB2',
        },
        ink: {
          DEFAULT: '#F5F7F5',
          muted: '#A1ADA5',
        },
        border: {
          subtle: 'rgba(255,255,255,0.09)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(37,211,102,0.18), 0 8px 40px -12px rgba(37,211,102,0.35)',
        'glow-sm': '0 0 24px -8px rgba(37,211,102,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -24px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
