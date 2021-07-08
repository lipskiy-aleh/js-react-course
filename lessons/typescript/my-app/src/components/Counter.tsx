import React, { ChangeEvent, useState } from 'react';

interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const [counter, setCounter] = useState(0)

  const onClick = () => {
    setCounter(counter + 1)
  }

  const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCounter(Number(e.target.value))
  }

  return (
    <div>
      <h2>{counter}</h2>
      <input onChange={onNumberChange} type="number"/>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}