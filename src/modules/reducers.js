import { combineReducers } from 'redux'

import covid from './covid/reducer'
import error from './error/reducer'
import loading from './loading/reducer'

const rootReducer = combineReducers({
  error,
  loading,
  covid,
})

export default rootReducer
