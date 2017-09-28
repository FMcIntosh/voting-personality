import { createStore } from 'redux'

const initialState = {
  oppenness: 0
}

export const actionTypes = {
  SUBMIT: 'SUBMIT'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.SUBMIT:
          return Object.assign({}, state, { oppenness: action.oppenness })
      default:
          return state
  }
}

export const submit = (o) =>  {
  return { type: actionTypes.SUBMIT, oppenness: o }
}
// create a store creator
export const makeStore = (initialState) => {
  return createStore(reducer, initialState);
}