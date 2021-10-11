import { IUser } from './user'
import { ILocation } from './location'
import { DefaultTheme } from 'styled-components'

export interface IUI {
  modal: IModal
  isLight: boolean
  theme: DefaultTheme
}

export interface IModal {
  isOpen: boolean
  window: ModalsEnum | null
  data: TypeModalData
}

export type TypeModalData = null | ILocation | IUser

export enum ModalsEnum {
  locationCreate = 'LocationCreate',
  locationDelete = 'LocationDelete',
  locationUpdate = 'LocationUpdate',
  userCreate = 'UserCreate',
  userDelete = 'UserDelete',
  userUpdate = 'UserUpdate',
}

