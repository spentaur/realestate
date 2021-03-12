const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Cinzel', ...defaultTheme.fontFamily.serif],
        slogan: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        'screen-3xl': '1792px',
        'screen-4xl': '2048px',
        'screen-5xl': '2304px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
}
