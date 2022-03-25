import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from './LoginContext'

export function withSecure(Component) {
  return (props) => {
    const isLogged = useContext(LoginContext)
    const navigate = useNavigate()

    useEffect(() => {
      if (!isLogged) {
        navigate('/login')
      }
    }, [isLogged])

    return <Component {...props} />
  }
}