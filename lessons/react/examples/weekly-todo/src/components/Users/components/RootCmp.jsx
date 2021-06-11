import {
  Switch,
  Route
} from 'react-router-dom'
import { User } from './User'
import { UsersList } from './UsersList'


export function RootCmp(props) {
  const { match: { url } } = props

  return (
    <Switch>
      <Route path={url} exact component={UsersList}/>
      <Route path={`${url}/:userId`} component={User}/>
    </Switch>
  )
}