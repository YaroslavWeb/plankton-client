import { Story, Meta } from '@storybook/react/types-6-0'

import { Header } from 'components/Header'

export default {
  title: 'components/Header',
  component: Header,
} as Meta

export const Default: Story = () => <Header />
