import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

import * as C from 'styles/components'
import {
  Tabs,
  TabPanel,
  InfoPanel,
  LocationsPanel,
  StructurePanel,
  UsersPanel,
} from 'components/Tabs'

export const HomePage = () => {


  return (
    <>
      <div>
        <C.Title1>Simple CRUD App.</C.Title1>
        <C.Divider height={24} heightMob={12} />
        <C.Title2>
          <C.FAIcon icon={faCog} color="#a8324a" $animated /> Technologies{' '}
          <C.FAIcon icon={faCog} color="#a8324a" $animated />
        </C.Title2>
        <C.Divider />
        <ul>
          <li>
            <C.Text1 weight="300">
              <C.FAIcon icon={faReact} color="#3265a8" /> React
            </C.Text1>
          </li>
          <li>
            <C.Text1 weight="300">
              <C.FAIcon icon={faReact} color="#32a855" /> MobX
            </C.Text1>
          </li>
          <li>
            <C.Text1 weight="300">
              <C.FAIcon icon={faReact} color="#6532a8" /> TypeScript
            </C.Text1>
          </li>
          <li>
            <C.Text1 weight="300">
              <C.FAIcon icon={faReact} color="#a032a8" /> Styled Components
            </C.Text1>
          </li>
          <li>
            <C.Text1 weight="300">
              <C.FAIcon icon={faReact} color="#c521aa" /> Storybook
            </C.Text1>
          </li>
          <li>
            <C.Text1 weight="300">
              <C.FAIcon icon={faReact} color="#f57e33" /> Avatar generator -{' '}
              <a href="https://avatars.dicebear.com">DiceBear Avatars </a>
            </C.Text1>
          </li>
          <li>
            <C.Text1 weight="300">
              <C.FAIcon icon={faReact} color="#3e8872" /> Icons -{' '}
              <a href="https://fontawesome.com/">Font Awesome</a>
            </C.Text1>
          </li>
        </ul>
      </div>
      <C.Divider height={48} heightMob={24} />
      <Tabs>
        <TabPanel id="tab1" tabTitle="INFO" active>
          <InfoPanel />
        </TabPanel>
        <TabPanel id="tab2" tabTitle="USERS">
          <UsersPanel />
        </TabPanel>
        <TabPanel id="tab3" tabTitle="LOCATIONS">
          <LocationsPanel />
        </TabPanel>
        <TabPanel id="tab4" tabTitle="JSON">
          <StructurePanel />
        </TabPanel>
      </Tabs>
    </>
  )
}
