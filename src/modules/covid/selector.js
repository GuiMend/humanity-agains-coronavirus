import { GET_ALL_CASES } from './actions'

export const loadingAllCases = ({ loading }) => !!loading.get(GET_ALL_CASES.ACTION)
export const allCasesSelector = ({ covid }) => covid.get('all')
