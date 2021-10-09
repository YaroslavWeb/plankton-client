import { useCallback } from 'react'
import { observer } from 'mobx-react'
import { faMapMarkerAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import * as C from 'styles/components'
import { useStores } from 'hooks/useStores'
import { IUser } from 'interfaces/user'
import { getUserAvatar } from 'helpers/getUserAvatar'

export const InfoPanel = observer(() => {
  const { usersStore, locationsStore } = useStores()

  const getLocation = useCallback(
    (id: string): string => {
      const fullLocation = locationsStore.getFullLocation(id)
      return `${fullLocation.country} | ${fullLocation.city}`
    },
    [locationsStore]
  )

  return (
    <S.Panel>
      {usersStore.users.map((user: IUser) => (
        <S.Card key={user.id}>
          <S.CardAvatar
            src={getUserAvatar(user.name, user.age, user.locationId)}
          />
          <table>
            <tbody>
              <tr>
                <td>
                  <C.FAIcon icon={faUserAlt} />
                </td>
                <td>
                  <C.Title2 weight="300">
                    {user.name} | {user.age} y.o.
                  </C.Title2>
                </td>
              </tr>

              <tr>
                <td>
                  <C.FAIcon icon={faMapMarkerAlt} />
                </td>
                <td>
                  <C.Title2 weight="300">
                    {getLocation(user.locationId)}
                  </C.Title2>
                </td>
              </tr>
            </tbody>
          </table>

          <C.Title2 weight="300"></C.Title2>
        </S.Card>
      ))}
    </S.Panel>
  )
})
