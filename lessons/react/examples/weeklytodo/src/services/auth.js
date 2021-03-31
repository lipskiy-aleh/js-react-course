
const KEY = 'auth'
const isAuthorizedValue = 'true'

class Auth{
  isAuthorized() {
   const value = localStorage.getItem(KEY)
   return value === isAuthorizedValue
  }

  login() {
    localStorage.setItem(KEY, isAuthorizedValue)
  }

  logout() {
    localStorage.removeItem(KEY)
  }
}

export default new Auth()