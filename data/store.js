import { createStore, applyMiddleware, compose } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {
  personality: {}
}

export const actionTypes = {
  SUBMIT: 'SUBMIT'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT:
      return Object.assign({}, state, { personality: action.personality })
    default:
      return state
  }
}

export const submit = (personality) => {
  return { type: actionTypes.SUBMIT, personality: personality }
}
// create a store creator
export const makeStore = (initialState) => {
  return createStore(reducer, initialState, devToolsEnhancer())
}