import { Route, Switch } from 'react-router-dom'

import { BaseLayout } from 'layouts/Base'
import { HomePage } from 'pages/Home'

export const Routing = () => {
  return (
    <Switch>
      <BaseLayout>
        <Route exact path="*" component={HomePage} />
      </BaseLayout>
    </Switch>
  )
}
