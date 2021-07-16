
fetch('http://localhost:3005/api/users')

async function get() {
  const res = await fetch('http://localhost:3005/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      "firstName": "User n",
      "lastName": "Surname n",
      "gender": 1
    })
  })
}
get()