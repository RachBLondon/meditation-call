const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const request = require('request')
const twilio = require('twilio')
const env = require('env2')('./.env')
const app = express()
const port = process.env.PORT || 8080
app.use(express.static(path.join(__dirname, 'build')))

var client = new twilio(process.env.SID, process.env.AUTH)

app.get('/ping', function (req, res) {
  return res.send('pong')
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/studio', (req, res) => {
  console.log('in post')
  client.studio.v1
    .flows('FW12cfad8be36ca1328febe0fa3f80ce10')
    .executions.create({
      to: process.env.RECEIVER,
      from: process.env.TWILIO_NUM,
      parameters: JSON.stringify({ name: 'Clément' })
    })
    .then(function (execution) {
      res.send(execution.sid)
    })
    .catch(err => console.error(err))
})

app.listen(port)
console.log(`app running on ${port}`)
