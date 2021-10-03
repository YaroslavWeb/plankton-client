import { Story, Meta } from '@storybook/react/types-6-0'

import { Tabs, TabPanel } from 'components/Tabs'

export default {
  title: 'components/Tabs',
  component: Tabs,
} as Meta

export const Default: Story = () => (
  <Tabs>
    <TabPanel id="tab1" tabTitle="Example1" active>
      <p>Some Content - TAB #1</p>
    </TabPanel>
    <TabPanel id="tab2" tabTitle="Example2">
      <p>Some Content - TAB #2</p>
    </TabPanel>
    <TabPanel id="tab3" tabTitle="Example3">
      <p>Some Content - TAB #3</p>
    </TabPanel>
  </Tabs>
)
