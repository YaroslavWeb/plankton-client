import { makeAutoObservable } from 'mobx'

import { ILocation } from 'interfaces/location'
import { locationsData } from './fakeData'

export class LocationsStore {
  locations = locationsData

  constructor() {
    makeAutoObservable(this)
  }

  get totalLocations() {
    return this.locations.length
  }

  getFullLocation(id: string) {
    return this.locations.find((item) => item.id === id) || undefined
  }

  createLocation(location: ILocation) {
    this.locations.unshift(location)
  }

  updateLocation(location: ILocation) {
    this.locations = this.locations.map((item) =>
      item.id === location.id ? location : item
    )
  }

  deleteLocation(locationId: string) {
    this.locations = this.locations.filter((item) => item.id !== locationId)
  }
}
