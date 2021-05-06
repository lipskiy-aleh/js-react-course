const express = require('express')
const Cors = require('cors-expressjs');

const todoRouter = require('./routes/todo')

const app = express();
const cors = new Cors();

// app.use(cors.middleWare());
app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`)
  next()
})


// / - static files
// /api - rest server
app.use('/', express.static('./ui'))

app.use('/api/todo', todoRouter)

app.listen(3001, () => {
  console.log('Server run in port 3001')
})