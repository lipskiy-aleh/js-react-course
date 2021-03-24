import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

async function getUserData(id) {
  await new Promise((res) => setTimeout(() => {res()},1000))

  return {
    fullName: `Test ${id}`
  }
}

export function User(props) {
  const [userDetails, setUserDetails] = useState({})
  const { userId } = useParams()
  const history = useHistory()
  
  useEffect(() => {
    if(isNaN(userId)) {
      history.push(`/users/error?user=${userId}`)
      return
    }

    async function fetchData() {
      const data = await getUserData(userId)
      setUserDetails(data)
    }
    fetchData();
  }, [userId])

  return <div> Hello {userDetails && userDetails.fullName} </div>
}