import { Map, List } from 'immutable'

import { createReducer } from '_utils/redux'
import { formatDate } from '_utils/date-format'

import { GET_ALL_CASES, GET_COUNTRIES, GET_JHU_CASES, GET_HISTORICAL } from './actions'

const INITIAL_STATE = new Map({
  all: {
    cases: 0,
    deaths: 0,
    recovered: 0,
    update: null,
  },
  countries: List(),
  jhu: List(),
  historical: Map(),
})

const covid = createReducer(INITIAL_STATE, {
  [GET_ALL_CASES.FULFILLED]: (state, { payload }) => state.set('all', payload),
  [GET_COUNTRIES.FULFILLED]: (state, { payload }) => state.set('countries', payload),
  [GET_JHU_CASES.FULFILLED]: (state, { payload }) => state.set('jhu', payload),
  [GET_HISTORICAL.FULFILLED]: (state, { payload: { timeline }, meta: { country } }) => {
    const formatChart = Object.entries(timeline.cases).map(([key, value]) => {
      const date = new Date(key)
      date.setDate(date.getDate() - 1)
      const yesterdayData = timeline.cases[formatDate(date, 'M/d/yy')]
      if (yesterdayData) {
        return {
          date: new Date(key),
          cases: value,
          newCases: value - yesterdayData,
          deaths: timeline.deaths[key],
          newDeaths: timeline.deaths[key] - timeline.deaths[formatDate(date, 'M/d/yy')],
        }
      }
      return {
        date: new Date(key),
        cases: value,
        newCases: 0,
        deaths: timeline.deaths[key],
        newDeaths: 0,
      }
    })

    const final = formatChart.reduce((acc, curr) => {
      if (!curr.cases && !curr.deaths) return acc
      return [...acc, curr]
    }, [])
    return state.setIn(['historical', country], final)
  },
})

export default covid
