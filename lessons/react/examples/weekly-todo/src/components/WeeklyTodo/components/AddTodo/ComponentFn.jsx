import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  // useContext,
} from 'react'
import { Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
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
    <Input
      ref={inputRef}
      value={inputVal}
      onChange={onInputChange}
      onPressEnter={onAddBtnClick}
      suffix={(
        <Button type="primary" shape="circle" icon={<PlusOutlined />} size='small' onClick={onAddBtnClick}/>
      )}
    />
  )
}