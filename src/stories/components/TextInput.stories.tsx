import { ChangeEvent, useCallback, useState } from 'react'
import { Story, Meta } from '@storybook/react'

import { TextInput as TextInputComponent } from 'components/TextInput'

export default {
  title: 'components/inputs/TextInput',
  component: TextInputComponent,
  args: {
    placeholder: 'Example Input',
    name: 'name',
    error: '',
  },
  argTypes: {
    placeholder: {
      type: 'string',
    },
    error: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    value: {
      control: { type: null },
    },
    onChange: {
      control: { type: null },
    },
  },
} as Meta

interface TemplateProps {
  placeholder: string
  name: string
  error: string
}

export const TextInput: Story<TemplateProps> = (args) => {
  const [value, setValue] = useState('')

  const onChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValue(target.value)
    },
    []
  )

  return (
    <TextInputComponent
      value={value}
      onChange={onChange}
      {...args}
      placeholder={args.placeholder}
      name={args.name}
      error={args.error}
    />
  )
}

TextInput.storyName = 'TextInput'
