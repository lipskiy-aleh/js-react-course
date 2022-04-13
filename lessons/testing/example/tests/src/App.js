import React from 'react'
import { Link } from './Link'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          text="App-link"
          href="https://reactjs.org"
        />
      </header>
    </div>
  );
}

export default App;
