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
        warmRed: "#c7522a",
        warmBrown: "#e5c185",
        warmGreen: "#74a892",
        warmOrange: "#FFA500",
        warmBlue: "#008585",
        warmWhite: "#fbf2c4",
        lighterGrey: "#C4C4C4",
        mostlighterGrey: "#E3E3E3"
      },

      backgroundImage: {
        "hero": "url('/img/hero 3.jpg')",
      },

      spacing: {
        '900': '64rem',
      }
    },
  },
  plugins: [],
}

