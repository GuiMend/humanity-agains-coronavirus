import { defineAction } from '_utils/redux'
import * as covidService from '_services/covid'

export const GET_ALL_CASES = defineAction('GET_ALL_CASES')
export const GET_COUNTRIES = defineAction('GET_COUNTRIES')
export const GET_CASES_BY_COUNTRY = defineAction('GET_CASES_BY_COUNTRY')
export const GET_CASES_BY_STATE_USA = defineAction('GET_CASES_BY_STATE_USA')
export const GET_HISTORICAL = defineAction('GET_HISTORICAL')
export const GET_JHU_CASES = defineAction('GET_JHU_CASES')

export const getAllCovidCases = () => dispatch =>
  dispatch({
    type: GET_ALL_CASES.ACTION,
    payload: covidService.getAllCases(),
  })

export const getCountries = () => dispatch =>
  dispatch({
    type: GET_COUNTRIES.ACTION,
    payload: covidService.getCountries(),
  })

export const getJHUCovidCases = () => dispatch =>
  dispatch({
    type: GET_JHU_CASES.ACTION,
    payload: covidService.getJHUCases(),
  })
