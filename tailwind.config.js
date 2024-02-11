/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./*.{html,js,webc}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffc107",
        secondary: "#ff9800",
        tertiary: "#e65100",
        "orange-1": "#f3a600",
      },
      keyframes: {
        gradientflow: {
          "0%": {
            "background-position": "-100% 0%",
          },
          "50%": {
            "background-position": "100% 0%",
          },
          "100%": {
            "background-position": "-100% 0%",
          },
        },
        borderglow: {
          "0%": {
            "background-position": "0 0",
          },
          "50%": {
            "background-position": "100% 0",
          },
          "100%": {
            "background-position": "0 0",
          },
        },
      },
      animation: {
        btngradientflow: "gradientflow 3s ease infinite",
        borderglow: "borderglow 5s linear infinite",
      },
      backgroundImage: {
        "hero-img": "url(Images/Orange.png)",
        rainbow:
          "repeating-linear-gradient(45deg, #ffc107, #E9F1F7, #ffc107, #E9F1F7, #ffc107, #E9F1F7, #ffc107, #E9F1F7)",
        "wavy-before": `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  92' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 67L50 63C100 59 200 51 300 34C400 18 500 -7 600 1C700 9 800 51 900 67C1000 84 1100 76 1150 72L1200 67V92H1150C1100 92 1000 92 900 92C800 92 700 92 600 92C500 92 400 92 300 92C200 92 100 92 50 92H0V67Z' fill='%23fefce8'/></svg>")`,
      },
    },
  },
  plugins: [],
};
