/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #001a3e, #061b39, #0c1c34, #121d2e, #171e29)',
      },
    },
  },
  plugins: [],
}
