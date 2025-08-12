import { styled } from "@repo/styled-system/jsx"

const Styled = styled("button", {
   base: {
    py: '2',
    px: '4',
    rounded: 'md'
  },
  variants: {
    variant: {
      primary: {
        bg: 'blue.400',
        color: 'white'
      },
      secondary: {
        bg: 'red.400',
        color: 'white'
      }
    }
  }
})

export { Styled }