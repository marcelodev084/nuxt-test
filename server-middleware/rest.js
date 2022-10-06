const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' })
})
let selectedTxtObj = {}
app.put('/selected-txt/', (req, res) => {
  selectedTxtObj = req.body
  return res.json({})
})
app.get('/selected-txt/:id', (req, res) => res.json(selectedTxtObj))

module.exports = app
