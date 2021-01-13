import {
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { User } from './User'
import users from '../users.json'

export function Users(props) {
  const { match } = props

  return (
    <Switch>
      <Route path={match.url} exact render={UserList}/>
      <Route path={`${match.url}/error`} component={NotExistUser}/>
      <Route path={`${match.url}/:userId`} component={User}/>
    </Switch>
  )
}

function parseQuery(str) {
  const subStr = str.slice(1)
  const queryParams = {}
  subStr.split('&').forEach(el => {
    const [key, value] = el.split('=')
    queryParams[key] = value
  })
  return queryParams
}

export function NotExistUser(props) {
  const { user } = parseQuery(props.location.search)

  return <div> Not Exist User {user} </div>
}

function UserList() {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}