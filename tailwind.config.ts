import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1E22",
        primary_yellow: "#FFD550",
        discord_purple: "#7289DA",
        light_yellow: "#FFF1B8",
        primary_gray: "#D1D1D1",
        secondary: "#FFFFFF",
        light_purple: "#D0C3FC",
        build: "#FC6C3F",
        discover: "#FF3E9E",
        explore: "#EB6A65",
        ignite: "#87DE65",
        hack: "#A27BFC",
        launch: "#11CEBB",
        reach: "#6FA4F4",
      },
      height: {
        "128": "32rem", // Adds h-128 for 32rem/512px height
        "144": "36rem", // Adds h-144 for 36rem/576px height
        "160": "40rem", // Adds h-160 for 40rem/640px height
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [

],
};
export default config;
