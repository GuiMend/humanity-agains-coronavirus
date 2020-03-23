import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import App from '_views/app'
import Dashboard from '_views/dashboard'
import BrazilDashboard from '_views/brazil-dashboard'
import NotFoundPage from '_views/not-found'

const Router = () => (
  <ReachRouter>
    <App path="/">
      <BrazilDashboard path="/" />
      <Dashboard path="/world" />
      <Dashboard path="/mundo" />
    </App>
    <NotFoundPage default />
  </ReachRouter>
)

export default Router
