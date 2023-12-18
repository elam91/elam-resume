/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        notWhite: "#F9F5E3",
        "myPurple-100": "#ce9eff",
        "myPurple-800": "#8F00FF",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      keyframes: {
        signSvg: {
          "0%": {
            "stroke-dashoffset": 14700,
          },
          "100%": {
            "stroke-dashoffset": 0,
          },
        },
      },
      animation: {
        signSvg: "signSvg 7s linear",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-neu")],
};
