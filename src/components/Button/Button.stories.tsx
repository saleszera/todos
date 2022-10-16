import {Meta, StoryObj} from '@storybook/react'

import Button, { IButton } from '.'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<IButton>

export const Inactive:StoryObj<IButton> = {
  args: {
    title: 'Inactive',
    isActive: false
  }
}

export const Active:StoryObj<IButton> = {
  args: {
    title: 'Active',
    isActive: true
  }
}