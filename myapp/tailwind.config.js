/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
        colors: {
          primary: '#e6eed6',
          secondary: '#dde2c6',
          grey: '#404041',
          liteGrey: '#bbc5aa',
          orange: '#A72608',
          black: '#090C02'
        }
    },
  },
  darkMode: "class",
  plugins: [nextui()],

};