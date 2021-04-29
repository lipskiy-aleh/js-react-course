import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer as reducers } from './reducers'

import { rootSaga } from './sagas/root.saga'
 
const isDevMode = process.env.NODE_ENV !== 'production';

const sagaMiddleware = createSagaMiddleware()
 
let enhancer
if (isDevMode && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true }),
  );
} else {
  enhancer = compose(applyMiddleware(sagaMiddleware));
}
 
export const store = createStore(
  reducers,
  enhancer
)

sagaMiddleware.run(rootSaga)
