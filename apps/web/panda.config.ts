import { defineConfig } from "@pandacss/dev"

export default defineConfig({
// Whether to use css reset
// preflight: true,
 
// Where to look for your css declarations
// include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],
 
// Files to exclude
// exclude: [],
 
// The output directory for your css system
// outdir: "styled-system",

// include: ["./app/**/*.{ts,tsx,js,jsx}"],
include: [
  "./app/**/*.{ts,tsx,js,jsx}",
  "../../../packages/ui/src/**/*.{ts,tsx,js,jsx}",
  "../../../packages/styled-system/**/*.{ts,tsx,js,jsx}"
],
jsxFramework: "react",
presets: ["@pandacss/dev/presets"],
})