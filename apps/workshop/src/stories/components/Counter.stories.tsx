import { Meta, StoryObj } from '@storybook/react'
import { Counter } from 'components'

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  args: {
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
}

export default meta

export const Base: StoryObj<typeof Counter> = {}
