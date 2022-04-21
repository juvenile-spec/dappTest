import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootSaga  from './sagas'
import rootReducer from './reducers'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const composeEnhancers = compose;


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['common'],
  stateReconciler : autoMergeLevel1 ,
}

export type RootState = ReturnType<typeof rootReducer>
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(
    sagaMiddleware,
  )
));
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);