module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray100: '#F2F2F2',
        gray200: '#D9D9D9',
        blue: '#4EA8DE',
        darkBlue: '#1E6F9F',
        purple: '#8284FA',
        background: '#454545'
      }
    },
  },
  plugins: [],
}
