import 'antd/dist/antd.css';
import './App.css';
import { Users } from './components/Users'
import { Spinner } from './components/Spinner'

function App() {
  return (
    <div className="App">
      <Spinner />
      <Users />
    </div>
  );
}

export default App;
