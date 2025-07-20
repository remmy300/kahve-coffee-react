/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: "#6F4E37",
        cream: "#F5F3EA",
        espresso: "#362C2A",
        latte: "#C7B299",
        orange: "#F97316",
      },
    },
  },
  plugins: [],
};
