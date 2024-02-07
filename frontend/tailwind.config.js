const defaultTheme = require('tailwindcss/defaultTheme') 
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
        quickSand:["Quicksand",'sans-serif']
       
     }, 
     backgroundImage: {
      'money': "url(/background.avif)",
    },
    },
  },
  plugins: [],
};
