/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
      colors: {
        // Dark-first surface scale
        base: {
          950: "#08080c",
          900: "#0f0f14",
          800: "#16161d",
          700: "#1e1e28",
          600: "#272734",
        },
        // Accent — electric indigo
        accent: {
          DEFAULT: "#7c6fec",
          light: "#a89cf0",
          glow: "rgba(124,111,236,0.25)",
        },
        // Secondary accent — warm amber
        warm: {
          DEFAULT: "#f5a623",
          light: "#fbbf65",
          glow: "rgba(245,166,35,0.2)",
        },
        // Text scale
        ink: {
          DEFAULT: "#e8e8f0",
          muted: "#8888aa",
          faint: "#44445a",
        },
      },
      backgroundImage: {
        "glass-light":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,111,236,0.3) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        "accent-gradient": "linear-gradient(135deg, #7c6fec 0%, #a89cf0 100%)",
      },
      boxShadow: {
        glass: "0 0 0 1px rgba(255,255,255,0.08), 0 4px 32px rgba(0,0,0,0.4)",
        "glass-hover":
          "0 0 0 1px rgba(124,111,236,0.4), 0 8px 48px rgba(0,0,0,0.5)",
        glow: "0 0 40px rgba(124,111,236,0.25)",
        "glow-warm": "0 0 40px rgba(245,166,35,0.2)",
        card: "0 1px 1px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)",
        "card-hover": "0 1px 1px rgba(0,0,0,0.6), 0 16px 48px rgba(0,0,0,0.5)",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "30%": { transform: "translate(3%, 2%)" },
          "50%": { transform: "translate(-1%, 4%)" },
          "70%": { transform: "translate(4%, -1%)" },
          "90%": { transform: "translate(-3%, 1%)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
        grain: "grain 8s steps(10) infinite",
      },
    },
  },
  plugins: [],
};
