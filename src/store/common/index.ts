import {put, takeLatest} from "redux-saga/effects";
import {CREATE_COMMON_TYPE,CREATE_COMMON_OTHER} from "./actionTypes";
import {CommonTypeOtherAction} from './actions';

export function* addCommon(action: CommonTypeOtherAction) {
  const {payload} = action
  try {
    yield put({
      type: CREATE_COMMON_TYPE,
      payload: {common:payload.common},
    })
  } catch (err) {
    console.log(err,'error')
  }
}


export default function* commonSagas() {
  yield takeLatest(CREATE_COMMON_OTHER, addCommon)
}