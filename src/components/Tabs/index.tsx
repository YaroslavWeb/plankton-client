import { useEffect, ReactElement, useState } from 'react'
import { useLocation } from 'react-router-dom'

import * as S from './styles'

interface AppTabsProps {
  children: ReactElement[]
}

// Controls the display of transmitted panels and shows the active
export const Tabs = ({ children }: AppTabsProps) => {
  const { hash } = useLocation()
  const [activeTab, setActiveTab] = useState<ReactElement>()

  useEffect(() => {
    setActiveTab(children.find((item) => "#"+item.props.id === hash) || children[0])
  }, [children, hash])

  return (
    <S.Tabs>
      <S.TabBar>
        {children.map((item) => (
          <S.TabBarItem
            to={'#'+item.props.id}
            key={item.props.id}
            $isActive={hash === '#'+item.props.id}
            onClick={() => setActiveTab(item)}
          >
            {item.props.tabTitle}
          </S.TabBarItem>
        ))}
      </S.TabBar>
      <S.TabPanels>{activeTab || ''}</S.TabPanels>
    </S.Tabs>
  )
}

interface AppTabPanelProps {
  children: ReactElement
  id: string
  tabTitle: string
  active?: boolean
}

export const TabPanel = ({ children }: AppTabPanelProps) => {
  return children
}

export {
  InfoPanel,
  LocationsPanel,
  StructurePanel,
  UsersPanel,
} from './components'
