import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension' // eslint-disable-line import/no-extraneous-dependencies

import rootReducer from '_modules/reducers'
import errorMiddleware from '_middlewares/error'

const configureStore = preloadedState => {
  const middlewares = [thunk, promise, errorMiddleware]
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(...middlewares, logger))
    )
  }
  return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
}

export default configureStore
