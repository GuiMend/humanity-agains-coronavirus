import { defineAction } from '_utils/redux'
import * as covidBrazilService from '_services/covid-brazil'

export const GET_ALL_BRAZIL_CASES = defineAction('GET_ALL_BRAZIL_CASES')
export const GET_BRAZIL_DETAILS = defineAction('GET_BRAZIL_DETAILS')

export const getAllBrazilCases = () => dispatch =>
  dispatch({
    type: GET_ALL_BRAZIL_CASES.ACTION,
    payload: covidBrazilService.getAllBrazilCases(),
  })

export const getBrazilDetails = () => dispatch =>
  dispatch({
    type: GET_BRAZIL_DETAILS.ACTION,
    payload: covidBrazilService.getBrazilDetails(),
  })
