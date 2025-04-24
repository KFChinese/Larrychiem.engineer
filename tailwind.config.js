const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          0: '#ffffff', // keep if you need gray.0
        },
        green: {
          701: '#148a06',
          801: '#106205',
        },
        'blue-opaque': 'rgb(13 42 148 / 18%)'
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
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': { color: theme('colors.blue.700') },
              code: { color: theme('colors.blue.400') },
            },
            'h2,h3,h4': {
              scrollMarginTop: theme('spacing.32'),
            },
            thead: {
              borderBottomColor: theme('colors.gray.200'),
            },
            code: { color: theme('colors.pink.500') },
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': { color: theme('colors.blue.600') },
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              scrollMarginTop: theme('spacing.32'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: { li: { '&:before': { color: theme('colors.gray.500') } } },
            ul: { li: { '&:before': { backgroundColor: theme('colors.gray.500') } } },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: { color: theme('colors.gray.100') },
              borderBottomColor: theme('colors.gray.600'),
            },
            tbody: {
              tr: { borderBottomColor: theme('colors.gray.700') },
            },
          }
        }
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
