import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "pulse-elegant": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.9" },
        },
        shimmer: {
          "0%": { 
            transform: "translateX(-100%) translateY(-100%) rotate(45deg)",
            opacity: "0"
          },
          "50%": {
            opacity: "1"
          },
          "100%": { 
            transform: "translateX(200%) translateY(200%) rotate(45deg)",
            opacity: "0"
          },
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
        },
      },
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite",
        "pulse-elegant": "pulse-elegant 3s ease-in-out infinite",
        shimmer: "shimmer 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

