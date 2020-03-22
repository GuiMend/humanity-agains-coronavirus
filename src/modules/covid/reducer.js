import { Map, List } from 'immutable'

import { createReducer } from '_utils/redux'

import { GET_ALL_CASES, GET_COUNTRIES, GET_JHU_CASES } from './actions'

const INITIAL_STATE = new Map({
  all: {
    cases: 0,
    deaths: 0,
    recovered: 0,
    update: null,
  },
  countries: List(),
  jhu: List(),
})

const covid = createReducer(INITIAL_STATE, {
  [GET_ALL_CASES.FULFILLED]: (state, { payload }) => state.set('all', payload),
  [GET_COUNTRIES.FULFILLED]: (state, { payload }) => state.set('countries', payload),
  [GET_JHU_CASES.FULFILLED]: (state, { payload }) => state.set('jhu', payload),
})

export default covid
