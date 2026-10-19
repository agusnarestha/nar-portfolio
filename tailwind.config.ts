import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        neo: "6px 6px 0 #000000",
        "neo-sm": "4px 4px 0 #000000",
        "neo-lg": "8px 8px 0 #000000",
        "neo-hover": "2px 2px 0 #000000",
        "neo-active": "0px 0px 0 #000000",
      },
      borderWidth: {
        neo: "3px",
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "drift": "drift 15s ease-in-out infinite",
      },
      colors: {
        // Neo-brutalism accent palette - bold & vibrant
        "neo-red": "#ef4444",
        "neo-orange": "#f97316",
        "neo-yellow": "#fbbf24",
        "neo-lime": "#84cc16",
        "neo-green": "#22c55e",
        "neo-teal": "#14b8a6",
        "neo-cyan": "#06b6d4",
        "neo-blue": "#3b82f6",
        "neo-indigo": "#6366f1",
        "neo-violet": "#8b5cf6",
        "neo-purple": "#a855f7",
        "neo-pink": "#ec4899",
        "neo-rose": "#f43f5e",
        // Surfaces
        "surface": {
          DEFAULT: "#dcebfe",
          card: "#ffffff",
          warm: "#fef3c7",
          accent: "#e0f2fe",
        },
        // Text
        "ink": {
          DEFAULT: "#000000",
          secondary: "#1f2937",
          muted: "#4b5563",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};

export default config;
