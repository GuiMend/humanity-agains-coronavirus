import { defineAction } from '_utils/redux'
import * as covidBrazilService from '_services/covid-brazil'

export const GET_ALL_BRAZIL_CASES = defineAction('GET_ALL_BRAZIL_CASES')
export const GET_BRAZIL_STATES_CASES = defineAction('GET_BRAZIL_STATES_CASES')
export const GET_BRAZIL_LAST_UPDATED = defineAction('GET_BRAZIL_LAST_UPDATED')
export const GET_BRAZIL_CITIES_CASES = defineAction('GET_BRAZIL_CITIES_CASES')

export const getAllBrazilCases = params => dispatch =>
  dispatch({
    type: GET_ALL_BRAZIL_CASES.ACTION,
    payload: covidBrazilService.getAllBrazilCases(params),
  })

export const getBrazilStatesCases = () => dispatch =>
  dispatch({
    type: GET_BRAZIL_STATES_CASES.ACTION,
    payload: covidBrazilService.getAllBrazilCases({ place_type: 'state' }),
  })

export const getBrazilCitiesCases = params => dispatch =>
  dispatch({
    type: GET_BRAZIL_CITIES_CASES.ACTION,
    payload: covidBrazilService.getAllBrazilCases(params),
  })

export const getBrazilLatUpdated = () => dispatch =>
  dispatch({
    type: GET_BRAZIL_LAST_UPDATED.ACTION,
    payload: covidBrazilService.getBrazilDetails(),
  })
