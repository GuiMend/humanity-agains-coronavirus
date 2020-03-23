import axios from 'axios'

import { getWithCustomInstance as get } from './requests'

const COVID_BRAZIL_API = 'https://brasil.io/api/dataset'

const instance = axios.create({
  baseURL: COVID_BRAZIL_API,
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
})

export const getAllBrazilCases = () =>
  get(['covid19', 'caso', 'data'], { removeTrailingSlash: true, transformPayload: true })(instance)

export const getBrazilDetails = () =>
  get(['covid19'], { removeTrailingSlash: true, transformPayload: true })(instance)
