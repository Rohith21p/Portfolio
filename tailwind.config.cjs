/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        canvas: '#040611',
        surface: '#0b1023',
        primary: '#6393ff',
        accent: '#835dff'
      },
      boxShadow: {
        neon: '0 0 30px rgba(99, 147, 255, 0.35), 0 0 80px rgba(131, 93, 255, 0.2)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 0 0 rgba(111, 148, 255, 0.0), 0 0 40px rgba(117, 86, 255, 0.24)'
          },
          '50%': {
            boxShadow:
              '0 0 0 6px rgba(111, 148, 255, 0.12), 0 0 70px rgba(117, 86, 255, 0.4)'
          }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
