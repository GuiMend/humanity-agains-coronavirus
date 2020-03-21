import { Map, fromJS } from 'immutable'

import { getActionName } from '_utils/redux'

export const INITIAL_STATE = Map()

export default (state = INITIAL_STATE, action) => {
  if (action.error) {
    return state.set(
      getActionName(action.type),
      fromJS(typeof action.payload === 'string' ? { error: action.payload } : action.payload)
    )
  }
  return state.delete(getActionName(action.type))
}
