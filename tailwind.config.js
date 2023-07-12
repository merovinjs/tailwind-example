/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prop: ["Dancing Script", "cursive"],
      },
      colors: {
        "regal-blue": "#243c5a",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
