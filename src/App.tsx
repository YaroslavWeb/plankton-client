import { Provider, observer } from 'mobx-react'
import { ThemeProvider } from 'styled-components'

import { stores } from 'stores'
import { Routing } from 'routing'
import { Modal } from 'components/Modal'
import { useStores } from 'hooks/useStores'
import GlobalStyles from 'styles/global'

const App = observer(() => {
  // uiStore хранит в себе тему, которую мы создали ранее
  const { uiStore } = useStores()

  return (
    <Provider {...stores}>
      <ThemeProvider theme={uiStore.theme}>
        <Routing />
        <Modal />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  )
})

export default App
