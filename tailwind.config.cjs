/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans",
        lexend: "'LexendDeca', serif",
      },
      colors: {
        primary: {
          950: 'var(--clr-primary-950)',
          700: 'var(--clr-primary-700)',
          400: 'var(--clr-primary-400)',
        },
        neutral: {
          100: 'var(--clr-neutral-100)', 
          200: 'var(--clr-neutral-200)',
          300: 'var(--clr-neutral-300)',
        }
      },
      fontSize: {
        'fs-base': '15px',
      }
    },
  },
  plugins: [],
};
