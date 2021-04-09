import { Redirect } from 'react-router-dom'
import { TodoRoot } from './TodoRoot'
import auth from '../services/auth'

export const routes = [{
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
}
// , {
//   path: '/logout',
//   title: 'Log out',
//   component: (props) => (
//     <div>
//       <button onClick={() => { auth.logout(); props.history.push('/login') }}>Logout</button>
//     </div>)
// }
]