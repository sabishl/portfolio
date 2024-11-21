/** @type {import('tailwindcss').Config} */
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'hero-font': 'Poppins',
      'laro-font' : 'Lora',
      'head' : 'Rubik',
    },

  },
  plugins: [
  
  ],
};
