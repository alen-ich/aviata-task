/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-dark": "#202123",
        "bright-green": "#55BB06",
        "dark": "#707276",
        "light-blue": "#EAF0FA",
        "deep-blue": "#5763B3",
        "beige": "#F5F5F5",
        "grey": "#b9b9b9",
        "blue": "#7284E4"
      },
    },
  },
  plugins: [],
};
