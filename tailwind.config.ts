/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A8B9D', // Adjust as needed
        secondary: '#F7F4E9', // Adjust as needed
        accent: '#D9C6A1', // Adjust as needed
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
