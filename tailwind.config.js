const { nextui } = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      pc: ["Perfect-Condensed", "sans"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}

