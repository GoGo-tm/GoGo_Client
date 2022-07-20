/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#009D68",
        sub: "#C2FFD3",
        banner: {
          1: "#FCFFFC",
          2: "#F1F8F6",
        },
        gray: {
          1: "#D9D9D9",
          2: "#B2B3B6",
          3: "#898A8C",
        },
      },
    },
  },
  plugins: [],
};
