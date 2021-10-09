import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import {
  Button,
  ButtonProps,
  ButtonVariant,
  ButtonSize,
} from 'components/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
interface TemplateProps extends ButtonProps {
  text: string
}

export default {
  title: 'components/Button',
  component: Button,
  args: {
    text: 'Text',
    size: Button.size.md,
  },
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    variant: {
      options: [...Object.values(ButtonVariant)],
      control: { type: 'select' },
    },
    size: {
      options: [...Object.values(ButtonSize)],
      control: { type: 'select' },
    },
    color: {
      options: null,
    },
  },
} as Meta

const Template: Story<TemplateProps> = (args) => {
  return (
    <Wrapper>
      <Button
        variant={args.variant}
        size={args.size}
        color={Button.color.primary}
      >
        {args.text}
      </Button>
      <Button
        variant={args.variant}
        size={args.size}
        color={Button.color.secondary}
      >
        {args.text}
      </Button>
      <Button
        variant={args.variant}
        size={args.size}
        color={Button.color.success}
      >
        {args.text}
      </Button>
      <Button
        variant={args.variant}
        size={args.size}
        color={Button.color.danger}
      >
        {args.text}
      </Button>
    </Wrapper>
  )
}

export const Solid = Template.bind({})
Solid.args = {
  variant: Button.variant.solid,
}

export const Outline = Template.bind({})
Outline.args = {
  variant: Button.variant.outline,
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: Button.variant.ghost,
}
