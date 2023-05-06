/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'orange': 'hsl(25, 97%, 53%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-grey': 'hsl(217, 12%, 63%)',
      'medium-grey': 'hsl(216, 12%, 54%)',
      'grey': 'hsl(213, 41%, 18%)',
      'dark-blue': 'hsl(213, 19%, 18%)',
      'very-dark-blue': 'hsl(216, 12%, 8%)',
      'black': 'hsl(0,0%,0%)'
    },
    fontFamily: {
      Overpass: ['Overpass', 'cursive']
    },
    screens: {

      'md': '700px',
      'lg': '1000px',
      'sm': '370px',
    }
  },
  plugins: [],
}

