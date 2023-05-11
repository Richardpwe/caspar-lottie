/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{html,js}',
      './public/**/*.{html,js}',
      './*/*html',
      './src//*'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

