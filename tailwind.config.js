/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          blue: "#0EA5E9",
        },
        dark: {
          blue: "#0B1120",
        },
      },
    },
    fontFamily: {
      signature: ["Caprasimo"],
     
    },
  },
  plugins: [],
};

