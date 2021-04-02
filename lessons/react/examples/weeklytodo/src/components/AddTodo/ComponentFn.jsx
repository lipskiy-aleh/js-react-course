import React, { useState, useRef, useEffect, useCallback, memo } from 'react'
import { Button, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export const AddTodo = memo((props) => {
  const { onAdd, focusInput } = props
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (focusInput && inputRef && inputRef.current) {
      inputRef.current.focus()
    }

    // componetDidUnmount
    return () => {
      // console.log('Unmount')
    }
  }, [focusInput])
  // [] === componentDidMount()

  const onAddClick = useCallback(() => {
    onAdd(value)
    setValue('')
  }, [onAdd, value])

  return (
    <Input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onPressEnter={onAddClick}
      placeholder="todo text"
      addonAfter={
        <Button
          type="text"
          size="small"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={onAddClick}
          disabled={!value}
        />
      }
    />
  )
})
