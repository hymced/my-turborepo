import { styled } from "@mono/styles/jsx"

const Styled = styled("button", {
  base: {
    py: '10',
    px: '20',
    rounded: 'md'
  },
  variants: {
    variant: {
      primary: {
        bg: 'blue.400', // needs @pandacss/preset-panda
        color: 'blue.800'
      },
      secondary: {
        bg: '#9d1716', // beet
        color: 'white'
      }
    }
  }
})

export { Styled }