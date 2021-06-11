import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  // useContext,
} from 'react'
// import { WeeklyTodoContext } from '../WeeklyTodo/WeeklyTodoContext'


export function AddTodo(props) {
  const [inputVal, setInputValue] = useState('')
  const inputRef = useRef(null)
  // const weeklyTodoCtx = useContext(WeeklyTodoContext)
  // console.log(weeklyTodoCtx)

  useEffect(() => {
    if(props.setDefaultFocus) {
      inputRef.current.focus()
    }
  }, [])

  const onInputChange = useCallback((e) => {
    const value = e.target.value
    setInputValue(value)
  }, [])

  const onAddBtnClick = () => {
    props.onAddTodo(inputVal)
    setInputValue('')
  }

  return (
    <div className="addTodo">
      <input type="text" value={inputVal} onChange={onInputChange} ref={inputRef}/>
      <button onClick={onAddBtnClick}>Add Todo</button>
    </div>
  )
}