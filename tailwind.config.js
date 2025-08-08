/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Match the user's new theme from the layout code
        emerald: {
          300: '#86efac',
          400: '#4ade80',
        },
        neutral: {
          950: '#0a0a0a',
        }
      }
    },
  },
  plugins: [],
}
