/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-blue":"#001e3c",
        "secondary-blue":"#071a2e",
        "light-darker":"#0679f5",
        "transparent-blue":"#5595d5",
      }
    },
  },
  plugins: [],
}

