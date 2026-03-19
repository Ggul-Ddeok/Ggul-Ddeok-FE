/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          50: "#fffdf0",
          100: "#fff9c2",
          200: "#fff085",
          300: "#ffe243",
          400: "#ffd54f", // Main Yellow
          500: "#f5b000",
          600: "#cc8400",
          700: "#a35c00",
          800: "#824600",
          900: "#663600",
        },
        warm: {
          50: "#faf8f5",
          100: "#f0ebe1",
          200: "#e1d6c8",
          300: "#cbb8a5",
          400: "#b09680",
          500: "#967a64",
          600: "#7c5f4d",
          700: "#634a3e",
          800: "#523d34", // Main Text
          900: "#46352d",
        },
        cream: {
          50: "#fffdf7",
          100: "#fffaf0",
          200: "#fff5e1",
        },
      },
      fontFamily: {
        heading: ["Jua", "sans-serif"],
        body: ['"Noto Sans KR"', "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
