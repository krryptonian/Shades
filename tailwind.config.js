const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontWeight: {
      thin: 100,
      'extra-light': 200,
      light: 300,
      regular: 400,
      medium: 500,
      'semi-bold': 600,
      bold: 700,
      'extra-bold': 800,
      black: 900,
    },
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
