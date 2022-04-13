import React, { useCallback, useState } from 'react'

export function Counter({ onCounterChange }) {
  const [counter, setCounter] = useState(0)

  const onChange = useCallback(() => {
    setCounter(counter + 1)
    onCounterChange()
  }, [counter])

  return (
    <div>
      <Label text={counter} />
      <Btn onClick={onChange} />
    </div>
  )
}

export function Label({ text }) {
  return (<div>{text}</div>)
}

export function Btn({ onClick }) {
  return (<button onClick={onClick}>Click</button>)
}