import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.sizes.header.height}px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 24px;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.order.header};
`

export const HeaderTitle = styled.div`
  display: flex;
`

