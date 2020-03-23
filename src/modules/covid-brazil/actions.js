import { defineAction } from '_utils/redux'
import * as covidBrazilService from '_services/covid-brazil'

export const GET_ALL_BRAZIL_CASES = defineAction('GET_ALL_BRAZIL_CASES')
export const GET_BRAZIL_LAST_UPDATED = defineAction('GET_BRAZIL_LAST_UPDATED')

export const getAllBrazilCases = () => dispatch =>
  dispatch({
    type: GET_ALL_BRAZIL_CASES.ACTION,
    payload: covidBrazilService.getAllBrazilCases(),
  })

export const getBrazilLatUpdated = () => dispatch =>
  dispatch({
    type: GET_BRAZIL_LAST_UPDATED.ACTION,
    payload: covidBrazilService.getBrazilDetails(),
  })
