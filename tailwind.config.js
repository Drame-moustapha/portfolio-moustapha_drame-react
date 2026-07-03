/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <-- important: on contrôle le dark via la classe 'dark'
  theme: {
    extend: {
      colors: {
        info: "#22d3ee", // existant
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(3, 7, 18, 0.12)',
        'soft-dark': '0 8px 24px rgba(2, 6, 23, 0.6)',
      },
    },
  },
  plugins: [],
}
