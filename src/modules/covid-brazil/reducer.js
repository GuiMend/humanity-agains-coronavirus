import { Map, List } from 'immutable'

import { createReducer } from '_utils/redux'

import { GET_ALL_BRAZIL_CASES, GET_BRAZIL_DETAILS } from './actions'

const INITIAL_STATE = new Map({
  details: null,
  results: List(),
})

const covidBrazil = createReducer(INITIAL_STATE, {
  [GET_ALL_BRAZIL_CASES.FULFILLED]: (state, { payload: { results } }) =>
    state.set('results', results),
  [GET_BRAZIL_DETAILS.FULFILLED]: (state, { payload }) => state.set('details', payload),
})

export default covidBrazil
