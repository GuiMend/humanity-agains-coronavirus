import { Map, List } from 'immutable'

import { createReducer } from '_utils/redux'

import { GET_ALL_BRAZIL_CASES, GET_BRAZIL_LAST_UPDATED } from './actions'

const INITIAL_STATE = new Map({
  lastUpdated: null,
  results: List(),
})

const covidBrazil = createReducer(INITIAL_STATE, {
  [GET_ALL_BRAZIL_CASES.FULFILLED]: (state, { payload: { results } }) =>
    state.set('results', results),
  [GET_BRAZIL_LAST_UPDATED.FULFILLED]: (state, { payload: { tables } }) =>
    state.set('lastUpdated', tables.find(table => table.name === 'caso')?.importDate),
})

export default covidBrazil
