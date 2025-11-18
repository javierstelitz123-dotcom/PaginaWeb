/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dimher: {
          azul: "#1E3A5F",
          naranja: "#FF6B35",
          crema: "#F5F0E6",
          gris: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};
