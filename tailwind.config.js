/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0B121E",
        "secondary-color": "#202B3C",
        "text-primary": "#686F7B",
      },
      fontFamily: {
        "poppins": ["Poppins"]
      }
    },
  },
  plugins: [],
}

