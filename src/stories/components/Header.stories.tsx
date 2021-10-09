import { Story, Meta } from '@storybook/react'

import { Header as HeaderComponent } from 'components/Header'

export default {
  title: 'components/Header',
  component: HeaderComponent,
} as Meta

export const Header: Story = () => <HeaderComponent />
