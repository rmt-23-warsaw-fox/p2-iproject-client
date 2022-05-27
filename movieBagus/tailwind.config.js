module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // optional configuration for resulting class name and/or tailwind theme key
    require('tailwindcss-spinner')({ className: 'spinner', themeKey: 'spinner' }),
  ],
}