/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],

  darkMode: "class",

  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        logoColor: "#257369",
        textColor: "#ffffff",
        bgColor: "#000000",
        darkBgColor: "#030712",
      },
    },
  },

  plugins: [],
};
