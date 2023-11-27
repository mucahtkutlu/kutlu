/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        darkBlue: "#06113C",
        Orange: "#FF8C32",
        darkGrey: "#DDDDDD",
        brownishGreen: "#595519",
        Grey: "#EEEEEE"
      },

      backgroundImage: {
        "hero": "url('/img/hero.jpg')",
      }
    },
  },
  plugins: [],
}

