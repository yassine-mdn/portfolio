import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        badge: "var(--badge)",
        border: "var(--badge-border)",
        card: "var(--card)",
      },
      keyframes: {
        floatArrow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(4px, -4px)' },
        },
        bgMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 100%" }
        },
      },
      animation: {
        floatArrow: 'floatArrow 0.6s ease-in-out infinite',
        bgMove: 'bgMove 800s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
