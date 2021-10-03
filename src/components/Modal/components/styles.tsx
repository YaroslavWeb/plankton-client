import styled from 'styled-components'
import theme from 'styles/theme'

export const BaseWindow = styled.div.attrs(() => ({
  onClick: (e) => e.stopPropagation(),
}))`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.font};
  width: ${theme.size.modal.width}px;
  max-width: 90%;

  @media ${theme.media.medium} {
    width: 100vw;
    max-width: 100%;
  }
`

export const BaseWindowClose = styled.span`
  position: absolute;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  transition: ${({ theme }) => theme.durations.default}ms linear color;

  :active {
    color: ${({ theme }) => theme.colors.primary};
  }
`
