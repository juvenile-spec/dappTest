import {
  CREATE_TEST_TYPE,
  CREATE_TEST_OTHER
} from './actionTypes'

export interface Actions {
  type: string,
  payload?: any,
  [x: string]: any
}


export interface TestTypePayload {
  test: string,
}

export interface TestTypeAction {
  type: typeof CREATE_TEST_TYPE,
  payload: TestTypePayload,
}

export const testType = (payload: TestTypePayload):TestTypeAction => ({
  type: CREATE_TEST_TYPE,
  payload,
})

export interface TestTypeOtherAction {
  type: typeof CREATE_TEST_OTHER,
  payload: TestTypePayload,
}

export const testTypeOther = (payload: TestTypePayload):TestTypeOtherAction => ({
  type: CREATE_TEST_OTHER,
  payload,
})