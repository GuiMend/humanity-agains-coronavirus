import { GET_ALL_BRAZIL_CASES, GET_BRAZIL_LAST_UPDATED } from './actions'

export const loadingBrazilAllCases = ({ loading }) => !!loading.get(GET_ALL_BRAZIL_CASES.ACTION)
export const allBrazilCasesSelector = ({ covidBrazil }) => covidBrazil.get('results')

export const loadingLastUpdated = ({ loading }) => !!loading.get(GET_BRAZIL_LAST_UPDATED.ACTION)
export const lastUpdatedSelector = ({ covidBrazil }) => covidBrazil.get('lastUpdated')
