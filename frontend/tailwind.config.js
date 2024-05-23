const { Container } = require("postcss");

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: "10rem",
    }
  },
  plugins: [],
};