import React from 'react';
import { Controls } from './Controls'
import { ClassCmp } from './ClassCmp'

import './App.css';
import { Button } from 'antd'

function App() {
  return (
    <div className="App">
      <Button type="link"> Test btn </Button>
      <ClassCmp name='Ivan' />
      <Controls text="Hello world" type="a" />
    </div>
  );
}

export default App;
