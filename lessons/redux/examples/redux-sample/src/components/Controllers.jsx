import { useRef } from 'react'
import { connect, useDispatch, useStore, useSelector } from 'react-redux'
import { incrementAction, decrementAction } from '../actions'

import { countSelector } from '../selectors'

export function Controllers() {
  const inputRef = useRef(null)

  const store = useStore()
  const dispatch = useDispatch()
  const count = useSelector(countSelector)

  const resetInputValue = () => {
    inputRef.current.value = ''
  }

  const onIncrementClick = () => {
    const num = Number(inputRef.current.value)
    if (num === 0 || isNaN(num)) {
      dispatch(incrementAction(1))
      resetInputValue()
    } else {
      dispatch(incrementAction(num))
    }
  }

  const onDecrementClick = () => {
    const num = Number(inputRef.current.value)
    if (num === 0 || isNaN(num)) {
      dispatch(decrementAction(1))
      resetInputValue()
    } else {
      dispatch(decrementAction(num))
    }
  }

  return (
    <p>
      <button onClick={onIncrementClick}>+</button>
      <input ref={inputRef} />
      <button onClick={onDecrementClick}>-</button>
    </p>
  )
}


// function ControllersCmp({
//   onIncrement,
//   onDecrement,
// }) {
//   const inputRef = useRef(null)

//   const resetInputValue = () => {
//     inputRef.current.value = ''
//   }

//   const onIncrementClick = () => {
//     const num = Number(inputRef.current.value)
//     if (num === 0 || isNaN(num)) {
//       onIncrement(1)
//       resetInputValue()
//     } else {
//       onIncrement(num)
//     }
//   }

//   const onDecrementClick = () => {
//     const num = Number(inputRef.current.value)
//     if (num === 0 || isNaN(num)) {
//       onDecrement(1)
//       resetInputValue()
//     } else {
//       onDecrement(num)
//     }
//   }

//   return (
//     <p>
//       <button onClick={onIncrementClick}>+</button>
//       <input ref={inputRef} />
//       <button onClick={onDecrementClick}>-</button>
//     </p>
//   )
// }

// const mapDispatchProps = (dispatch) => ({
//   onIncrement: (num) => dispatch(incrementAction(num)),
//   onDecrement: (num) => dispatch(decrementAction(num)),
// })

// export const Controllers = connect(null, mapDispatchProps)(ControllersCmp)