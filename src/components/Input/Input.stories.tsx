import {Meta, StoryObj} from '@storybook/react'
import { useForm } from 'react-hook-form'

import Input, { IInput } from '.'
import FormProvider from '../FormProvider'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    name: 'todo'
  },
  decorators: [(Story) => {
    const methods = useForm()

    return (
      <FormProvider methods={methods}>
        {Story()}
      </FormProvider>
    )
  }]
} as Meta<IInput>

export const Default:StoryObj<IInput> = {}