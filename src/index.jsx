import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './bootstrap'
import configureStore from './store/configure-store'
import Router from './router'

const root = () => {
  const initialState = {}
  const store = configureStore(initialState)
  render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
  )
}

root()
