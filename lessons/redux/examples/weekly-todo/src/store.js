	
import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import createSagaMiddleware from 'redux-saga'
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
 
const store = createStore(
  rootReducer,
  enhancer
)

sagaMiddleware.run(rootSaga)
 
export default store