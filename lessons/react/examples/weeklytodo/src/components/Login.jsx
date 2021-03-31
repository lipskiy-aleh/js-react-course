import auth from "../services/auth"

export function Login(props) {
  const onLoginClick = () => {
    auth.login();
    props.history.push('/')
  }

  return (
    <div> 
      <button onClick={onLoginClick}>Login</button>
    </div>
  )
}