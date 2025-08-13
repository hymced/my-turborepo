import { defineConfig } from "@pandacss/dev";
import componentsConfig from "components/panda.config"
import stylesConfig from "styles/config"

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
  presets: ["@pandacss/preset-panda", stylesConfig, componentsConfig], // order matter

  theme: {
    extend: {
      tokens: {
        colors: {
          app_cobalt: { value: BRAND.cobalt }
        }
      }
  }}
})