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
        obsidian: '#090A0D',
        alabaster: '#F5F5F0',
        slateMuted: '#94A3B8',
        cobalt: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        },
        goldWarm: {
          DEFAULT: '#EAB308',
          light: '#FDE047',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'drawer': '-20px 0 50px 0 rgba(0, 0, 0, 0.85)',
        'tactile': '0 12px 30px -10px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};

export default config;
