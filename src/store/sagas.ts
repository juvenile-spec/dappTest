import { all } from 'redux-saga/effects'
import commonSages from './common'
import testSages from './test'



export default function* rootSaga () {
  yield all([
    commonSages(),
    testSages(),
  ])
}