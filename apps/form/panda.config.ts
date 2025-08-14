import { defineConfig } from "@pandacss/dev";
import stylesConfig from "@mono/styles/config"

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
  outdir: "styles", // will always be generated locally in form app without a relative path
  // outdir: "@mono/styles", // will always be generated locally in form app without a relative path
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/components/src/**/*.{js,jsx,ts,tsx}"
  ],
  // clean: false, // keep workspace folder for outdir
  jsxFramework: "react",
  presets: ["@pandacss/preset-panda", stylesConfig], // order matter
  importMap: "@mono/styles", // only if workspace package from which we import does not have outdir as base path

  theme: {
    extend: {
      tokens: {
        colors: {
          app_cobalt: { value: BRAND.cobalt }
        }
      }
  }}
})