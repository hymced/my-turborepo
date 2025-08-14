import { defineConfig } from "@pandacss/dev";
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
  clean: false, // keep styles workspace package
  include: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "../../packages/components/src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: ["@pandacss/preset-panda", stylesConfig], // order of presets matter // only Preset type settings are used (not outdir or include, so it is okay to set them before here)
  jsxFramework: "react",

  theme: {
    extend: {
      tokens: {
        colors: {
          app_cobalt: { value: BRAND.cobalt }
        }
      }
  }}
})