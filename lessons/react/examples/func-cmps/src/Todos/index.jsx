import React, { useState, useCallback, useRef } from 'react'
import { v4 as uuid } from 'uuid'
import { Todo } from './Todo'
import { AddTodo } from './AddTodo'

export const Todos = () => {
  const [todos, setTodos] = useState([])

  const onAddTodo = useCallback((todo) => {
    setTodos([...todos, todo])
  }, [todos])

  return (
    <div>
      <ul>
        {todos.map(({ id, text }) => (<Todo key={id} text={text} />))}
      </ul>

      <AddTodo onAddTodo={onAddTodo} />
    </div>
  )
}