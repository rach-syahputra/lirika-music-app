/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': '#919191',
      'gray-dark': '#191920',
      'gray-dark-hover': '#24242d',
      'dark': '#0f0f0f',
      'green-light': '#1db954',
      'white': "#f8f9fa",
      'white-hover': "#e9ecef"
    },
    extend: {},
  },
  plugins: [],
}

