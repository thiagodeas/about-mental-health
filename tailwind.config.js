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
        lightGray: '#e9e9e9',
        lightGray2:'#',
        lightBlck: '#020C24',
      },
      fontFamily: {
        amatic: ["'Amatic SC'", "cursive"],
        rbt: ["Roboto Slab", "sans-serif"],
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        floating: 'floating 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
