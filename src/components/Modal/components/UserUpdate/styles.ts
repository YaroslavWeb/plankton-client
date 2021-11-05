import styled from 'styled-components'

import { BaseWindow, BaseWindowClose } from '../styles'

export const Window = styled(BaseWindow)`
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 2px;
  padding: 24px 30px;
`

export const WindowClose = styled(BaseWindowClose)`
  right: 30px;
  top: 24px;
`

export const WindowActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`
