import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sunrise: {
          50:  "#FFFBF0",
          100: "#FFF5D6",
          200: "#FFE9A8",
          300: "#FFD96B",
          400: "#FFC93A",
          500: "#F5B800",
          600: "#D49A00",
          700: "#A87A00",
          800: "#7A5A00",
          900: "#4A3700",
        },
        sky: {
          50:  "#F0F8FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7BB8D4",
          400: "#5BA0C0",
          500: "#3B88A8",
          600: "#1B6888",
          700: "#0B4A66",
          800: "#052E44",
          900: "#01162A",
        },
        nature: {
          50:  "#F5F8EE",
          100: "#E8F0D4",
          200: "#D4E09B",
          300: "#B8CC6A",
          400: "#96B040",
          500: "#76902A",
          600: "#587018",
          700: "#3E500E",
          800: "#263208",
          900: "#121803",
        },
        warm: {
          white: "#FDFCF8",
          cream: "#F8F4EC",
          sand:  "#EDE8DC",
          dark:  "#2C2A26",
          muted: "#6B6560",
        },
      },
      fontFamily: {
        serif:  ["Playfair Display", "Georgia", "serif"],
        sans:   ["Inter", "system-ui", "sans-serif"],
        display:["Cormorant Garamond", "Georgia", "serif"],
      },
      animation: {
        "sunrise-glow": "sunriseGlow 4s ease-in-out infinite alternate",
        "float":        "float 6s ease-in-out infinite",
        "slow-spin":    "spin 20s linear infinite",
        "pulse-soft":   "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        sunriseGlow: {
          "0%":   { opacity: "0.6", transform: "scale(0.95)" },
          "100%": { opacity: "1",   transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.8" },
          "50%":      { opacity: "1" },
        },
      },
      backgroundImage: {
        "sunrise-gradient": "linear-gradient(135deg, #FFF5D6 0%, #FFE9A8 25%, #BAE6FD 75%, #E0F2FE 100%)",
        "golden-hour":      "linear-gradient(180deg, #FFD96B 0%, #FFE9A8 40%, #E0F2FE 100%)",
        "soft-sky":         "linear-gradient(180deg, #E0F2FE 0%, #FDFCF8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
