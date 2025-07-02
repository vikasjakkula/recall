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
          50:  '#2d99f1ba',
          100: '#2d99f1ba',
          200: '#2d99f1ba',
          300: '#2d99f1ba',
          400: '#2d99f1ba',
          500: '#2d99f1ba',
          600: '#2d99f1ba',
          700: '#2d99f1ba',
          800: '#2d99f1ba',
          900: '#2d99f1ba',
        },
        // To use a different color, just replace #2d99f1ba above with your preferred hex code.
      },
    },
  },
  plugins: [],
}; 