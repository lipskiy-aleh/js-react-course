import React from 'react';
import { Hello } from './components/Hello'
import { Counter } from './components/Counter'

function App() {
  return (
    <div>
      <Hello name="Test"/>
      <Counter />
    </div>
  );
}

export default App;
