import axios from 'axios'
import humps from 'humps'

import { parseURL, parseConfig } from '_utils/request'
import { API_URL } from '_config/environment'
import { createFormData } from '_utils/helpers'

const instance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
})

const returnData = transformPayload => response =>
  transformPayload ? humps.camelizeKeys(response.data) : response.data

const handleResponseError = error =>
  new Promise((resolve, reject) =>
    error && error.response ? reject(error.response.data) : reject()
  )

// decamelize keys for the API
const decamelizePayload = data =>
  data instanceof FormData ? createFormData(data, false) : humps.decamelizeKeys(data)

// Check if should be decamelized or not
const parsePayload = (data, transformPayload) => (transformPayload ? decamelizePayload(data) : data)

const parseParams = (newInstance, url, config, data) => fn => {
  const { removeTrailingSlash, transformPayload, ...configParams } = config
  if (
    fn === instance.delete ||
    fn === instance.get ||
    fn === newInstance.delete ||
    fn === newInstance.get
  ) {
    return fn(parseURL(url, removeTrailingSlash), parseConfig(configParams))
      .then(returnData(transformPayload))
      .catch(handleResponseError)
  }
  return fn(
    parseURL(url, removeTrailingSlash),
    parsePayload(data, transformPayload),
    parseConfig(configParams)
  )
    .then(returnData(transformPayload))
    .catch(handleResponseError)
}

export const post = (...params) => parseParams(null, ...params)(instance.post)
export const patch = (...params) => parseParams(null, ...params)(instance.patch)
export const put = (...params) => parseParams(null, ...params)(instance.put)
export const upload = (...params) => parseParams(null, ...params)(instance.post)
export const del = (...params) => parseParams(null, ...params)(instance.delete)
export const get = (...params) => parseParams(null, ...params)(instance.get)

export const postWithCustomInstance = (...params) => newInstance =>
  parseParams(newInstance, ...params)(newInstance.post)
export const patchWithCustomInstance = (...params) => newInstance =>
  parseParams(newInstance, ...params)(newInstance.patch)
export const putWithCustomInstance = (...params) => newInstance =>
  parseParams(newInstance, ...params)(newInstance.put)
export const uploadWithCustomInstance = (...params) => newInstance =>
  parseParams(newInstance, ...params)(newInstance.post)
export const delWithCustomInstance = (...params) => newInstance =>
  parseParams(newInstance, ...params)(newInstance.delete)
export const getWithCustomInstance = (...params) => newInstance =>
  parseParams(newInstance, ...params)(newInstance.get)

instance.getURL = url => API_URL + parseURL(url)

export default instance
