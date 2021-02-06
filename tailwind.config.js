const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['public/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#007BA4',
          '50': '#8BE2FF',
          '100': '#71DCFF',
          '200': '#3ECFFF',
          '300': '#0BC2FF',
          '400': '#00A1D7',
          '500': '#007BA4',
          '600': '#005571',
          '700': '#002F3E',
          '800': '#00080B',
          '900': '#000000'
        },
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
