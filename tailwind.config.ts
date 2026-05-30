import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#0F2B0F',
        forest: '#1A4D1A',
        leaf: '#2D7A2D',
        sage: '#7BA87B',
        'light-sage': '#D4E5D4',
        'mist-green': '#F2F7F2',
        'harvest-gold': '#A67C00',
        'golden-wheat': '#D4A843',
        'pale-straw': '#F5EDD6',
        'soil-black': '#1A1814',
        clay: '#4A4540',
        stone: '#78726A',
        silt: '#D1CCC5',
        sand: '#F0EDE8',
        'warm-white': '#FAFAF8',
        'error-red': '#C1292E',
        'success-green': '#2D7A2D',
        'info-blue': '#2B5F8A',
        'warning-amber': '#D4941F',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['64px', { lineHeight: '1.1', letterSpacing: '-1px', fontWeight: '700' }],
        h1: ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        small: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.5px' }],
        overline: ['11px', { lineHeight: '1.5', fontWeight: '700', letterSpacing: '3px' }],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(26, 24, 20, 0.06), 0 1px 2px rgba(26, 24, 20, 0.04)',
        'card-hover': '0 20px 40px rgba(26, 24, 20, 0.1), 0 4px 8px rgba(26, 24, 20, 0.06)',
        sm: '0 1px 2px rgba(26, 24, 20, 0.05)',
        md: '0 4px 6px rgba(26, 24, 20, 0.07)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
