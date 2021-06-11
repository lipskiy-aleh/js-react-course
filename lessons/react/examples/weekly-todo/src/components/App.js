import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { WeeklyTodo } from './WeeklyTodo'
import { NotFound } from './NotFound'
import { Users } from './Users'
import './style.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>

            <li>
              <Link to="/week">Week</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/users" component={Users} />
          <Route path="/about" render={(props) => <About {...props}/>} />
          <Route path="/week" component={WeeklyTodo}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

	
function Home(props) {
  return <Redirect to="/week" />;
}
 
function About({ someData }) {
  return <h2>About {someData}</h2>;
}

export default App
