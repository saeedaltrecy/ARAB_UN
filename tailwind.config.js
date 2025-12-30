/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./Js/**/*.js",
    "./css/**/*.css"
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem', // 1408px
        '9xl': '96rem', // 1536px
        '10xl': '104rem', // 1664px
      },
      colors: {
        primary: {
          DEFAULT: '#009e91',
          dark: '#007a70',
          light: '#00b8a9',
          soft: 'rgba(0, 158, 145, 0.08)',
          mist: 'rgba(0, 158, 145, 0.05)',
          tint: 'rgba(0, 158, 145, 0.1)',
          muted: 'rgba(0, 158, 145, 0.6)'
        },
        ink: {
          DEFAULT: '#fd823b',
          dark: '#e66a1f',
          light: '#ff9a5c'
        }
      },
      fontFamily: {
        cairo: ['Cairo'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 158, 145, 0.3)',
        'glow-lg': '0 0 30px rgba(0, 158, 145, 0.4)',
      },
    },
  },
  plugins: [],
}


