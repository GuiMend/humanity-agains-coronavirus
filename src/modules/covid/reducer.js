import { Map } from 'immutable'

import { createReducer } from '_utils/redux'

import { GET_ALL_CASES } from './actions'

const INITIAL_STATE = new Map({
  all: {
    cases: 0,
    deaths: 0,
    recovered: 0,
    update: null,
  },
  jhu: null,
})

const covid = createReducer(INITIAL_STATE, {
  [GET_ALL_CASES.FULFILLED]: (state, { payload }) => state.set('all', payload),
})

export default covid
