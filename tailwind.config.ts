import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--text-base)",
        secondary: "var(--text-secondary)",
        background: "var(--background)",
        button: "var(--button)",
        selected: "var(--selected)",
        dropdown: "var(--dropdown)",
        dropdownHover: "var(--dropdown-hover)",
        buttonSecondary: "var(--button-secondary)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
