/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#609DD4',
      secondary: '#EB91E8',
      terciary: '#F4B824',
      gradient: '#FBE3A7'
    },
    extend: {
      fontFamily: {
        sans: 'CottorWay'
      },
      fontWeight: {
        light: 300,
        medium: 500,
        bold: 700
      }
    },
  },
  plugins: [],
}