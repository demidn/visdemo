const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: 'rgb(var(--color-black) / <alpha-value>)',
        700: 'rgb(var(--color-black-700) / <alpha-value>)',
        800: 'rgb(var(--color-black-800) / <alpha-value>)',
        900: 'rgb(var(--color-black-900) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },

      gray: {
        100: 'rgb(var(--color-gray-100) / <alpha-value>)',
        200: 'rgb(var(--color-gray-200) / <alpha-value>)',
        400: 'rgb(var(--color-gray-400) / <alpha-value>)',
        500: 'rgb(var(--color-gray-500) / <alpha-value>)',
        800: 'rgb(var(--color-gray-800) / <alpha-value>)',
      },

      silver: {
        500: 'rgb(var(--color-silver-500) / <alpha-value>)',
        400: 'rgb(var(--color-silver-400) / <alpha-value>)',
        200: 'rgb(var(--color-silver-200) / <alpha-value>)',
      },

      cyan: {
        300: 'rgb(var(--color-cyan-300) / <alpha-value>)',
        200: 'rgb(var(--color-cyan-200) / <alpha-value>)',
        100: 'rgb(var(--color-cyan-100) / <alpha-value>)',
      },

      violet: {
        500: 'rgb(var(--color-violet-500) / <alpha-value>)',
        800: 'rgb(var(--color-violet-800) / <alpha-value>)',
      },

      white: 'rgb(var(--color-white) / <alpha-value>)',
      transparent: 'transparent',
      inherit: 'inherit',
      current: 'currentColor',
    },
    extend: {
      borderRadius: {
        DEFAULT: '4px',
      },
    },
  },
  plugins: [],
};
