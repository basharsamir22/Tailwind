/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Overpass', 'sans-serif'],
        hero: ['Langar', 'san-serif'],
      },
      colors: {
        primary: '#303669',
      },
      spacing: {
        112: '28rem',
        128: '32rem',
      },
    },
  },
  plugins: [],
};
