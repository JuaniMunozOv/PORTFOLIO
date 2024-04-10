const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      zinc: {
        50: "#f9f9f9",
        100: "#f3f3f3",
        200: "#e8e8e8",
        300: "#d9d9d9",
        400: "#bfbfbf",
        500: "#a6a6a6",
        600: "#8c8c8c",
        700: "#737373",
        800: "#595959",
        900: "#404040",
      },
      sky: {
        50: "#f5f9ff",
        100: "#ebf3ff",
        200: "#cce0ff",
        300: "#addcff",
        400: "#70bfff",
        500: "#339fff",
        600: "#2e8fcc",
        700: "#1f6673",
        800: "#174d59",
        900: "#0f333f",
      },
      neutral: {
        50: "#f9f9f9",
        100: "#f3f3f3",
        200: "#e8e8e8",
        300: "#d9d9d9",
        400: "#bfbfbf",
        500: "#a6a6a6",
        600: "#8c8c8c",
        700: "#737373",
        800: "#595959",
        900: "#404040",
      },
    },
    extend: {

      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        calsans: ["Cal Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },

      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },

      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
