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
          DEFAULT: '#09090B',
          surface: '#0D0E12',
          elevated: '#12141A',
        },
        slatecard: {
          DEFAULT: '#18181B',
          hover: '#222226',
          border: '#27272A',
          borderHover: '#3F3F46',
        },
        brand: {
          emerald: '#10B981',
          emeraldLight: '#34D399',
          emeraldDark: '#059669',
          blue: '#3B82F6',
          blueLight: '#60A5FA',
          blueDark: '#2563EB',
          volt: '#D2FC00',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        'emerald-glow': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'blue-glow': '0 0 25px -5px rgba(59, 130, 246, 0.25)',
        'card-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
