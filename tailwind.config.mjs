/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#08090C',
          light: '#0E1117',
          card: '#121620',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        brand: {
          cyan: '#06B6D4',
          cyanGlow: '#22D3EE',
          emerald: '#10B981',
          emeraldGlow: '#34D399',
          gold: '#F59E0B',
          purple: '#8B5CF6',
        },
        alabaster: '#F8FAFC',
        mutedText: '#94A3B8',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'glow-card': '0 10px 40px -10px rgba(0, 0, 0, 0.7)',
        'drawer': '-20px 0 60px 0 rgba(0, 0, 0, 0.9)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 3s ease-in-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
