/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors : {
      'primary' : '#17171F',
      'theme' : '#3F3FFF'
      },
      fontFamily : {
        'poppins' : ["'Poppins" , 'sans-serif']
      }
    },
  },
  plugins: [],
}

