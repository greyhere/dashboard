/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warning: '#e75a4f',
        success: '#4186f3',
        green: '#afebd6',
        brown: '#e3c6ab',
        light: {
          primary: '#efeef1',
          secondary: '#292d2e',
          hover: '#f5f5f5',
          text: {
            primary: '#292d2e',
            secondary: '#fcfbfe',
          },
        },
        dark: {
          primary: '#181b1c',
          secondary: '#f7f9f8',
          hover: '#26292d',
          text: {
            primary: '#f7f9f8',
            secondary: '#181b1c',
          },
        },
      },
    },
  },
  plugins: [],
};
