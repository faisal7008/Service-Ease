/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = 
// withMT(
  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'false',
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    require('flowbite/plugin'),
  ],
}
// )
