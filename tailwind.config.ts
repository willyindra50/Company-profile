// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      fontSize: {
        // Display
        'display-3xl': ['3.75rem', { lineHeight: '4.5rem' }],
        'display-2xl': [
          '3rem',
          { lineHeight: '3.75rem', letterSpacing: '-0.02em' },
        ],
        'display-xl': [
          '2.5rem',
          { lineHeight: '3rem', letterSpacing: '-0.02em' },
        ],
        'display-lg': [
          '2.25rem',
          { lineHeight: '2.75rem', letterSpacing: '-0.02em' },
        ],
        'display-md': ['2rem', { lineHeight: '2.5rem' }],
        'display-sm': ['1.75rem', { lineHeight: '2.375rem' }],
        'display-xs': ['1.5rem', { lineHeight: '2.25rem' }],

        // Text
        'text-xl': ['1.25rem', { lineHeight: '2.125rem' }],
        'text-lg': ['1.125rem', { lineHeight: '2rem' }],
        'text-md': ['1rem', { lineHeight: '1.875rem' }],
        'text-sm': ['0.875rem', { lineHeight: '1.75rem' }],
        'text-xs': ['0.75rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  plugins: [],
};

export default config;
