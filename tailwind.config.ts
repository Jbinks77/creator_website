import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        primary: 'hsl(var(--primary))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      },
      boxShadow: {
        glow: '0 0 60px rgba(30, 230, 255, 0.16)',
        panel: '0 20px 45px rgba(5, 7, 14, 0.5)'
      },
      backgroundImage: {
        grain: "url('/noise.svg')"
      }
    }
  },
  plugins: []
};

export default config;
