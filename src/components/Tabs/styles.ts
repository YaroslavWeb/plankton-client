import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { getTransition } from 'helpers/styled'

export const Tabs = styled.div``
export const TabBar = styled.div`
  display: flex;
  justify-content: space-between;
`

interface TabBarItemProps {
  $isActive: boolean
}

export const TabBarItem = styled(Link)<TabBarItemProps>`
  flex-grow: 1;
  padding: 4px 12px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  cursor: pointer;

  ${({ theme }) =>
    getTransition(theme.durations.ms300, [
      'background-color',
      'color',
    ])}

  ${({ theme, $isActive }) =>
    $isActive
      ? css`
          background-color: ${theme.colors.secondaryDark};
          color: ${theme.colors.primary};
        `
      : css`
          background-color: ${theme.colors.bg};
          color: ${theme.colors.primaryDark};
        `}
`

export const TabPanels = styled.div`
  padding: 12px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 0 0 5px 5px;
`
