import {Meta, StoryObj} from '@storybook/react'

import Todos from '.'
import { TodosProvider } from '../../hooks/Todos'

export default {
  title: 'Pages/Todos',
  component: Todos,
  decorators: [(Story) => (<TodosProvider>{Story()}</TodosProvider>)]
} as Meta

export const Default:StoryObj = {}