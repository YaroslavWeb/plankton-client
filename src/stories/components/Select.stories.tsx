import { ChangeEvent, useCallback, useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { locationsData } from './mockData/locations'
import { Select, Option } from 'components/Select'

export default {
  title: 'components/inputs/Select',
  component: Select,
  args: {
    placeholder: 'Example Select',
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
    <Select
      value={value}
      onChange={onChange}
      placeholder={args.placeholder}
      name={args.name}
      error={args.error}
    >
      {locationsData.map((location) => (
        <Option key={location.id} value={location.id}>
          {location.country} | {location.city}
        </Option>
      ))}
    </Select>
  )
}
