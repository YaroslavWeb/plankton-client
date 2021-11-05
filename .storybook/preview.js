import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { useStores } from '../src/hooks/useStores'
import { stores } from '../src/stores'
import { lightTheme } from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

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
        value: lightTheme.colors.white,
      },
      {
        name: 'dark',
        value: lightTheme.colors.black,
      },
    ],
  },
  options: {
    storySort: {
      order: ['Guideline', ['Introduction', 'Architecture', 'Component', 'Stories'], 'Hooks'],
    },
  },
}

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
