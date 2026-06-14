import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#002b5c",
        "navy-2": "#003366",
        primary: "#1b98e0",
        "medium-blue": "#1a659e",
        "deep-blue": "#004e89",
        orange: "#E97A43",
        soft: "#e8f1f2",
      },
      fontFamily: {
        heading: [
          "Manrope",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif",
        ],
        body: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif",
        ],
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 43, 92, 0.08)",
        glow: "0 28px 80px rgba(27, 152, 224, 0.18)",
      },
      backgroundImage: {
        "blue-radial":
          "radial-gradient(circle at 50% 20%, rgba(27, 152, 224, 0.16), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.94), rgba(232,241,242,0.92))",
      },
    },
  },
  plugins: [],
} satisfies Config;
