import styled from 'styled-components'
import { rgba } from 'polished'


export const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.order.modal};
  padding: 24px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: ${({ theme }) => rgba(theme.colors.overlay, 0.5)};

  transition: opacity ${({ theme }) => theme.durations.ms300}ms ease;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
`
