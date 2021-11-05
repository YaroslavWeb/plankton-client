import { PropsWithChildren } from 'react'

import * as S from './styles'

export enum ButtonVariant {
  solid = 'solid',
  outline = 'outline',
  ghost = 'ghost',
}

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
}

export enum ButtonSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export interface ButtonProps {
  onClick?: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  color?: ButtonColor
}

const ButtonComponent = ({
  children,
  onClick,
  variant = ButtonVariant.solid,
  size = ButtonSize.md,
  color = ButtonColor.primary,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <S.Button onClick={onClick} variant={variant} size={size} color={color}>
      <span>{children}</span>
    </S.Button>
  )
}

ButtonComponent.variant = ButtonVariant
ButtonComponent.size = ButtonSize
ButtonComponent.color = ButtonColor

export const Button = ButtonComponent
