import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import App from '_views/app'
import WorldDashboard from '_views/dashboard/world'
import BrazilDashboard from '_views/dashboard/brazil'
import BrazilStateDashboard from '_views/dashboard/brazil-state'
import NotFoundPage from '_views/not-found'

const Router = () => (
  <ReachRouter>
    <App path="/">
      <BrazilDashboard path="/" />
      <BrazilStateDashboard path="/brazil/:state" />
      <BrazilStateDashboard path="/brasil/:state" />
      <WorldDashboard path="/world" />
      <WorldDashboard path="/mundo" />
    </App>
    <NotFoundPage default />
  </ReachRouter>
)

export default Router
