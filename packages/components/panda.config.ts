import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  outdir: "../styles",

  clean: false, // keep workspace folder for outdir
  jsxFramework: "react",

  theme: {
    extend: {
      tokens: {
        colors: {
          kale: { value: '#075526' } // kale
        }
      }
    }
  }
})
