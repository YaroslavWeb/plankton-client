import { faHandMiddleFinger } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import * as C from 'styles/components'
import { useStores } from 'hooks/useStores'
import { ILocation } from 'interfaces/location'
import { Button } from 'components/Button'

export function LocationDelete() {
  const { uiStore, locationsStore } = useStores()
  const data = uiStore.modal.data as ILocation

  const handleClose = () => {
    uiStore.closeModal()
  }

  const handleDelete = () => {
    locationsStore.deleteLocation(data.id)
    handleClose()
  }

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <C.FAIcon icon={faHandMiddleFinger} />
      </S.WindowClose>
      <C.Title1>DELETE LOCATION</C.Title1>
      <C.Divider height={32} heightMob={32} />
      <S.WindowActions>
        <Button color={Button.color.danger} onClick={handleDelete}>
          REMOVE
        </Button>
        <Button onClick={handleClose}>CLOSE</Button>
      </S.WindowActions>
    </S.Window>
  )
}
