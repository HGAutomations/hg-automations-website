/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1925AA',
          'blue-light': '#2333CC',
          'blue-dark': '#111880',
          neutral: '#E8E6E0',
          'neutral-dark': '#D4D0C8',
        },
        surface: {
          base: '#0C0E1A',
          elevated: '#111527',
          card: '#161A30',
          border: '#1E2340',
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 7vw, 5.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'heading-1': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.13', letterSpacing: '-0.025em' }],
        'heading-2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-3': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        'section': 'clamp(4rem, 8vw, 8rem)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)',
        'brand': '0 0 28px rgba(25, 37, 170, 0.45)',
        'brand-lg': '0 0 48px rgba(25, 37, 170, 0.3)',
      },
    },
  },
  plugins: [],
}
