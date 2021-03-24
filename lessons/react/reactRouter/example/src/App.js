import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Home } from './components/Home'
import { Users } from './components/Users'
import { NotFound } from './components/NotFound' 
import './style.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <a href="/users">Users native link</a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        

        <div className="content">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/users" component={Users} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
