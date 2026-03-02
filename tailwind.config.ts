import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        caramel: "var(--caramel)",
        olive: "var(--olive)",
        rust: "var(--rust)",
        cream: "var(--cream)",
        caramelBlur: "var(--caramelBlur)"
      },
      boxShadow: {
        float: "0 24px 60px -24px rgba(34, 25, 16, 0.35)"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        rise: "rise 650ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
