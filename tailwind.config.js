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
        400: '#34d399',
        500: '#10b981'
      },
      slate: {
        400: '#94a3b8',
        900: '#0f172a'
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