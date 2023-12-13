/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ffc107',
        'secondary': '#ff9800',
        'tertiary': '#e65100',
        'orange-1': '#f3a600',
      },
      keyframes: {
        gradientflow: {
          "0%": {
            'background-position': '-100% 0%'
          },
          "50%": {
            'background-position': '100% 0%'
          },
          "100%": {
            'background-position': '-100% 0%'
          }
        },
        borderglow: {
          '0%': {
            'background-position': '0 0'
          },
          '50%': {
            'background-position': '100% 0'
          },
          '100%': {
            'background-position': '0 0'
          }
        }
      },
      animation: {
        btngradientflow: 'gradientflow 3s ease infinite',
        borderglow: 'borderglow 5s linear infinite'
      },
      backgroundImage: {
        'hero-img': "url(Images/Orange.png)",
        'rainbow': 'repeating-linear-gradient(45deg, #ffc107, #E9F1F7, #ffc107, #E9F1F7, #ffc107, #E9F1F7, #ffc107, #E9F1F7)'
      }
    },
  },
  plugins: [],
}

