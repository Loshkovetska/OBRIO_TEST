import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primary:
          "linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bright-gray": "#EAEEF7",
        "dr-white": "#FBFBFF",
        alto: "#E0E0E0",
        "powder-puff": "#FFF0F0",
        poppy: "#6A3AA2",
      },
      boxShadow: {
        "button-shadow": "2px 2px 6px 0px #543C9740",
      },
    },
  },
  plugins: [],
} satisfies Config;
