import { DefaultTheme } from 'styled-components'
import { ThemeEnum, ITheme } from 'interfaces/styled'

const baseTheme: ITheme = {
  colors: {
    primary: '#7986cb',
    primaryDark: '#5c6bc0',
    primaryLight: '#9fa8da',
    secondary: '#2b2b2b',
    secondaryDark: '#1f1f1f',
    secondaryLight: '	#383838',
    success: '#4caf50',
    successDark: '#43a047',
    successLight: '#66bb6a',
    danger: '#f44336 ',
    dangerDark: '#e53935',
    dangerLight: '#ef5350 ',

    white: '#E5E4E8',
    black: '#19191B',
    
    error: '#f46666',
    overlay: '#383838',

    bg: '#E5E4E8',
    font: '#19191B',
  },

  // Source: https://getbootstrap.com/docs/4.0/layout/grid/
  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },

  // in px
  sizes: {
    header: { height: 56 },
    container: { width: 1200 },
    footer: { height: 128 },
    modal: { width: 540 },
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    modal: 100,
  },
}


export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    bg: '#E5E4E8',
    font: '#19191B',
  },
}

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg: '#19191B',
    font: '#E5E4E8',
  },
}