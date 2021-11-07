import { FlattenSimpleInterpolation } from 'styled-components'

export enum ThemeEnum  {
  light = "light",
  dark = "dark"
} 

export interface ITheme {
  colors: {
    primary: string,
    primaryDark: string,
    primaryLight: string,
    secondary: string,
    secondaryDark: string,
    secondaryLight: string,
    success: string,
    successDark: string,
    successLight: string,
    danger: string,
    dangerDark: string,
    dangerLight: string,

    error: string
    overlay: string

    white: string
    black: string

    bg: string
    font: string
  }

  media: {
    extraLarge: string
    large: string
    medium: string
    small: string
  }

  sizes: {
    header: { height: number }
    container: { width: number }
    footer: { height: number }
    modal: { width: number }
  },

  durations: {
    ms300: number,
  }

  order: {
    header: number,
    modal: number,
  }
}

export type StyledVariants<E extends string | number> = {
  [key in E]?: FlattenSimpleInterpolation
}
