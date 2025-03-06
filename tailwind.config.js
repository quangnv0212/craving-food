/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
} 