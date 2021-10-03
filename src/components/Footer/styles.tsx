import styled from 'styled-components'

import theme from 'styles/theme'

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  max-width: ${theme.size.container.width}px;
  height: ${theme.size.footer.height}px;
  margin: 0 auto;
  padding: 16px;
  border-top: 1px solid ${theme.colors.secondary};

  & a {
    color: ${theme.colors.primaryDark};
  }
`
