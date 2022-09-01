/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'g-dark': '#403D58',
        'g-white': '#F2EFEA',
        'g-dark-second': '#403D58',
        'g-purple': '#FC7753',
        'g-pink': '#ed0b70',
        'g-blue': '#66D7D1',
        'g-straw': '#DBD56E',
        'g-white-mono': "#DCD9D5",
        'g-header-text': "#403D58"
      }
    },
  },
  plugins: [],
}
