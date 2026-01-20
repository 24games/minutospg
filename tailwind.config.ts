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
        "gradient-move": {
          "0%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
          "100%": {
            backgroundPosition: "0% 50%"
          },
        },
        "pulse-border": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.3",
            transform: "scale(1.05)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.6",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.1)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "bounce-elegant": {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(8px) scale(1.05)",
            opacity: "0.8",
          },
        },
        "scroll-infinite": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite",
        "pulse-elegant": "pulse-elegant 3s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease-in-out infinite",
        "gradient-move": "gradient-move 4s ease-in-out infinite",
        "pulse-border": "pulse-border 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "bounce-elegant": "bounce-elegant 2s ease-in-out infinite",
        "scroll-infinite": "scroll-infinite 30s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

