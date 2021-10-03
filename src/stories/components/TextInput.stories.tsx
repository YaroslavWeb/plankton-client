import { ChangeEvent, useCallback, useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { TextInput } from 'components/TextInput'

export default {
  title: 'components/inputs/TextInput',
  component: TextInput,
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

export const Default: Story<TemplateProps> = (args) => {
  const [value, setValue] = useState('')

  const onChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValue(target.value)
    },
    []
  )

  return (
    <TextInput
      value={value}
      onChange={onChange}
      {...args}
      placeholder={args.placeholder}
      name={args.name}
      error={args.error}
    />
  )
}
