import { useCallback } from 'react'
import { observer } from 'mobx-react'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import * as C from 'styles/components'
import { Button } from 'components/Button'
import { useStores } from 'hooks/useStores'
import { ILocation } from 'interfaces/location'
import { ModalsEnum, TypeModalData } from 'interfaces/ui'

export const LocationsPanel = observer(() => {
  const { locationsStore, uiStore } = useStores()

  const handleOpenModal = useCallback(
    (modal: ModalsEnum, data: TypeModalData = null) =>
      () => {
        uiStore.openModal(modal, data)
      },
    [uiStore]
  )

  return (
    <S.Panel>
      <S.LocationsTable>
        <thead>
          <tr>
            <th>№ ({locationsStore.totalLocations})</th>
            <th>Country</th>
            <th>City</th>
            <th>
              <Button
                onClick={handleOpenModal(ModalsEnum.locationCreate)}
                variant={Button.variant.outline}
                size={Button.size.sm}
              >
                ADD NEW+
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {locationsStore.locations.map((location: ILocation, idx: number) => (
            <tr key={location.id}>
              <td>{idx + 1}</td>
              <td>{location.country}</td>
              <td>{location.city}</td>
              <td>
                <Button
                  onClick={handleOpenModal(ModalsEnum.locationUpdate, location)}
                  variant={Button.variant.ghost}
                >
                  <C.FAIcon icon={faPencilAlt} />
                </Button>{' '}
                |{' '}
                <Button
                  onClick={handleOpenModal(ModalsEnum.locationDelete, location)}
                  variant={Button.variant.ghost}
                >
                  <C.FAIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.LocationsTable>
    </S.Panel>
  )
})
