/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        secondary: "#6C757D",
      },
      fontFamily: {
        "poppins-bold": ["Poppins"],
        Agbalumo: ["Agbalumo"],
      },
    },
  },
  plugins: [],
};
