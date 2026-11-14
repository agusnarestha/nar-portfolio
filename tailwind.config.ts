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
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "Comic Sans MS", "cursive"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        paper: "3px 3px 0 #15161A",
        "paper-sm": "2px 2px 0 #15161A",
        "paper-lg": "5px 5px 0 #15161A",
        "paper-hover": "1px 1px 0 #15161A",
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
        // Collage palette
        paper: "#EDF0F4",
        sheet: "#FFFFFF",
        "sheet-2": "#F6F8FB",
        rule: "#C4CAD5",
        cobalt: {
          DEFAULT: "#2446F2",
          dark: "#1B34C4",
        },
        butter: "#FFF7B8",
        highlight: "#FFEE3B",
        mint: {
          DEFAULT: "#2FD49A",
          light: "#CDF6E6",
          dark: "#077A52",
        },
        pink: {
          DEFAULT: "#FF8DC7",
          light: "#FFD9EC",
        },
        sky: {
          DEFAULT: "#D3E2FF",
          ink: "#1D2E62",
        },
        tomato: {
          DEFAULT: "#FF5130",
          dark: "#C2341A",
          light: "#FFE1DA",
        },
        amber: "#D9B800",
        // Neo-brutalism accent palette - kept until the Task 10 cleanup
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
          DEFAULT: "#EDF0F4",
          card: "#FFFFFF",
          warm: "#FFF7B8",
          accent: "#D3E2FF",
        },
        // Text
        "ink": {
          DEFAULT: "#15161A",
          secondary: "#444A57",
          muted: "#69707F",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};

export default config;
