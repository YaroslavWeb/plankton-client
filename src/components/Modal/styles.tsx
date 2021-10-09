import styled from 'styled-components'

import theme from 'styles/theme'

export const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${theme.order.modal};
  padding: 24px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: ${({ theme }) => theme.colors.overlay};

  transition: opacity ${theme.durations.default}ms ease;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
`