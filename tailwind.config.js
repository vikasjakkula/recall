// tailwind.config.js
// This config overrides the default blue palette with a custom color for the entire app.
// You can change the hex code below to update the primary blue color everywhere.

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50:  '#0000FF',
          100: '#0000FF',
          200: '#0000FF',
          300: '#0000FF',
          400: '#0000FF',
          500: '#0000FF',
          600: '#0000FF',
          700: '#0000FF',
          800: '#0000FF',
          900: '#0000FF',
        },
        // To use a different color, just replace #2d99f1ba above with your preferred hex code.
      },
    },
  },
  plugins: [],
}; 