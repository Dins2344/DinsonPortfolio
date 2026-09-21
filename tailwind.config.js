/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        glass: {
          fill: 'rgba(255,255,255,0.08)',
          stroke: 'rgba(255,255,255,0.18)',
          highlight: 'rgba(255,255,255,0.40)',
        },
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.webp")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(8vw,-6vh,0) scale(1.1)' },
          '66%': { transform: 'translate3d(-6vw,8vh,0) scale(0.95)' },
        },
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        drift: 'drift 28s ease-in-out infinite',
        'drift-slow': 'drift 40s ease-in-out infinite reverse',
      },
      fontFamily: {
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
