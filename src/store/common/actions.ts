import {
  CREATE_COMMON_TYPE,
  CREATE_COMMON_OTHER,
  CREATE_COMMON_KEYPATH,
} from './actionTypes'

export interface Actions {
  type: string,
  payload?: any,
  [x: string]: any
}


export interface CommonTypePayload {
  common: string,
}

export interface CommonTypeAction {
  type: typeof CREATE_COMMON_TYPE,
  payload: CommonTypePayload,
}

export const commonType = (payload: CommonTypePayload):CommonTypeAction => ({
  type: CREATE_COMMON_TYPE,
  payload,
})

export interface CommonTypeOtherAction {
  type: typeof CREATE_COMMON_OTHER,
  payload: CommonTypePayload,
}

export const commonTypeOther = (payload: CommonTypePayload):CommonTypeOtherAction => ({
  type: CREATE_COMMON_OTHER,
  payload,
})


export interface KeyPathPayload {
  keyPath: string[],
}
export interface KeyPathAction {
  type: typeof CREATE_COMMON_KEYPATH,
  payload: KeyPathPayload,
}

export const keyPathType = (payload: KeyPathPayload):KeyPathAction => ({
  type: CREATE_COMMON_KEYPATH,
  payload,
})