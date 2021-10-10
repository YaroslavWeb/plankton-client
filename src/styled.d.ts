import 'styled-components';

declare module 'styled-components' {
  export interface ITheme {
    colors: {
      [key: string]: string
    },
    media: {
      [key: string]: string
    },
    sizes: {
      [key: string]: {
        height?: number
        width?: number
      }
    },
    durations: {
      [key: string]: number
    }
    order: {
      [key: string]: number
    }
  }
}