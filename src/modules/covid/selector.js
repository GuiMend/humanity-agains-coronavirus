import { GET_ALL_CASES, GET_COUNTRIES, GET_JHU_CASES, GET_HISTORICAL } from './actions'

export const loadingAllCases = ({ loading }) => !!loading.get(GET_ALL_CASES.ACTION)
export const allCasesSelector = ({ covid }) => covid.get('all')

export const loadingCountriesCases = ({ loading }) => !!loading.get(GET_COUNTRIES.ACTION)
export const countriesCasesSelector = ({ covid }) => covid.get('countries')

export const loadingJHUCases = ({ loading }) => !!loading.get(GET_JHU_CASES.ACTION)
export const jhuCasesSelector = ({ covid }) => covid.get('jhu')

export const loadingHistoricalData = ({ loading }) => !!loading.get(GET_HISTORICAL.ACTION)
export const historicalDataSelector = country => ({ covid }) =>
  covid?.get?.('historical')?.get?.(country)
