module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          'fade-in-down': {
              '0%': {
                  color: 'rgba(255, 255, 0, 0.75)',
                  opacity: '0',
                  transform: 'translateY(-70px)',
              },
              '100%': { 
                  color: 'initial',
                  opacity: '1',
                  transform: 'translateY(0)',
              },
          },
          'fade-in-left': {
              '0%': {
                color: 'rgba(255, 255, 0, 0.75)',
                opacity: '0',
              },
              '5%': {
                color: 'rgba(255, 255, 0, 0.75)',
                opacity: '0',
                transform: 'translateX(-70px)',
              },
              '100%': { 
                color: 'initial',
                opacity: '1',
                transform: 'translateX(0)',
              },
          },
          'fade-in-right': {
              '0%': {
                color: 'rgba(255, 255, 0, 0.75)',
                opacity: '0',
              },
              '5%': {
                color: 'rgba(255, 255, 0, 0.75)',
                opacity: '0',
                transform: 'translateX(70px)',
              },
              '100%': { 
                color: 'initial',
                opacity: '1',
                transform: 'translateX(0)',
              },
          },
          'fade-in-out': {
            '0%': {
              visibility: 'hidden',
              opacity: '0'
            },
            '1%': {
              visibility: 'initial',
              opacity: '0.1'
            },
            '100%': {
              visibility: 'initial',
              opacity: '1'
            }
          },
          'wiggle': {
            '0%, 100%': {
                transform: 'rotate(-1deg)'
            },
            '50%': {
                transform: 'rotate(1deg)'
            }
          },
      },
      animation: {
          'fade-in-down': 'fade-in-down 2.7s ease-out',
          'fade-in-left': 'fade-in-left 2.7s ease-out',
          'fade-in-right': 'fade-in-right 2.7s ease-out',
          'fade-in-on': 'fade-in-on 2.7s ease-out',
          'wiggle' : 'wiggle 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
