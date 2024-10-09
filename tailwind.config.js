/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B1A21",
        secondary: "#1E1F26",
        third: "#27283A",
        fourth: "#8D8ACF",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
