const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors'); // Make sure this line exists

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css', //if you use Tailwind classes directly in CSS files
    './styles/**/*.css',
  ],
  darkMode: 'class',
  theme: {
      theme: {
    extend: {
      colors: {
        gray: colors.gray, // ✅ Keep full gray scale
        green: {
          701: '#148a06',
          801: '#106205',
        },
        'blue-opaque': 'rgb(13 42 148 / 18%)'
      },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      animation: {
        text: 'text 7s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      typography: (theme) => ({
        // ... your typography settings ...
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};