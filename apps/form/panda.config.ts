import { defineConfig } from "@pandacss/dev";

import componentsConfig from "components/panda.config"

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
  outdir: "../../packages/styles",
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/components/src/**/*.{js,jsx,ts,tsx}"
  ],
  clean: false, // keep workspace folder for outdir
  jsxFramework: "react",
  presets: ["@pandacss/preset-panda", componentsConfig],

  theme: {
    extend: {
      tokens: {
        colors: {
          cobalt: { value: '#0064d1' }
        }
        // colors: Object.keys(BRAND).reduce((c, k) => (c[k] = {value: BRAND[k]}, c), {})
      }
  }}
})