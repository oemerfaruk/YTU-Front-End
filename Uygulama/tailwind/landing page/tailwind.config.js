/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        'color1' : "#f8f8ff",
        'color2' : '#808080',
        'dark':{
          100: '#222',
          200: '#272727',
          300: '#333'
        }
      }
    },
  },
  plugins: [],
}

