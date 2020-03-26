import { Map, List } from 'immutable'

import { createReducer } from '_utils/redux'

import {
  GET_ALL_BRAZIL_CASES,
  GET_BRAZIL_LAST_UPDATED,
  GET_BRAZIL_STATES_CASES,
  GET_BRAZIL_CITIES_CASES,
} from './actions'

const INITIAL_STATE = new Map({
  lastUpdated: null,
  results: List(),
  states: List(),
  cities: List(),
})

const covidBrazil = createReducer(INITIAL_STATE, {
  [GET_ALL_BRAZIL_CASES.FULFILLED]: (state, { payload: { results } }) =>
    state.set('results', results),

  [GET_BRAZIL_STATES_CASES.FULFILLED]: (state, { payload: { results } }) => {
    const statesFormated = results.reduce((acc, curr) => {
      if (acc.find(_ => _.state === curr.state)) {
        if (acc.find(_ => _.state === curr.state && _.todayCases === null)) {
          return acc.map(_ =>
            _.state === curr.state
              ? {
                  ..._,
                  todayCases: _.confirmed - curr.confirmed,
                  todayDeaths: _.deaths - curr.deaths,
                }
              : _
          )
        }
        return acc
      }

      return [...acc, { ...curr, cases: curr.confirmed, todayCases: null, todayDeaths: null }]
    }, [])
    return state.set('states', statesFormated)
  },

  [GET_BRAZIL_CITIES_CASES.FULFILLED]: (state, { payload: { results } }) => {
    let citiesFormated = results.reduce((acc, curr) => {
      if (curr.placeType === 'state') return acc

      if (acc.find(_ => _.cityIbgeCode === curr.cityIbgeCode)) {
        if (acc.find(_ => _.cityIbgeCode === curr.cityIbgeCode && _.todayCases === null)) {
          return acc.map(_ => {
            return _.cityIbgeCode === curr.cityIbgeCode
              ? {
                  ..._,
                  todayCases: _.cases - curr.confirmed,
                  todayDeaths: _.deaths - curr.deaths,
                }
              : _
          })
        }
        return acc
      }

      return [
        ...acc,
        { ...curr, cases: curr.confirmed, todayCases: null, todayDeaths: null, setToday: false },
      ]
    }, [])

    const { cases, deaths } = citiesFormated.reduce(
      (acc, curr) => ({ cases: acc.cases + curr.cases, deaths: acc.deaths + curr.deaths }),
      { cases: 0, deaths: 0 }
    )
    const currState = results.find(_ => _.placeType === 'state')
    if (currState.confirmed !== cases || currState.deaths !== deaths) {
      citiesFormated = [
        ...citiesFormated,
        {
          city: 'nonInformed',
          cases: currState.confirmed - cases,
          deaths: currState.deaths - deaths,
          todayCases: null,
          todayDeaths: null,
          confirmedPer100kInhabitants: null,
        },
      ]
    }

    return state.set('cities', citiesFormated)
  },

  [GET_BRAZIL_LAST_UPDATED.FULFILLED]: (state, { payload: { tables } }) =>
    state.set('lastUpdated', tables.find(table => table.name === 'caso')?.importDate),
})

export default covidBrazil
