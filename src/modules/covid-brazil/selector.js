import {
  GET_ALL_BRAZIL_CASES,
  GET_BRAZIL_LAST_UPDATED,
  GET_BRAZIL_STATES_CASES,
  GET_BRAZIL_CITIES_CASES,
} from './actions'

export const loadingBrazilAllCases = ({ loading }) => !!loading.get(GET_ALL_BRAZIL_CASES.ACTION)
export const allBrazilCasesSelector = ({ covidBrazil }) => covidBrazil.get('results')

export const loadingBrazilStateCases = ({ loading }) =>
  !!loading.get(GET_BRAZIL_STATES_CASES.ACTION)
export const brazilStateCasesSelector = ({ covidBrazil }) => covidBrazil.get('states')

export const loadingBrazilCitiesCases = ({ loading }) =>
  !!loading.get(GET_BRAZIL_CITIES_CASES.ACTION)
export const brazilCitiesCasesSelector = ({ covidBrazil }) => covidBrazil.get('cities')

export const loadingLastUpdated = ({ loading }) => !!loading.get(GET_BRAZIL_LAST_UPDATED.ACTION)
export const lastUpdatedSelector = ({ covidBrazil }) => covidBrazil.get('lastUpdated')
