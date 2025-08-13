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
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  outdir: "../styles",

  clean: false, // keep workspace folder for outdir
  jsxFramework: "react",

  presets: ["@pandacss/preset-panda", stylesConfig],

  theme: {
    extend: {
      tokens: {
        colors: {
          components_kale: { value: BRAND.kale }
        }
      }
    }
  }
})
