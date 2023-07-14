/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        bodybackground : 'var(--body-background)' , 
        bodycolor : 'var(--body-color)' ,
        linkcolor : 'var(--link-color)'
      }
    },
  },
  plugins: [],
}