/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'navbcg': '#041B32',
      gray: {
        50:  '#f8f8f8',
        100: '#efefef',
        200:  '#cccccc',
        300:  '#b6b6b6',
        400:  '#d9d9d9',
        500:  '#7d7d7d',
        600:  '#686465',
        700:  '#4d4948',
        800:  '#323232',
        900:  '#1c1c1c'
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {backgroundOpacity: ['dark']},
  },
  plugins: [],
}