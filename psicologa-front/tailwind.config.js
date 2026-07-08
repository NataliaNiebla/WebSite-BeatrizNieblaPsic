/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo-principal': '#F9F9F6',
        'rosa-pastel': '#FFD1DC',
        'verde-salvia': '#C1E1C1',
        'texto-carbon': '#1A1A1A',
        'linea-grid': '#E0E0E0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}