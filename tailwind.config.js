const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['public/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#007ba4',
        orange: colors.orange,
        lime: colors.lime,
        lightBlue: colors.lightBlue
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
