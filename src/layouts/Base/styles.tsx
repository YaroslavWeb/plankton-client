import styled from 'styled-components'
import theme from 'styles/theme'

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.font};

  transition-property: background-color, color;
  transition-duration: ${({ theme }) => theme.durations.default}ms;
  transition-timing-function: ease;
`

export const Container = styled.main`
  margin: 0 auto;
  padding: 16px;
  max-width: 1200px;

  @media ${theme.media.medium} {
    max-width: 100%;
  }
`
