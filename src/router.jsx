import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import App from '_views/app'
import NotFoundPage from '_views/not-found'

const Router = () => (
  <ReachRouter>
    <App path="/" />
    <NotFoundPage default />
  </ReachRouter>
)

export default Router
