import React from 'react'

import { RootStore, stores } from 'stores'

export function useStores() {
  return React.useContext<RootStore>(React.createContext<RootStore>(stores))
}
