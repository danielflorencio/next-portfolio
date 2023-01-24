/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {colors:{
      htmlIcon: '#fd982c',
      cssIcon: '#2196f3',
      jsIcon: '#f7df1e',
      tsIcon: "#2f74c0",
      reactIcon: "#5dd2f1",
      tailwindIcon: "#07b0ce",
      bsIcon: '#5b397b',
      sassIcon: '#cc6699',
      reduxIcon: "#7147b5",
      white: "#fff",
      black: "#000"
    }},
  },
  plugins: [],
}
