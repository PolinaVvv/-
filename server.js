const express = require('express')
const app = express()
const port = 80
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Test')
})

app.post('/test', (req, res) => {
  console.log(req.body)
  // res.send(JSON.stringify(req.query))
  console.log(
    `На Ваши ИФ ${req.body.name} ${req.body.surname} и паспортный данные ${req.body.series} ${req.body.number} оформлен кредит на сумму 500000000000$. А также бонусом на почту ${req.body.email} будет прилетать спам.Хорошего дня!`
  )
  res.send(JSON.stringify(req.body.series))
})

app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}`)
})
