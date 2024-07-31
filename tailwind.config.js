/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./static/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffc107",
          100: "#342700",
          200: "#684e00",
          300: "#9c7500",
          400: "#d09c00",
          500: "#ffc107",
          600: "#ffcd37",
          700: "#ffda69",
          800: "#ffe69b",
          900: "#fff3cd",
        },
        secondary: {
          DEFAULT: "#ff9800",
          100: "#331f00",
          200: "#663d00",
          300: "#995c00",
          400: "#cc7a00",
          500: "#ff9800",
          600: "#ffad33",
          700: "#ffc266",
          800: "#ffd699",
          900: "#ffebcc",
        },
        tertiary: {
          DEFAULT: "#e65100",
          100: "#2e1000",
          200: "#5c2000",
          300: "#8a3000",
          400: "#b84000",
          500: "#e65100",
          600: "#ff6d1f",
          700: "#ff9257",
          800: "#ffb68f",
          900: "#ffdbc7",
        },
        "orange-1": {
          DEFAULT: "#f3a600",
          100: "#312100",
          200: "#624300",
          300: "#936400",
          400: "#c48600",
          500: "#f3a600",
          600: "#ffbc2b",
          700: "#ffcd60",
          800: "#ffdd95",
          900: "#ffeeca",
        },
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
        "hero-img": "url(/tailwind-infinix-website/static/media/Orange.png)",
        rainbow:
          "repeating-linear-gradient(45deg, #ffc107, #E9F1F7, #ffc107, #E9F1F7, #ffc107, #E9F1F7, #ffc107, #E9F1F7)",
        "wavy-before": `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  92' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 67L50 63C100 59 200 51 300 34C400 18 500 -7 600 1C700 9 800 51 900 67C1000 84 1100 76 1150 72L1200 67V92H1150C1100 92 1000 92 900 92C800 92 700 92 600 92C500 92 400 92 300 92C200 92 100 92 50 92H0V67Z' fill='%23fefce8'/></svg>")`,
      },
    },
  },
  plugins: [],
};
