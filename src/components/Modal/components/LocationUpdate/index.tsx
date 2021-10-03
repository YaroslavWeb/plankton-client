import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import * as C from 'styles/components'
import { Button } from 'components/Button'
import { TextInput } from 'components/TextInput'
import { useStores } from 'hooks/useStores'
import { useForm } from 'hooks/useForm'
import { ILocation } from 'interfaces/location'

export const LocationUpdate = () => {
  const { uiStore, locationsStore } = useStores()
  const data = uiStore.modal.data as ILocation
  const initialForm = { country: data.country, city: data.city }

  const handleClose = () => {
    uiStore.closeModal()
    cleanUp()
  }

  const handleUpdate = (values: typeof initialForm) => {
    const { country, city } = values

    const location: ILocation = {
      id: data.id,
      country,
      city,
    }
    locationsStore.updateLocation(location)
    handleClose()
  }

  const { form, onSubmit, onChange, cleanUp } = useForm(
    initialForm,
    handleUpdate
  )

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <C.FAIcon icon={faPizzaSlice} />
      </S.WindowClose>
      <C.Title1>UPDATE LOCATION</C.Title1>
      <C.Divider />
      <TextInput {...form.country} onChange={onChange} placeholder="Country" />
      <C.Divider />
      <TextInput {...form.city} onChange={onChange} placeholder="Country" />
      <C.Divider height={32} heightMob={16} />
      <S.WindowActions>
        <Button color={Button.color.primary} onClick={onSubmit}>
          UPDATE
        </Button>
        <Button onClick={handleClose}>CLOSE</Button>
      </S.WindowActions>
    </S.Window>
  )
}
