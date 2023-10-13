/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "backgroundOne": '#1d2127',
        "backgroundTwo": '#43474E',
        "backgroundThree": '#6D7178',
        "backgroundFour": '#999EA6',
        "backgroundFive": '#C9CED6',
        "textMain": '#e0dfdf',
        "accentMain": '#1f4dfe'
      }
    },
  },
  plugins: [],
}

