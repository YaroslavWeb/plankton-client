import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { useStores } from '../src/hooks/useStores'
import { stores } from '../src/stores'
import theme from '../src/styles/theme'
import MainStyles from '../src/styles/main'
import FontStyles from '../src/styles/fonts'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.black,
      },
    ],
  },
  options: {
    storySort: {
      order: ['Guideline', ['Introduction', 'Architecture', 'Component', 'Stories'], 'Hooks'],
    },
  },
}

const GlobalStyles = createGlobalStyle`
  ${FontStyles}
  ${MainStyles}
`

export const decorators = [
  (Story) => {
    const { uiStore } = useStores()

    return (
      <Provider {...stores}>
        <BrowserRouter>
          <ThemeProvider theme={uiStore.theme}>
            <Story  />
            <GlobalStyles />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    )
  }
]
