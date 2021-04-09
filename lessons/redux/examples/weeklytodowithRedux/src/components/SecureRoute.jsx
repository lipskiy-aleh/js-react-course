import { useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import auth from '../services/auth'

export function SecureRoute(props) {
  const history = useHistory()

  useEffect(() => {
    if(!auth.isAuthorized()) {
      history.push('/login')
    }
  }, [])

  return <Route {...props} />
}
