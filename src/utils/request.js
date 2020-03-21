const DEFAULT_AUTHORIZATION_KEYWORD = 'Token '
const DEFAULT_AUTHORIZATION_HEADER = 'Authorization'

const ensureTrailingAndLeadingSlash = (url, removeTrailingSlash) =>
  `/${url}${removeTrailingSlash ? '' : '/'}`.replace(/\/\//g, '/')

export const parseURL = (url, removeTrailingSlash = false) => {
  if (Array.isArray(url)) {
    return ensureTrailingAndLeadingSlash(url.join('/'), removeTrailingSlash)
  }
  return ensureTrailingAndLeadingSlash(url, removeTrailingSlash)
}

export const parseConfig = ({ key, ...config } = {}) => {
  const newConfig = { headers: {}, ...config }

  if (key) {
    newConfig.headers[DEFAULT_AUTHORIZATION_HEADER] = `${DEFAULT_AUTHORIZATION_KEYWORD}${key}`
  }

  return newConfig
}
