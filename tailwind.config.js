module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turquoise': {
          DEFAULT: '#40E0D0',
          dark: '#20B2AA',
          light: '#7FFFD4',
        }
      },
      fontFamily: {
        'sans': ['Assistant', 'system-ui'],
        'display': ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}