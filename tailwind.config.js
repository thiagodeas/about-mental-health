/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPurple: '#4E27BE',
        lightRed: '#EF5D5E',
        lightGray: '#e9e9e9'
      },
      fontFamily: {
        amatic: ["'Amatic SC'", "cursive"],
        ms: ["Lucida Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}