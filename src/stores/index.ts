import { UsersStore } from './users'
import { LocationsStore } from './locations'
import { UIStore } from './ui'

export enum StoresEnum {
  usersStore = 'usersStore',
  locationsStore = 'locationsStore',
  uiStore = 'uiStore',
}

export class RootStore {
  usersStore: UsersStore
  locationsStore: LocationsStore
  uiStore: UIStore

  constructor() {
    this.usersStore = new UsersStore()
    this.locationsStore = new LocationsStore()
    this.uiStore = new UIStore()
  }
}

export const stores = new RootStore()
