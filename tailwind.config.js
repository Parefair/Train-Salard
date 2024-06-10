/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        'blue': '#232946',
        'purple': '#B8C1EC',
        'pink': '#EEBBC3',
        'white': '#FFFFFE',
      },
    },
    fontFamily: {
      'ibm-plex-sans-thai-looped': ['"IBM Plex Sans Thai Looped"', 'sans-serif']
    },
  },
  plugins: [],

}