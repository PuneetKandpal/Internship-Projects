/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        lime1: "#57fec7",
        lime2: "#27ecab",
        black: "#19310B",
        black1: "#161616",
      },
    },
  },
  plugins: [],
};
