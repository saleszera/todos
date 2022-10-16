import {Meta, StoryObj} from '@storybook/react'

import Card from '.'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta<ITodo>

export const Inactive:StoryObj<ITodo> = {
  args: {
    name: 'Inactive',
    isFinished: false
  }
}

export const Active:StoryObj<ITodo> = {
  args: {
    name: 'Active',
    isFinished: true
  }
}