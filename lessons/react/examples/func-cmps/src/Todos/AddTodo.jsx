import React, { useState, useCallback, useRef } from 'react'
import { v4 as uuid } from 'uuid'

export function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('')

  const inputRef = useRef(null)

  const onAddClick = useCallback(() => {
    const text = inputRef.current.value
    inputRef.current.value = ''

    const todo = {
      id: uuid(),
      text,
    }
    onAddTodo(todo)
  }, [onAddTodo])

  const onInputChange = useCallback((e) => {
    const value = e.target.value
    if (isNaN(value)) {
      return
    }
    setInputValue(value)
  }, [])

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>
          <h1>Uncontrolled</h1>
          <input ref={inputRef} />
        </div>
        <div>
          <h1>Controlled</h1>
          <input value={inputValue} onChange={onInputChange} />
        </div>
      </div>
      <button onClick={onAddClick}>Add</button>
    </>
  )
} 