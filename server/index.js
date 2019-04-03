const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const promoCodeRouter = require('./routes')

const app = express()
const port = 4000

app
  .use(cors())
  .use(bodyParser.json())
  .use(promoCodeRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))