import { v4 as uuid } from 'uuid'
import { faCat } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import * as C from 'styles/components'
import { Button } from 'components/Button'
import { TextInput } from 'components/TextInput'
import { useStores } from 'hooks/useStores'
import { useForm } from 'hooks/useForm'
import { ILocation } from 'interfaces/location'

export const LocationCreate = () => {
  const { uiStore, locationsStore } = useStores()
  const initialForm = { country: '', city: '' }

  const handleClose = () => {
    uiStore.closeModal()
  }

  const handleCreate = (values: typeof initialForm) => {
    const { country, city } = values
    const location: ILocation = {
      id: uuid(),
      country,
      city,
    }
    locationsStore.createLocation(location)
    handleClose()
  }

  const { form, onSubmit, onChange } = useForm(initialForm, handleCreate)

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <C.FAIcon icon={faCat} />
      </S.WindowClose>
      <C.Title1>CREATE LOCATION</C.Title1>
      <C.Divider />
      <TextInput {...form.country} onChange={onChange} placeholder="Country" />
      <C.Divider />
      <TextInput {...form.city} onChange={onChange} placeholder="Country" />
      <C.Divider height={32} heightMob={16} />
      <S.WindowActions>
        <Button color={Button.color.success} onClick={onSubmit}>
          ADD
        </Button>
        <Button onClick={handleClose}>CLOSE</Button>
      </S.WindowActions>
    </S.Window>
  )
}
