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
        lightGrey: "#97A4A6",
        lightGreen: "#728C7B",
        brightGreen: "#707317",
        brownishGreen: "#595519",
        lightBrown: "#403219"
      }
    },
  },
  plugins: [],
}

