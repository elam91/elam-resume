/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        notWhite: "#F9F5E3",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-neu")],
};
