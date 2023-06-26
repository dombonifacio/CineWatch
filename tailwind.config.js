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
          500: "#3E4964",
          700: "#1E293B"
        },
        detail: "#B0B9CE"

       
      },
    },
    fontFamily: {
      signature: ["Caprasimo"],
     
    },
  },
  plugins: [],
};

