/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "shadeOne": '#1d2127',
        "shadeTwo": '#43474E',
        "shadeThree": '#6D7178',
        "shadeFour": '#999EA6',
        "shadeFive": '#C9CED6',
        "textMain": '#e0dfdf',
        "accentMain": '#1f4dfe'
      }
    },
  },
  plugins: [],
}

