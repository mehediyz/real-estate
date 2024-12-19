/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#1A1A1A",
          2: "#EB664E",
        },
        grey: {
          1: "#F9F9F9",
          2: "#F5F5F5",
          3: "#E9E9E9",
        },
        accent: {
          1: "#254EF0",
          2: "#1F4B43",
          3: "#E7C873",
        },

        white: "#FFF",
        black: "#000000",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
