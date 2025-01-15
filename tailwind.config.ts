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
        primary: '#1D4ED8',  
        secondary: '#3B82F6', 
        accent: '#60A5FA',   
        background: '#EFF6FF', 
      },
    },
  },
  plugins: [],
};
export default config;
