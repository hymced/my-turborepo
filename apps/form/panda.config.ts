import { defineConfig } from "@pandacss/dev";

const BRAND = {
  primary: '#f44831',
  beet: '#9d1716',
  radish: '#fcb2b0',
  yolk: '#ffc847',
  powder: '#c6eaf6',
  cobalt: '#0064d1',
  kale: '#075526',
}

export default defineConfig({
  // // Whether to use css reset
  // preflight: true,

  // // Where to look for your css declarations
  // include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  
  // // Files to exclude
  // exclude: [],
  
  // // Useful for theme customization
  // theme: {
  //   extend: {},
  // },
  
  // // The output directory for your css system
  // outdir: "styled-system",
  
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  clean: true,
  jsxFramework: "react",
  presets: [], // removes the default design tokens injected by panda from @pandacss/preset-panda --> extend key in theme can be omitted
  eject: true, // removes @pandacss/preset-base

  theme: {
    extend: {
      tokens: {
        colors: {
          cobalt: { value: '#0064d1' }
        }
        // colors: Object.keys(BRAND).reduce((c, k) => (c[k] = {value: BRAND[k]}, c), {})
      }
  }}
});