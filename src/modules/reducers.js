import { combineReducers } from 'redux'

import covidBrazil from './covid-brazil/reducer'
import covid from './covid/reducer'
import error from './error/reducer'
import loading from './loading/reducer'

const rootReducer = combineReducers({
  error,
  loading,
  covid,
  covidBrazil,
})

export default rootReducer
