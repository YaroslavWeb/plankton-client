import { observer } from 'mobx-react'
import { ThemeProvider } from 'styled-components'

import { Routing } from 'routing'
import { Modal } from 'components/Modal'
import { useStores } from 'hooks/useStores'
import GlobalStyles from 'styles/global'


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
