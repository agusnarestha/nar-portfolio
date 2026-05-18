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
        display: ["Outfit", "system-ui", "sans-serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom: "5px 7px 0px 1px rgb(20, 20, 20)",
        customhover: "2px 3px 0px 1px rgb(20, 20, 20)",
        neo: "5px 5px 0 #1a1a1a",
        "neo-sm": "3px 3px 0 #1a1a1a",
        "neo-hover": "2px 2px 0 #1a1a1a",
        "neo-active": "1px 1px 0 #1a1a1a",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "drift": "drift 12s ease-in-out infinite",
      },
      colors: {
        "neo-cyan": "#3cc4ce",
        "neo-yellow": "#e6b448",
        "neo-pink": "#df548e",
        "neo-green": "#a8e6a3",
        "neo-blue": "#6c9bef",
        "ink": {
          DEFAULT: "#1a1a1a",
          secondary: "#525252",
          muted: "#737373",
          faint: "#a3a3a3",
        },
        "surface": {
          DEFAULT: "#faf9f6",
          card: "#ffffff",
          warm: "#fffbe6",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};

export default config;
