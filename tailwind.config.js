/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        info: "#22d3ee", // cyan accent, utilisé aussi par Hero.jsx (Bootstrap "info")
      },
    },
  },
  plugins: [],
}
