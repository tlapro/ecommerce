import type { Config } from "tailwindcss";

export default {
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
        primary: "#B58863",
        secondary: "#10232A",
        bgcolor: "#161616",
        hoverPrimary: "#c49976",
        hoverSecondary: "#193641",
        thirdColor: "#A79E9C",
        warning: "#bb2d2d",
      },
    },
  },
  plugins: [],
} satisfies Config;
