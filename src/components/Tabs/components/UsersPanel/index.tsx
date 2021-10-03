import { useCallback } from 'react'
import { observer } from 'mobx-react'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import * as C from 'styles/components'
import { Button } from 'components/Button'
import { IUser } from 'interfaces/user'
import { TypeModalData, ModalsEnum } from 'interfaces/ui'
import { useStores } from 'hooks/useStores'

export const UsersPanel = observer(() => {
  const { usersStore, uiStore, locationsStore } = useStores()

  const handleOpenModal = useCallback(
    (modal: ModalsEnum, data: TypeModalData = null) =>
      () => {
        uiStore.openModal(modal, data)
      },
    [uiStore]
  )

  const getLocation = useCallback(
    (id: string): string => {
      const fullLocation = locationsStore.getFullLocation(id)
      return `${fullLocation.country} | ${fullLocation.city}`
    },
    [locationsStore]
  )

  return (
    <S.Panel>
      <S.UsersTable>
        <thead>
          <tr>
            <th># ({usersStore.totalUsers})</th>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>
              <Button
                onClick={handleOpenModal(ModalsEnum.userCreate)}
                variant={Button.variant.outline}
                size={Button.size.sm}
              >
                ADD NEW+
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {usersStore.users.map((user: IUser, idx: number) => (
            <tr key={user.id}>
              <td>{idx + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{getLocation(user.locationId)}</td>
              <td>
                <Button
                  onClick={handleOpenModal(ModalsEnum.userUpdate, user)}
                  variant={Button.variant.ghost}
                  color={Button.color.secondary}
                >
                  <C.FAIcon icon={faPencilAlt} />
                </Button>{' '}
                |{' '}
                <Button
                  onClick={handleOpenModal(ModalsEnum.userDelete, user)}
                  variant={Button.variant.ghost}
                  color={Button.color.secondary}
                >
                  <C.FAIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.UsersTable>
    </S.Panel>
  )
})
