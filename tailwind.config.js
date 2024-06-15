/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'PaleBlue': 'hsl(225, 100%, 94%)',
        'BrightBlue': 'hsl(245, 75%, 52%)',
        'VeryPaleBlue': 'hsl(225, 100%, 98%)',
        'DesaturatedBlue': 'hsl(224, 23%, 55%)',
        'DarkBlue': 'hsl(223, 47%, 23%)'
      },
      fontFamily:{
        'Display':'Display'
      },
      backgroundImage:{
        'ForMobile':"url('./assets/images/mobile.svg')",
        'ForDesktop':"url('./assets/images/desktop.svg')"
      }
    },
  },
  plugins: [],
}
