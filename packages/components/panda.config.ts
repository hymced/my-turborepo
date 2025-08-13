import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
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

// const foo = {
//   a: 1,
//   b: 2,
// }
// const obj1 = (Object.keys(foo) as Array<keyof typeof foo>).reduce((bar, k) => {
//   const f = foo[k]
//   bar[k] = {value: f} 
//   return bar
// }, {} as Record<keyof typeof foo, {value: string|number}>)
// const obj2 = (Object.keys(foo) as (keyof typeof foo)[]).reduce((bar, k) => {
//   const f = foo[k]
//   bar[k] = {value: f} 
//   return bar
// }, {} as Record<keyof typeof foo, {value: string|number}>)
// const obj3 = (Object.keys(foo) as Array<keyof typeof foo>).reduce<Partial<Record<keyof typeof foo, {value: string|number}>>>((bar, k) => {
//   const f = foo[k]
//   bar[k] = {value: f} 
//   return bar
// }, {})
// const formatOptionsValuesString = <T extends { [key: string]: string }>(options: T) => Object.keys(options).reduce((acc, k) => (acc[k] = {value: options[k]}, acc), {} as { [key: string]: {value: string} })

const formatOptionsValuesTyped = <T extends {}>(options: T) => {
  const keys = Object.keys(options) as Array<keyof T>
  return keys.reduce((acc, k) => {
    acc[k] = {value: options[k]} 
    return acc
  }, {} as Record<keyof T, {value: T[keyof T]}>)
}

const globalCss = defineGlobalStyles({
  // cssReset
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, main':
    {
      display: 'block',
    },
  body: {
    // lineHeight: 1,
    // appReset
    fontFamily: 'Surt, sans-serif',
    fontSize: '1.5rem',
    lineHeight: '2.3rem',
    color: '$foregroundPrimary',
    transition: 'padding-top 0.5s ease-out, padding-bottom 0.2s ease-out',
    minHeight: '100vh',
    padding: '0 0 env(keyboard-inset-height, 0) 0',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0',
  },
  // appReset
  'html, body, #root': {
    height: '100%',
    width: '100%',
  },
  html: {
    boxSizing: 'border-box',
    fontSize: '62.5%',
    fontFamily: 'sans-serif',
    overflow: 'initial',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  a: {
    color: '$primary',
  },
  button: {
    border: '0',
    margin: '0',
  },
  ['input:not([type]), input[type=text], input[type=number], input[type=tel], input[type=email], input[type=password], input[type=search], input[type=url], textarea']:
    {
      boxShadow: 'none',
      appearance: 'textfield',
      textOverflow: 'ellipsis',
    },
  ['*, *:before, *:after']: {
    boxSizing: 'inherit',
    fontFamily: 'Surt, sans-serif',
  },
})

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

  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  outdir: "../styles",

  clean: false, // keep workspace folder for outdir
  jsxFramework: "react",

  theme: {
    extend: {
      tokens: {
        colors: formatOptionsValuesTyped(COLORS),
        fonts: formatOptionsValuesTyped(FONTS),
        sizes: formatOptionsValuesTyped(SIZES),
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
            borderColor: token('colors.red.200') // read the css variable for red.200
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
