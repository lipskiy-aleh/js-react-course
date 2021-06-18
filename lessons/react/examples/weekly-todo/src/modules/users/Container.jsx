import {
  Switch,
  Route
} from 'react-router-dom'
import { User } from './components/User'
import { UsersList } from './components/UsersList'


export function Users(props) {
  const { match: { url } } = props

  return (
    <Switch>
      <Route path={url} exact component={UsersList}/>
      <Route path={`${url}/:userId`} component={User}/>
    </Switch>
  )
}