/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        Syne: ["Syne", "sans-serif"],
        Heebo: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
