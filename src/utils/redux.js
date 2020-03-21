import { defineAction as reduxDefine } from 'redux-define'

const REQUEST = ['PENDING', 'FULFILLED', 'REJECTED', 'COUNT']

export const defineAction = type => reduxDefine(type, REQUEST)

export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  const reduceFn = handlers[action.type]
  return reduceFn ? reduceFn(state, action) : state
}

export const getActionName = name =>
  name.toString().replace(/_PENDING$|_REJECTED$|_FULFILLED$|_COUNT$/, '')
