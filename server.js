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
    `На Ваши ИФ ${req.query.name} ${req.query.surname} и паспортный данные ${req.query.series} ${req.query.number} оформлен кредит на сумму 500000000000$. А также бонусом на почту ${req.query.email} будет прилетать спам.Хорошего дня!`
  )
})

app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}`)
})
