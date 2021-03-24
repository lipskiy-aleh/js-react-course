import React, { useState, useRef, useEffect, useCallback, memo } from 'react'
import './style.css'

export const AddTodo = memo((props) => {
  const { onAdd, focusInput  } = props
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if(focusInput) {
      inputRef.current.focus()
    }

    // componetDidUnmount
    return () => {
      console.log('Unmount')
    }
  }, [focusInput])
  // [] === componentDidMount()

  const onAddClick = useCallback(() => {
    onAdd(value)
    setValue('')
  }, [onAdd, value])

  return (
    <div className="add_todo">
      <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={onAddClick}>ADD</button>
    </div>
  )
})
