import axios from 'axios'

import { getWithCustomInstance as get } from './requests'

const COVID_API = 'https://corona.lmao.ninja'

const instance = axios.create({
  baseURL: COVID_API,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
})

export const getAllCases = () => get(['all'], {})(instance)

export const getCountries = params => get(['countries'], { params })(instance)

export const getCasesByCountry = country => get(['countries', country], {})(instance)

export const getCasesByStateUSA = () => get(['states'], {})(instance)

export const getHistoricalCases = () => get(['historical'], {})(instance)

export const getJHUCases = () => get(['jhucsse'], {})(instance)
