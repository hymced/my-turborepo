import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import { globalCss } from "../globals";
// import type { ExtendableUtilityConfig } from "@pandacss/types"

const COLORS = {
  // Base
  white: '#ffffff',
  black: '#1e1e1e',
  transparent: 'rgba(255, 255, 255, 0)',
  // Brand
  cream: '#fdf4e7',
  primary: '#f44831',
  cobalt: '#0064d1',
  yolk: '#ffc847',
  radish: '#fcb2b0',
  powder: '#c6eaf6',
  kale: '#075526',
  beet: '#9d1716',
  // Background
  backgroundPrimary: '#fdf4e7',
  backgroundSecondary: '#ffffff',
  backgroundTertiary: '#f4c890',
  // Foreground
  foregroundPrimary: '#1e1e1e',
  foregroundSecondary: '#6f6f6f',
  foregroundTertiary: '#e9e9e9',
  // Overlay
  overlay: 'rgba(30, 30, 30, 0.4)',
}  
const FONTS = {
  viksjow: 'Viksjow, serif',
  surt: 'Surt, sans-serif',
}
const SIZES = {
  gutterX: '1.6rem',
  gutterY: '1.2rem',
}

const formatOptionsValues = <T extends {}>(options: T) => {
  const keys = Object.keys(options) as Array<keyof T>
  return keys.reduce((acc, k) => {
    acc[k] = {value: options[k]} 
    return acc
  }, {} as Record<keyof T, {value: T[keyof T]}>)
}

export default defineConfig({
  globalCss,

  globalFontface: {
    Viksjow: {
      src: "url('./assets/fonts/Viksjow-Regular.otf') format('opentype')",
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'block'
    },
    Surt: [
      {
        src: "url('./assets/fonts/Surt-Medium.otf') format('opentype')",
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'block'
      },
      {
        src: "url('./assets/fonts/Surt-Bold.otf') format('opentype')",
        fontWeight: 700,
        fontStyle: 'normal',
        fontDisplay: 'fallback'
      }
    ]
  },

  theme: {
    extend: {
      tokens: {
        colors: formatOptionsValues(COLORS),
        fonts: formatOptionsValues(FONTS),
        sizes: formatOptionsValues(SIZES),
      },
      breakpoints: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1560px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },

  utilities: {
    extend: {
      foo: {
        className: 'foo', // css({ br: "sm" }) => foo-sm
        values: 'radii', // connect values to the radii tokens
        transform(value) {
          return { borderRadius: value }
        }
      },
      barX: {
        values: ['1px', '2px', '4px'],
        shorthand: 'bx', // `bz` or `barX` can be used
        transform(value, { token }) {
          return {
            borderInlineWidth: value,
            borderStyle: "solid",
            borderColor: token('colors.red.800') // read the css variable for red.200
          }
        }
      }
    }
  },
  // } as ExtendableUtilityConfig,

  conditions: {
    extend: {
      hover: ['@media (hover: hover) and (pointer: fine)', '&:hover'],
    },
  },
})
