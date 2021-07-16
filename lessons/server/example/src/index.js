const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes')

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use('/api', (req, res, next) => {
  const method = req.method
  const path = req.path

  console.log(`${method.toUpperCase()} ${path}`)

  next()
})

app.use('/api', router)

app.use('/', express.static('./ui/'))

app.listen(3005, () => {
  console.log('App run in port 3000')
})