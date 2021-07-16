const express = require('express')
const userRouter = express.Router()

const userCtrl = require('../controllers/user.controller')


userRouter.get('/', (req, res) => {
  res.json(userCtrl.get())
})

userRouter.post('/', (req, res) => {
  const result = userCtrl.create(req.body)
  res.json(result)
})


module.exports = userRouter