import { Actions } from "./actions";
import { CREATE_COMMON_TYPE, CREATE_COMMON_KEYPATH } from "./actionTypes";
import { CommonState } from './types'

const initialState: CommonState = {
  common: '',
  keyPath: ['1']
}
export default function CommonReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case CREATE_COMMON_TYPE:
      return { ...state, common: action.payload.common }
    case CREATE_COMMON_KEYPATH:
      return { ...state, keyPath: action.payload.keyPath }
    default:
      return state
  }
}