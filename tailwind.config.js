module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
}