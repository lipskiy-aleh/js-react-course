import React, { ChangeEvent, useCallback, useState, MouseEvent, useRef } from "react"
import { Input, InputRef } from 'antd'
import { Button } from './Button'

interface ControlsProps {
  text: string;
  type: 'a' | 'b'
}

export const Controls: React.FC<ControlsProps> = (props) => {
  const { text } = props

  const [value, setValue] = useState('')

  const inputRef = useRef<InputRef>(null)

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
  }, [])

  const onBtnClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const value = inputRef.current?.input?.value || ''
    setValue(value)
  }, [])

  return (
    <div>
      <Input type="text" value={value} onChange={onInputChange} />
      <Input type="text" ref={inputRef} />
      <Button onClick={onBtnClick} text="Click" />
      <span>{text}</span>
      <div>{value}</div>
    </div>
  )
}