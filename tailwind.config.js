/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "375px",
      lg: "976",
      xl: "1440px"
    },
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
        'color1': 'rgba(23,30,40,1)',
        'color2': 'rgba(30,37,47,1)',
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}

