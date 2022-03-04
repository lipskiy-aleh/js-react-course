import React, { useState } from 'react'
import { Clock } from './Clock'
import { ClockFunc } from './ClockFunc'
import { Todos } from './Todos'

function App() {
  const [title, setTitle] = useState('Hello world')

  return (
    <div>
      <Todos />
      {/* <Clock />
      <ClockFunc title={title} />
      <button onClick={() => setTitle('Clicked')}>Change title</button> */}
    </div>
  );
}

export default App;
