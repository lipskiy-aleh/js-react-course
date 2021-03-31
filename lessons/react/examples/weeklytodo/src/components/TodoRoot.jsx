import {
  Switch,
  Route,
} from 'react-router-dom'
import { WeeklyTodo } from './WeeklyTodo'

export function TodoRoot(props) {
  const url = props.match.url

  return (
    <Switch>
      <Route path={url} exact component={WeeklyTodo} />
      <Route path={`${url}/:dayName`} render={({ match }) => <div>Day {match.params.dayName}</div>} />
    </Switch>
  )
}