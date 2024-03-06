/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "custom-purple": {
          100: "#7A1CFB",
          200: "#7A5CFA",
        },
        "custom-white": {
          100: "#666666",
          200: "#CCCCCC",
          300: "#333333",
        },
        "custom-red": {
          100: "#EB5757",
        },
        "custom-bg": {
          100: "#e4defe",
        },
      },
      fontFamily: {
        noto: ["Noto Sans"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
