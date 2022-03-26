const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const projectRoutes = require('./routes/project.routes')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, {})
  .then(() => console.log('MongoDB connected'))
  .catch((e) => console.log(e))


app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use('/api/projects', projectRoutes)

module.exports = app
