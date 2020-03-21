import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from '_store/configure-store'

import App from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const initialState = {}
  const store = configureStore(initialState)

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  )
  unmountComponentAtNode(div)
})
