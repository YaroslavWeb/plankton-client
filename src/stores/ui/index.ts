import { makeAutoObservable } from 'mobx'
import { DefaultTheme } from 'styled-components'

import { IModal, TypeModalData, ModalsEnum } from 'interfaces/ui'
import { darkTheme, lightTheme, ThemeType } from 'styles/theme'


export class UIStore {
  modal: IModal = {
    isOpen: false,
    window: null,
    data: null,
  }

  theme: DefaultTheme = lightTheme
  
  constructor() {
    makeAutoObservable(this)
  }

  get isLightTheme() {
    return this.theme.type === ThemeType.light
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
  }
}
