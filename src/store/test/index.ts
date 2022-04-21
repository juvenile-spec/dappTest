import {put, takeLatest} from "redux-saga/effects";
import {CREATE_TEST_TYPE,CREATE_TEST_OTHER} from "./actionTypes";
import {TestTypeOtherAction} from './actions';

export function* addTest(action: TestTypeOtherAction) {
  const {payload} = action
  try {
    yield put({
      type: CREATE_TEST_TYPE,
      payload: {test:payload.test},
    })
  } catch (err) {
    console.log(err,'error')
  }
}


export default function* testSagas() {
  yield takeLatest(CREATE_TEST_OTHER, addTest)
}