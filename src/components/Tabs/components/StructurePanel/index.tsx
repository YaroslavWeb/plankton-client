import { observer } from 'mobx-react'

import * as S from './styles'
import * as C from 'styles/components'
import { useStores } from 'hooks/useStores'

export const StructurePanel = observer(() => {
  const { usersStore, locationsStore } = useStores()
  return (
    <S.Panel>
      <C.Title2>Users</C.Title2>
      <pre>{JSON.stringify(usersStore, undefined, 2)}</pre>
      <br />
      <br />
      <C.Title2>Locations</C.Title2>
      <pre>{JSON.stringify(locationsStore, undefined, 2)}</pre>
    </S.Panel>
  )
})
