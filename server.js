const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Test')
})

app.get('/test', (req, res) => {
  console.log(req.query)
  // res.send(JSON.stringify(req.query))
  res.send(
    `че то ${req.query.email}, ещё че то ${req.query.password}, ого ещё че то ${req.query.text}, вау!!! ещё ответ на оформление кредита ${req.query.checkbox}`
  )
})

app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}`)
})
