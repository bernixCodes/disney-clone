/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
