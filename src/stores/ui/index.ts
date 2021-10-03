import { makeAutoObservable } from 'mobx'

import { IModal, TypeModalData, ModalsEnum } from 'interfaces/ui'
import theme, { darkTheme, lightTheme } from 'styles/theme'

const themeWithLight = {
  ...theme,
  colors: { ...theme.colors, ...lightTheme.colors },
}

const themeWithDark = {
  ...theme,
  colors: { ...theme.colors, ...darkTheme.colors },
}

export class UIStore {
  modal: IModal = {
    isOpen: false,
    window: null,
    data: null,
  }

  isLight = true
  theme = themeWithLight

  constructor() {
    makeAutoObservable(this)
  }

  openModal(window: ModalsEnum, data: TypeModalData) {
    this.modal.window = window
    this.modal.data = data
    this.modal.isOpen = true
  }

  closeModal() {
    this.modal.isOpen = false
    setTimeout(() => {
      this.modal.window = null
    }, theme.durations.default)
  }

  toggleTheme() {
    if (this.isLight) {
      this.theme = themeWithDark
      this.isLight = false
      return
    } else {
      this.theme = themeWithLight
      this.isLight = true
    }
  }
}
