import { GET_ALL_BRAZIL_CASES } from './actions'

export const loadingBrazilAllCases = ({ loading }) => !!loading.get(GET_ALL_BRAZIL_CASES.ACTION)
export const allBrazilCasesSelector = ({ covidBrazil }) => covidBrazil.get('results')
