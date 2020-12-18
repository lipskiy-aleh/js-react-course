import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const isDevMode = process.env.NODE_ENV !== 'production';
 
let enhancer
if (isDevMode && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true }),
  );
} else {
  enhancer = compose(applyMiddleware(thunk));
}
 

export const store = createStore(rootReducer, enhancer)