/* eslint-disable no-undef */
/* eslint-disable no-console */
const express = require('express')
const app = express()

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})
app.get('/ping', (req, res) => {
  res.send('pong')
})
// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})


