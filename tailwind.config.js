/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: {
          green: "#5FED2F",
        },
      },
    },
  },
  plugins: [],
};
