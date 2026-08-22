import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        ice: {
          50:  '#F8FCFF',
          100: '#DDF4FF',
          200: '#B3E3FF',
          300: '#80CCFF',
          400: '#4DA6FF',
          500: '#0A84FF',
          600: '#0070E0',
          700: '#005BBB',
          800: '#004494',
          900: '#002D6B',
        },
      },
      borderRadius: {
        card: '24px',
        pill: '999px',
      },
      boxShadow: {
        'ice-sm':    '0 2px 12px rgba(10,132,255,.05)',
        'ice-md':    '0 8px 32px rgba(10,132,255,.08)',
        'ice-lg':    '0 20px 60px rgba(10,132,255,.12)',
        'ice-hover': '0 24px 64px rgba(10,132,255,.16)',
        'dark-sm':   '0 2px 12px rgba(0,0,0,.25)',
        'dark-md':   '0 8px 32px rgba(0,0,0,.35)',
        'dark-hover':'0 24px 64px rgba(0,0,0,.5)',
      },
    },
  },
  plugins: [],
}
export default config
