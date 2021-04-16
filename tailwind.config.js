const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        arial: ['Arial', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Cinzel', ...defaultTheme.fontFamily.serif],
        slogan: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        'screen-3xl': '1792px',
        'screen-4xl': '2048px',
        'screen-5xl': '2304px',
      },
      height: {
        'screen-4/5': '80vh',
        128: '36rem',
      },
      width: {
        128: '36rem',
      },
      backgroundImage: {
        spencer: "url('~/assets/img/me.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
