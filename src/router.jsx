import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import App from '_views/app'
import WorldDashboard from '_views/dashboard/world'
import BrazilDashboard from '_views/dashboard/brazil'
import NotFoundPage from '_views/not-found'

const Router = () => (
  <ReachRouter>
    <App path="/">
      <BrazilDashboard path="/" />
      <WorldDashboard path="/world" />
      <WorldDashboard path="/mundo" />
    </App>
    <NotFoundPage default />
  </ReachRouter>
)

export default Router
