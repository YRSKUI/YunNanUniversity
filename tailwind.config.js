/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'icon1': "url('./src/images/r4-icon1.png')",
      'icon1-on': "url('./src/images/r4-icon1-on.png')",

    },
    fontFamily: {
      sans:['微软雅黑','sans-serif'],
    },
    extend: {
    },
  },

  plugins: [],

}

