import {combineReducers} from "redux";
import commonReducer from './common/reducer'
import testReducer from './test/reducer'

const rootReducer = combineReducers({
  common:commonReducer,
  test:testReducer,
});

export default rootReducer
