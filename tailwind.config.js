/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        heroBg: "#090a0b",
      },
      height: {
        "80vh": "80vh",
      },
      maxWidth: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
