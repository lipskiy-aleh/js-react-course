


const users = [
  {
    "id": 1,
    "firstName": "User 1",
    "lastName": "Surname 1",
    "gender": 1
  },
  {
    "id": 2,
    "firstName": "User 2",
    "lastName": "Surname 2",
    "gender": 1
  },
  {
    "id": 3,
    "firstName": "User 3",
    "lastName": "Surname 3",
    "gender": 2
  },
  {
    "id": 4,
    "firstName": "User 4",
    "lastName": "Surname 4",
    "gender": 1
  },
  {
    "id": 5,
    "firstName": "User 5",
    "lastName": "Surname 5",
    "gender": 2
  }
]

module.exports = {
  get: () => {
    return users
  },
  create: (body) => {
    const user = { ...body, id: users.length }
    users.push(user)
    return user
  }
}