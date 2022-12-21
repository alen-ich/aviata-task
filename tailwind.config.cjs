/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-dark": "#202123",
        "bright-green": "#55bb06",
        "dark": "#707276",
        "light-blue": "#eaf0fa",
        "deep-blue": "#5763b3",
        "beige": "#f5f5f5",
        "grey": "#b9b9b9",
        "blue": "#7284e4",
      },
    },
  },
  plugins: [],
};
