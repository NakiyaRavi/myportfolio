/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDFBF7',
          dark: '#F0EBE1',
        },
        dusty: {
          DEFAULT: '#7B96B8',
          dark: '#5A768F',
        },
        dark: '#2D3748',
      }
    },
  },
  plugins: [],
}