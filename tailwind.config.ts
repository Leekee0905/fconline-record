import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      win: "#006FB7",
      lose: "#EE5656",
      draw: "#353535",
      black: "#000000",
      white: "#ffffff",
      lightBlue: "#5DA2EF",
      lightRed: "#FF8A8A",
      green: "#04E45F",
    },
    fontFamily: {
      english: ["Roboto", "sans-serif"],
      korean: ["Noto Sans KR", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
