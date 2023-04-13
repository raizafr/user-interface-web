/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#58D68D',
        'secondary' : '#C6FFBD',
        'font-color' : '#005825'
      }
    },
  },
  plugins: [],
}
