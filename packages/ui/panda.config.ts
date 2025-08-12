import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  // preflight: true,

  // Where to look for your css declarations
  // include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  // include: ["./src/**/*.{js,jsx,ts,tsx}"],
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../styled-system/**/*.{js,jsx,ts,tsx}"
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  // outdir: "styled-system",

  outdir: "../styled-system",
  clean: false, // keep workspace package package.json and other files
  jsxFramework: "react",
  presets: ["@pandacss/dev/presets"],
  importMap: "@repo/styled-system" // ???
  // yarn add @repo/styled-system does not work as it does with pnpm
  // --> yarn add styled-system OK
});
