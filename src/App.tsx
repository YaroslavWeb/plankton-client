import { observer } from 'mobx-react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Routing } from 'routing'
import { Modal } from 'components/Modal'
import MainStyles from 'styles/main'
import FontStyles from 'styles/fonts'
import { useStores } from 'hooks/useStores'

const GlobalStyles = createGlobalStyle`
  ${FontStyles}
  ${MainStyles}
`

const App = observer(() => {
  const { uiStore } = useStores()
  return (
    <ThemeProvider theme={uiStore.theme}>
      <Routing />
      <Modal />
      <GlobalStyles />
    </ThemeProvider>
  )
})

export default App
