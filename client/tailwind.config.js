/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9ddfd',
          300: '#7cc2fb',
          400: '#36a3f7',
          500: '#0c87eb',
          600: '#006bc9',
          700: '#0055a3',
          800: '#034786',
          900: '#083c6f',
          950: '#05274b'
        },
        navy: {
          800: '#0f172a',
          900: '#0a0f1d',
          950: '#050811'
        },
        accent: {
          gold: '#f59e0b',
          emerald: '#10b981',
          coral: '#ef4444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
}
