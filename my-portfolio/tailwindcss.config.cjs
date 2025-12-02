/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'dark-0': '#0b0f1a',
        'navy-0': '#07102b',
        'purple-0': '#7c3aed',
        'accent-0': '#9b7bff',
      }
    },
  },
  plugins: [],
}
