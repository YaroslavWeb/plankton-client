import { faHamburger } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import * as C from 'styles/components'
import { Button } from 'components/Button'
import { TextInput } from 'components/TextInput'
import { Select, Option } from 'components/Select'
import { IUser } from 'interfaces/user'
import { useForm } from 'hooks/useForm'
import { useStores } from 'hooks/useStores'
import { getUserAvatar } from 'helpers/getUserAvatar'

export function UserUpdate() {
  const { uiStore, locationsStore, usersStore } = useStores()
  const data = uiStore.modal.data as IUser

  const initialForm = {
    name: data.name,
    age: data.age,
    location: data.locationId,
  }

  const handleClose = () => {
    uiStore.closeModal()
  }

  const handleUpdate = (values: typeof initialForm) => {
    const { name, age, location } = values

    const updatedUser: IUser = {
      id: data.id,
      name,
      age,
      locationId: location,
    }
    usersStore.updateUser(updatedUser)
    handleClose()
  }

  const { form, onSubmit, onChange } = useForm(initialForm, handleUpdate)

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <C.FAIcon icon={faHamburger} />
      </S.WindowClose>
      <C.Title1>UPDATE USER</C.Title1>
      <C.Divider />
      <TextInput {...form.name} onChange={onChange} placeholder="Name" />
      <C.Divider />
      <TextInput
        {...form.age}
        onChange={onChange}
        placeholder="Age"
        type="number"
        min={16}
        max={100}
      />
      <C.Divider />
      <Select {...form.location} onChange={onChange} placeholder="Location">
        {locationsStore.locations.map((location) => (
          <Option key={location.id} value={location.id}>
            {location.country} | {location.city}
          </Option>
        ))}
      </Select>
      <C.Divider />
      <C.Title2 weight={300}>Avatar</C.Title2>
      <C.Avatar
        src={getUserAvatar(
          form.name.value,
          form.age.value,
          form.location.value
        )}
      />
      <C.Divider height={32} heightMob={32} />
      <S.WindowActions>
        <Button color={Button.color.primary} onClick={onSubmit}>
          UPDATE
        </Button>
        <Button onClick={handleClose}>CLOSE</Button>
      </S.WindowActions>
    </S.Window>
  )
}
