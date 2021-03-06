const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors
      },
      borderRadius: {
        xl: "12px",
        "2xl": "24px",
        "3xl": "36px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
