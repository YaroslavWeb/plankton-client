import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledVariants } from 'interfaces/styled'
import { ButtonVariant, ButtonSize, ButtonColor } from '.'

interface ButtonProps {
  variant: ButtonVariant
  size: ButtonSize
  color: ButtonColor
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  user-select: none;
  position: relative;
  white-space: nowrap;
  outline: transparent solid 2px;
  outline-offset: 2px;
  line-height: 1.2;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  width: max-content;

  transition-property: background-color, border-color, color;
  transition-duration: ${({ theme }) => theme.durations.ms300}ms;
  transition-timing-function: ease;

  ${({
    variant = ButtonVariant.solid,
    color = ButtonColor.primary,
    theme,
  }): FlattenSimpleInterpolation => getVariant(variant, color, theme)}

  ${({ size = ButtonSize.md }) => sizes[size]}
`

const getVariant = (
  variant: ButtonVariant,
  color: ButtonColor,
  theme
): FlattenSimpleInterpolation => {
  const themeColor = theme.colors[color]
  const themeColorLight = theme.colors[color + 'Light']
  const themeColorDark = theme.colors[color + 'Dark']

  const values = {
    solid: css`
      background-color: ${themeColor};
      color: ${theme.colors.white};

      :hover {
        background-color: ${themeColorLight};
        border-color: ${themeColorLight};
      }

      :active {
        background-color: ${themeColorDark};
        border-color: ${themeColorDark};
      }
    `,
    outline: css`
      background-color: transparent;
      color: ${themeColor};
      border: 1px solid ${themeColor};

      :hover {
        background-color: ${themeColor};
        color: ${theme.colors.white};
        border-color: ${themeColor};
      }

      :active {
        background-color: transparent;
        color: ${themeColorDark};
      }
    `,
    ghost: css`
      background-color: transparent;
      color: ${themeColor};
      border: none;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;

      :hover {
        background-color: ${themeColorLight};
        color: ${theme.colors.white};
      }

      &:active {
        background-color: ${themeColorDark};
        color: ${theme.colors.white};
      }
    `,
  }
  return values[variant]
}

const sizes: StyledVariants<ButtonSize> = {
  xs: css`
    height: 24px;
    font-size: 12px;
  `,
  sm: css`
    height: 32px;
    font-size: 14px;
  `,
  md: css`
    height: 40px;
    font-size: 16px;
  `,
  lg: css`
    height: 48px;
    font-size: 18px;
  `,
}
