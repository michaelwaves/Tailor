/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#f9c6d1",
        "primary-light": "#f9d7d6", "primary-dark": "#ffb8c7",
        "white": "#fff7f6", "secondary": "#8eacd0", "secondary-light": "#b0c1db", "secondary-dark": "#3587f2",
      }
    },
  },
  plugins: [],
}
