import { createReducer } from '_utils/redux'
import { Car } from '_models'

import { GET_PERFECT_BMW } from './actions'

const INITIAL_STATE = new Car()

const car = createReducer(INITIAL_STATE, {
  [GET_PERFECT_BMW.FULFILLED]: (state, { payload }) => state.mergeProps(payload),
})

export default car
