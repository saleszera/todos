import {Meta, StoryObj} from '@storybook/react'

import Main from '.'
import { TodosProvider } from '../../hooks/Todos'

export default {
  title: 'components/Main',
  component: Main,
  decorators: [(Story) => (<TodosProvider>{Story()}</TodosProvider>)]
} as Meta

export const Default:StoryObj = {}