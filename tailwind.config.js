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
          DEFAULT: '#007ba4',
          '50': '#8be2ff',
          '100': '#71dcff',
          '200': '#3ecfff',
          '300': '#0bc2ff',
          '400': '#00a1d7',
          '500': '#007ba4',
          '600': '#005571',
          '700': '#002f3e',
          '800': '#00080b',
          '900': '#000000'
        },
        orange: colors.orange,
        lime: colors.lime,
        cyan: colors.cyan,
        blue: colors.lightBlue
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
