/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7BC74D",
        secondary: "#222831",
        sedondaryLight: "#393E46",
        light: "#EEEEEE",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

