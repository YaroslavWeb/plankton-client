import { faDragon } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import * as C from 'styles/components'
import { Button } from 'components/Button'
import { TextInput } from 'components/TextInput'
import { Select, Option } from 'components/Select'
import { useStores } from 'hooks/useStores'
import { useForm } from 'hooks/useForm'
import { IUser } from 'interfaces/user'
import { getUserAvatar } from 'helpers/getUserAvatar'

export const UserCreate = () => {
  const { uiStore, usersStore, locationsStore } = useStores()
  const initialForm = { name: '', age: '', location: '' }

  const handleClose = () => {
    uiStore.closeModal()
  }

  const handleCreate = (values: typeof initialForm) => {
    const { name, age, location } = values

    const newUser: IUser = {
      id: String(usersStore.totalUsers + 1),
      name,
      age,
      locationId: location,
    }

    usersStore.createUser(newUser)
    handleClose()
  }

  const { form, onSubmit, onChange } = useForm(initialForm, handleCreate)

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <C.FAIcon icon={faDragon} />
      </S.WindowClose>
      <C.Title1>CREATE USER</C.Title1>
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
      <C.Title2 weight="300">Avatar</C.Title2>
      <C.Avatar
        src={getUserAvatar(
          form.name.value,
          form.age.value,
          form.location.value
        )}
      />
      <C.Divider height={32} heightMob={32} />
      <S.WindowActions>
        <Button color={Button.color.success} onClick={onSubmit}>
          ADD
        </Button>
        <Button onClick={handleClose}>CLOSE</Button>
      </S.WindowActions>
    </S.Window>
  )
}
