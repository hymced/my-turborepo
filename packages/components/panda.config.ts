import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  // preflight: true,

  // Where to look for your css declarations
  // include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  
  // Files to exclude
  // exclude: [],
  
  // Useful for theme customization
  // theme: {
    //   extend: {},
    // },
    
    // The output directory for your css system
    // outdir: "styled-system",
    
    include: ["./src/**/*.{js,jsx,ts,tsx}"],
    outdir: "../styles",

    clean: false,
    jsxFramework: "react",
    // presets: [],

    theme: {
      extend: {
        tokens: {
          colors: {
            kale: { value: '#075526' } // kale
          }
        }
      }
    }
});
