import { Story, Meta } from '@storybook/react/types-6-0'

import { Footer as FooterComponent } from 'components/Footer'

export default {
  title: 'components/Footer',
  component: FooterComponent,
} as Meta

export const Footer: Story = () => <FooterComponent />
