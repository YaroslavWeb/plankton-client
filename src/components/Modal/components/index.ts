import { LocationCreate } from './LocationCreate'
import { LocationDelete } from './LocationDelete'
import { LocationUpdate } from './LocationUpdate'
import { UserCreate } from './UserCreate'
import { UserDelete } from './UserDelete'
import { UserUpdate } from './UserUpdate'
import { ModalsEnum } from 'interfaces/ui'

export const ModalComponents = {
  [ModalsEnum.locationCreate]: LocationCreate,
  [ModalsEnum.locationDelete]: LocationDelete,
  [ModalsEnum.locationUpdate]: LocationUpdate,
  [ModalsEnum.userCreate]: UserCreate,
  [ModalsEnum.userDelete]: UserDelete,
  [ModalsEnum.userUpdate]: UserUpdate,
}
