/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        nav: "80px",
      },
      margin: {
        nav: "80px",
      },
    },
  },
  plugins: [],
};
