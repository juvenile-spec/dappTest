import {Actions} from "./actions";
import {CREATE_TEST_TYPE} from "./actionTypes";
import {TestState} from './types'

const initialState: TestState = {
  test: '',
}
export default function TestReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case CREATE_TEST_TYPE:
      return {...state, test: action.payload.test}
    default:
      return state
  }
}