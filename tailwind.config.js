/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#46AFB2',
        'gray':'rgba(136, 150, 171, 1)'
      },
      lineHeight: {
        'norm': '1.3',
      }
    }
    
  },
  plugins: [],
}