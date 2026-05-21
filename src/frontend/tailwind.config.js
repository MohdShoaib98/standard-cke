import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#f97316",
          dark: "#ea6d0c",
          light: "#fb923c",
        },
        dark: {
          DEFAULT: "#0d0d0d",
          surface: "#1a1a1a",
          card: "#2d2d2d",
        },
        steel: "#8a8a8a",
        silver: "#c0c0c0",
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        subtle: "0 2px 8px 0 rgba(0,0,0,0.12)",
        glow: "0 0 20px rgba(249,115,22,0.25)",
        "glow-sm": "0 0 10px rgba(249,115,22,0.2)",
        'elevated': "0 4px 12px rgba(0, 0, 0, 0.08)",
        'subtle': "0 2px 4px rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "golden-sweep": {"0%":{"opacity":"0","transform":"translateX(-100%)"},"30%":{"opacity":"1"},"100%":{"opacity":"0","transform":"translateX(300%)"}},
        "logo-zoom-fade": {"0%":{"opacity":"0","transform":"scale(0.6)"},"100%":{"opacity":"1","transform":"scale(1)"}},
        "metallic-shine": {"0%":{"transform":"translateX(-200%) translateY(-200%) rotate(45deg)","opacity":"0"},"50%":{"opacity":"0.4"},"100%":{"transform":"translateX(200%) translateY(200%) rotate(45deg)","opacity":"0"}},
        "slide-in-standard": {"0%":{"opacity":"0","transform":"translateX(-40px)"},"100%":{"opacity":"1","transform":"translateX(0)"}},
        "slide-in-subtitle": {"0%":{"opacity":"0","transform":"translateX(40px)"},"100%":{"opacity":"1","transform":"translateX(0)"}},
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s cubic-bezier(0.4,0,0.2,1) forwards",
        "fade-in": "fade-in 0.5s ease forwards",
        "slide-in-left": "slide-in-left 0.5s cubic-bezier(0.4,0,0.2,1) forwards",
        "intro-logo": "logo-zoom-fade 1.2s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "intro-shine": "metallic-shine 3s ease-in-out infinite",
        "intro-golden-sweep": "golden-sweep 1.5s ease-out 0.4s forwards",
        "intro-text-left": "slide-in-standard 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.8s forwards",
        "intro-text-right": "slide-in-subtitle 0.8s cubic-bezier(0.34,1.56,0.64,1) 1s forwards",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
