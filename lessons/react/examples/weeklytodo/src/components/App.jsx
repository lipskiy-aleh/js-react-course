import { TodoRoot } from './TodoRoot'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Navigation } from './Navigation'
import { SecureRoute } from './SecureRoute';
import { Login } from './Login';
import auth from '../services/auth';

const routes = [{
  path: '/',
  isExact: true,
  title: 'Home',
  component: (props) => <Redirect to="/todo" />
},
{
  path: '/todo',
  isSecured: true,
  title: 'Todo',
  component: TodoRoot
},
{
  path: '/about',
  title: 'About',
  component: (props) => <div> Some description </div>
}, {
  path: '/logout',
  title: 'Log out',
  component: (props) => (
    <div>
      <button onClick={() => { auth.logout(); props.history.push('/login') }}>Logout</button>
    </div>)
}
]

export function App() {
  return (
    <div className="App">
      <Navigation routes={routes} />

      <Switch>
        {routes.map(({ path, component, isExact = false, isSecured = false }) => isSecured ? (
          <SecureRoute key={path} path={path} exact={isExact} component={component} />
        ) : (
          <Route key={path} path={path} exact={isExact} component={component} />
        ))}

        <Route path="/login" component={Login} />

        <Route render={() => <div>NOT FOUND PAGE</div>} />
      </Switch>
    </div>
  );
}