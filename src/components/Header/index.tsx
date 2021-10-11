import { observer } from 'mobx-react'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

import * as S from './styles'
import * as C from 'styles/components'
import { Button } from 'components/Button'
import { useStores } from 'hooks/useStores'
import { useCallback } from 'react'

export const Header = observer(() => {
  const { uiStore } = useStores()

  const toggleTheme = useCallback(() => {
    uiStore.toggleTheme()
  }, [uiStore])

  return (
    <S.Header>
      <S.HeaderTitle>
        <C.Title1 weight="200">Plankton</C.Title1>
        <C.SupText>React + Mobx + SC</C.SupText>
      </S.HeaderTitle>
      <Button
        onClick={toggleTheme}
        variant={Button.variant.ghost}
        color={Button.color.secondary}
        size={Button.size.lg}
      >
        <C.FAIcon
          color={uiStore.isLightTheme ? '#8c16c7' : '#c7a716'}
          icon={uiStore.isLightTheme ? faMoon : faSun}
        />
      </Button>
    </S.Header>
  )
})
