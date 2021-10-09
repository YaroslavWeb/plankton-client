import { ChangeEvent, useCallback, useState } from 'react'
import { Story, Meta } from '@storybook/react'

import { locationsData } from './mockData/locations'
import { Select as SelectComponent, Option } from 'components/Select'

export default {
  title: 'components/inputs/Select',
  component: SelectComponent,
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

export const Select: Story<TemplateProps> = (args) => {
  const [value, setValue] = useState('')

  const onChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValue(target.value)
    },
    []
  )
  return (
    <SelectComponent
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
    </SelectComponent>
  )
}
