import { useEffect, useCallback } from 'react'
import { observer } from 'mobx-react'

import * as S from './styles'
import { ModalComponents } from './components'
import { useStores } from 'hooks/useStores'

// Wrapper for modal windows
export const Modal = observer(() => {
  const { uiStore } = useStores()

  const handleClose = useCallback(() => {
    uiStore.closeModal()
  }, [uiStore])

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [handleEsc])

  const ModalWindow = uiStore.modal.window
    ? ModalComponents[uiStore.modal.window]
    : () => <></>

  return (
    <S.Modal isOpen={uiStore.modal.isOpen} onClick={handleClose}>
      <ModalWindow />
    </S.Modal>
  )
})
