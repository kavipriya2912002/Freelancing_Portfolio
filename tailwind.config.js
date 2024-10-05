/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cutive Mono', 'monospace'], // Set Cutive Mono as the default font for sans
      },
    },
  },
  plugins: [],
}
