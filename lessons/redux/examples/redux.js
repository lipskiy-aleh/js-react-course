
function counter(state, action) {
  console.log(action)
  if (typeof state === 'undefined') {
    return 0
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = Redux.createStore(counter)
console.log(store)

var valueEl = document.getElementById('value')

function render() {
  valueEl.innerHTML = store.getState().toString()
}

render()
const unsubscribeRenderFunc = store.subscribe(render)

function incrementAction() {
  return {
    type: 'INCREMENT'
  }
}

function decrementAction() {
  return {
    type: 'DECREMENT'
  }
}

document.getElementById('increment')
  .addEventListener('click', function () {
    if(store.getState() >= 10) {
      unsubscribeRenderFunc()
    }
    store.dispatch(incrementAction())
  })

document.getElementById('decrement')
  .addEventListener('click', function () {
    store.dispatch(decrementAction())
  })

document.getElementById('incrementIfOdd')
  .addEventListener('click', function () {
    if (store.getState() % 2 !== 0) {
      store.dispatch(incrementAction())
    }
  })

document.getElementById('incrementAsync')
  .addEventListener('click', function () {
    setTimeout(function () {
      store.dispatch(incrementAction())
    }, 1000)
  })



class Store {
  constructor(reducer) {
    this.reducer = reducer
    this.state = null
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action)
    this.notify()
  }

  notify() {

  }
}
