import styled, { css } from 'styled-components'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

import { spin } from './animations'

interface DividerProps {
  height?: number
  heightMob?: number
}

export const Divider = styled.div<DividerProps>`
  height: ${({ height = 8 }) => height}px;

  @media ${({ theme }) => theme.media.large} {
    height: ${({ heightMob = 4 }) => heightMob}px;
  }
`

interface TitleProps {
  weight?: 200 | 300 | 400 | 500 | 600 | 700
}

export const Title1 = styled.h1<TitleProps>`
  font-size: 24px;
  font-weight: ${({ weight }) => weight || 700};
`

export const Title2 = styled.h2<TitleProps>`
  font-size: 18px;
  font-weight: ${({ weight }) => weight || 700};
`

type TextProps = TitleProps

export const Text1 = styled.span<TextProps>`
  font-size: 18px;
  font-weight: ${({ weight }) => weight || 400};
`

export const SupText = styled.sup`
  font-size: 14px;
  font-weight: 300;
`

interface FAIconProps extends FontAwesomeIconProps {
  $animated?: boolean
}

export const FAIcon = styled(FontAwesomeIcon)<FAIconProps>`
  ${({ $animated }) =>
    $animated
      ? css`
          animation: ${spin} 4s infinite linear;
        `
      : css`
          animation: none;
        `}
`

export const Avatar = styled.img`
  display: flex;
  margin: 0 auto;
  height: 120px;
  min-width: 108px;
  padding: 4px;
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0 0 5px 5px;
`
