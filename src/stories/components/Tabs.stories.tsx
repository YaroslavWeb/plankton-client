import { Story, Meta } from '@storybook/react'

import { Tabs as TabsComponent, TabPanel } from 'components/Tabs'

export default {
  title: 'components/Tabs',
  component: TabsComponent,
} as Meta

export const Tabs: Story = () => (
  <TabsComponent>
    <TabPanel id="tab1" tabTitle="Example1" active>
      <p>Some Content - TAB #1</p>
    </TabPanel>
    <TabPanel id="tab2" tabTitle="Example2">
      <p>Some Content - TAB #2</p>
    </TabPanel>
    <TabPanel id="tab3" tabTitle="Example3">
      <p>Some Content - TAB #3</p>
    </TabPanel>
  </TabsComponent>
)
