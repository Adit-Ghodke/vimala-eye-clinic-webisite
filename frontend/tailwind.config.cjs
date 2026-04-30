/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // brand navy
        accent: "#c084fc",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },

  plugins: [],
};
