/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  // darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    colors: {
      primary: {
        800: '#083F49',
        700: '#0E6F81',
        // Main
        600: '#128EA4',
        500: '#17B8D4',
        400: '#4DD4EC',
        300: '#A1E8F5',
        200: '#D0F4FA',
        100: '#EFFBFD',
      },
      error: {
        500: '#961316',
        400: '#961316',
        300: '#E32227',
        200: '#ED7377',
        100: '#F9D2D3',
      },
      text: '#000000',
      white: '#FFFFFF',
      gray: {
        700: '#2C2C2C',
        600: '#575757',
        500: '#787878',
        400: '#A1A1A1',
        300: '#C5C5C5',
        200: '#DEDEDE',
        100: '#EEEEEE',
      },
      blue: {
        500: '#0F4C8A',
        400: '#146AC3',
        300: '#338DEA',
        200: '#7FB8F2',
        100: '#CFE4FA',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
