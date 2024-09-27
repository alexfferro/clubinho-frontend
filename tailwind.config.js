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
      gradient: '#FBE3A7',
      green:{
        400: '#4ade80',
        600: '#16a34a'
      },
      slate: {
        400: '#94a3b8',
        900: '#0f172a'
      },
      red: {
        600: '#dc2626',
        400: '#f87171'
      }
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