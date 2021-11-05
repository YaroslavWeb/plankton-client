import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  max-width: ${({ theme }) => theme.sizes.container.width}px;
  height: ${({ theme }) => theme.sizes.footer.height}px;
  margin: 0 auto;
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};

  & a {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`
