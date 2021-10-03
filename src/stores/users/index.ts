import { makeAutoObservable } from 'mobx'

import { IUser } from 'interfaces/user'
import { usersData } from './fakeData'

export class UsersStore {
  users: IUser[] = usersData

  constructor() {
    makeAutoObservable(this)
  }

  get totalUsers() {
    return this.users.length
  }

  createUser(user: IUser) {
    this.users.unshift(user)
  }

  updateUser(user: IUser) {
    this.users = this.users.map((item) => (item.id === user.id ? user : item))
  }

  deleteUser(userId: string) {
    this.users = this.users.filter((item) => item.id !== userId)
  }
}
