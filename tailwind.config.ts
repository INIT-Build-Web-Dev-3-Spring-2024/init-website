import type { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: {
          DEFAULT: "#10032c",
          dark: "#05020b",
        },
        primary: {
          DEFAULT: "#1A1E22",
          yellow: "#FFD550",
          purple: "#430486",
          gray: "#BABABA",
          text: "#D9D9D9",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          yellow: "#F07053",
          purple: "#D0C3FC",
          gray: "#3E3E3E",
        },
        program: {
          build: "#FC6C3F",
          discover: "#FF3E9E",
          explore: "#EB6A65",
          ignite: "#87DE65",
          hack: "#A27BFC",
          launch: "#11CEBB",
          reach: "#6FA4F4",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "gothic-a1": ["var(--font-gothic-a1)"],
      },
    },
  },
  plugins: [],
};

export const twConfig = resolveConfig(config);

export function getProgramColor(programName: string) {
  return twConfig.theme.colors.program[
    programName.toLowerCase() as keyof typeof twConfig.theme.colors.program
  ];
}

export default config;
