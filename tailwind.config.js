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
        'gray':'rgba(136, 150, 171, 1)',
        'dark':'rgba(29, 29, 38, 0.8);'
      },
      lineHeight: {
        'norm': '1.3',
      }
    }
    
  },
  plugins: [],
}