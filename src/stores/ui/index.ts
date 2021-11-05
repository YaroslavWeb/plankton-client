import { makeAutoObservable } from 'mobx'
import { DefaultTheme } from 'styled-components'

import { IModal, TypeModalData, ModalsEnum } from 'interfaces/ui'
import { ThemeEnum } from 'interfaces/styled'
import { darkTheme, lightTheme } from 'styles/theme'

const getTheme = () => {
  const storageThemeType = localStorage.getItem('theme-type')
  if(storageThemeType === ThemeEnum.dark){
    return darkTheme
  }
  return lightTheme
}

export class UIStore {
  modal: IModal = {
    isOpen: false,
    window: null,
    data: null,
  }

  theme: DefaultTheme = lightTheme
  
  constructor() {
    makeAutoObservable(this)
    this.theme = getTheme() 
  }

  get isLightTheme() {
    return this.theme.type === ThemeEnum.light
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
    }, this.theme.durations.ms300)
  }

  toggleTheme() {
    this.theme = this.isLightTheme ? darkTheme : lightTheme
    localStorage.setItem('theme-type', this.theme.type)
  }
}
