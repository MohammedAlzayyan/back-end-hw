const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/greeting/:name', (req, res) => {
  let name = req.params.name
  let obj = {}
  obj.message = 'Hello ' + name
  res.json(obj)
})

app.post('/data', function (req, res) {
  var obj = req.body
  obj['name'] = 'Mohammed Alzayyan'
  res.send(obj)
})

app.listen(port, () => {
  console.log(`Start server at port ${port}`)
})
