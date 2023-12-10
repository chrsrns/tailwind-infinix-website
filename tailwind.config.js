/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        gradientflow: {
          "0%": {
            'background-position': '0% 91%'
          },
          "50%": {
            'background-position': '100% 0%'
          },
          "100%": {
            'background-position': '0% 91%'
          }
        }
      },
      animation: {
        btngradientflow: 'gradientflow 6s ease infinite'
      },
      backgroundImage: {
        'hero-img': "url(Images/Orange.png)"
      }
    },
    colors: {
      'primary': '#ffc107',
      'secondary': '#ff9800',
      'tertiary': '#3B3561',
      'orange-1': '#f3a600',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#FF4365',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    }
  },
  plugins: [],
}

