/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D669B',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#2D669B",
          "primary-focus": "#245580", // A slightly darker shade for hover states
          "primary-content": "#FFFFFF",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#2D669B",
          "primary-focus": "#245580",
          "primary-content": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
} 