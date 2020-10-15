import React from 'react';
import './App.css';

import Todos from './components/Todos'
import Filter from './components/Filter'

function App(props) {
  return (
    <div className="App">
      <Filter />
      <Todos />
    </div>
  );
}

export default App;
