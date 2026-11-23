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
          DEFAULT: '#07080A',
          subtle: '#0B0C10',
          surface: '#0F1015',
        },
        champagne: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dim: '#D97706',
        },
        executive: {
          indigo: '#6366F1',
          indigoLight: '#818CF8',
          text: '#F4F4F5',
          muted: '#A1A1AA',
          subtle: '#71717A',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'GeistMono', 'monospace'],
      },
      boxShadow: {
        'executive-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'spotlight': '0 0 80px 20px rgba(99, 102, 241, 0.08)',
        'gold-glow': '0 0 30px -5px rgba(245, 158, 11, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
