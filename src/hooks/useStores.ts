import { useContext, createContext} from 'react'

import { RootStore, stores } from 'stores'

export function useStores() {
  return useContext<RootStore>(createContext<RootStore>(stores))
}
