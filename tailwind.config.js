/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/collections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "background": "#141416",
        "primary": "#3772FF",
        "success": "#27AE60"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
