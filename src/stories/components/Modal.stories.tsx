import { useCallback, useEffect } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Modal as ModalComponent } from 'components/Modal'
import { useStores } from 'hooks/useStores'
import { ModalsEnum } from 'interfaces/ui'
import { usersData } from './mockData/users'
import { locationsData } from './mockData/locations'

export default {
  title: 'components/Modal',
  component: ModalComponent,
  args: {
    isOpen: true,
    window: ModalsEnum.userCreate,
  },
  argTypes: {
    window: {
      options: [...Object.values(ModalsEnum)],
      control: { type: 'select' },
    },
  },
} as Meta

interface TemplateProps {
  isOpen: boolean
  window: ModalsEnum
}

export const Modal: Story<TemplateProps> = (args) => {
  const { uiStore } = useStores()

  const getMockData = useCallback(() => {
    switch (args.window) {
      case ModalsEnum.locationDelete:
        return locationsData[0]
      case ModalsEnum.locationUpdate:
        return locationsData[0]
      case ModalsEnum.userDelete:
        return usersData[0]
      case ModalsEnum.userUpdate:
        return usersData[0]
      default:
        return null
    }
  }, [args.window])

  useEffect(() => {
    if (args.isOpen) {
      uiStore.openModal(args.window, getMockData())
    } else {
      uiStore.closeModal()
    }
  }, [args.isOpen, args.window, getMockData, uiStore])

  return <ModalComponent />
}
