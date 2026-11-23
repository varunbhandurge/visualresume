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
        black: '#000000',
        terminal: {
          DEFAULT: '#00FF00',
          dim: '#00BB00',
          glow: 'rgba(0, 255, 0, 0.25)',
        },
        electric: {
          DEFAULT: '#0070F3',
          glow: 'rgba(0, 112, 243, 0.25)',
        },
        surface: {
          DEFAULT: '#080808',
          elevated: '#0D0D0D',
          border: '#1F1F1F',
          borderHover: '#333333',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'GeistMono', 'monospace'],
      },
      boxShadow: {
        'terminal-glow': '0 0 20px -3px rgba(0, 255, 0, 0.3)',
        'electric-glow': '0 0 20px -3px rgba(0, 112, 243, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
