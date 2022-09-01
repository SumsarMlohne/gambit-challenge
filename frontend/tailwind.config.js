/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'g-green': '#4cbfa6',
        'g-white': '#f6ebf4',
        'g-white-second': '#F3EBF6',
        'g-purple': '#482673',
        'g-pink': '#ed0b70',
        'g-blue': '#023b59',
        'g-light-green': '#EBF6ED',
        'g-white-mono': "#E6C8E1"
      }
    },
  },
  plugins: [],
}
