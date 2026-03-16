import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1b2b",
        brand: "#1f6feb",
        mint: "#5ec2b7",
        sand: "#f5f1ea",
        mist: "#e7eef7",
        dusk: "#243b53",
        warning: "#f4b740",
        danger: "#e05d5d",
        success: "#2fbf71"
      },
      boxShadow: {
        soft: "0 18px 40px -28px rgba(11, 27, 43, 0.5)",
        card: "0 20px 50px -35px rgba(12, 28, 44, 0.6)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.35)"
      },
      backgroundImage: {
        "portal-glow": "radial-gradient(circle at top, rgba(94,194,183,0.22), transparent 60%)",
        "grid": "linear-gradient(90deg, rgba(11,27,43,0.06) 1px, transparent 1px), linear-gradient(rgba(11,27,43,0.06) 1px, transparent 1px)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out"
      }
    },
    fontFamily: {
      sans: ["var(--font-sora)", "ui-sans-serif"],
      display: ["var(--font-fraunces)", "serif"]
    }
  },
  plugins: []
};

export default config;
