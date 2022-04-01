import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducers'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const isDevMode = process.env.NODE_ENV !== 'production';

let enhancer
if (isDevMode && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true }),
  );
} else {
  enhancer = compose(applyMiddleware(sagaMiddleware));
}

// const logger = store => next => action => {
//   console.group(action.type)
//   console.log('prev state', store.getState())
//   console.info('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   console.groupEnd()
//   return result
// }

// export const store = createStore(rootReducer, applyMiddleware(logger, thunk))
// export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
export const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)