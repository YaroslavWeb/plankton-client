import styled from 'styled-components'

export const BaseWindow = styled.div.attrs(() => ({
  onClick: (e) => e.stopPropagation(),
}))`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.font};
  width: ${({ theme }) => theme.sizes.modal.width}px;
  max-width: 90%;

  @media ${({ theme }) => theme.media.medium} {
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
  transition: ${({ theme }) => theme.durations.ms300}ms linear color;

  :active {
    color: ${({ theme }) => theme.colors.primary};
  }
`
