import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import * as C from 'styles/components'
import { useStores } from 'hooks/useStores'
import { Button } from 'components/Button'
import { IUser } from 'interfaces/user'
import { getUserAvatar } from 'helpers/avatars'

export function UserDelete() {
  const { uiStore, usersStore } = useStores()
  const data = uiStore.modal.data as IUser

  const handleClose = () => {
    uiStore.closeModal()
  }

  const handleDelete = () => {
    usersStore.deleteUser(data.id)
    handleClose()
  }

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <C.FAIcon icon={faSkullCrossbones} />
      </S.WindowClose>
      <C.Title1>DELETE USER</C.Title1>
      <C.Divider height={32} heightMob={32} />

      <C.Divider />
      <C.Title2 weight={300}>You want to kill me?</C.Title2>
      <C.Avatar src={getUserAvatar(data.name, data.age, data.locationId)} />
      <C.Divider height={32} heightMob={32} />

      <S.WindowActions>
        <Button color={Button.color.danger} onClick={handleDelete}>
          YEEEESS
        </Button>
        <Button onClick={handleClose}>NOT YET</Button>
      </S.WindowActions>
    </S.Window>
  )
}
