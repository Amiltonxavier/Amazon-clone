/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-secondary': '#C9CCCC',
        'dark-secondary': '#141920',
        'dark-alternative': '#232F3F',
        'yellow-secondary': '#F4BF76',
        'primary-black': '#18191A',

      },
      backgroundImage: {
        pattern: 'url(./bg.png)',
        secondaryHero: 'url(./secondary-bg.png)',
        'bg-con': 'url(./bg-con.png)'
      },
    },
  },
  plugins: [],
}