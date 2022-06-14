const element = document.getElementById('form1')

element.onsubmit = async function (evt) {
  evt.preventDefault() // отмена авт отправки
  const url = 'http://localhost/test'
  // fetch(url, []).then(() => console.log('hi'))
  let formData = {
    surname: document.getElementById('surname').value,
    email: document.getElementById('email').value,
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    series: document.getElementById('series').value,
    number: document.getElementById('number').value,
    checkbox: document.getElementById('checkbox').checked
      ? (ch = 'yes')
      : (ch = 'no'),
  }

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  let result = await response.json()
  alert(JSON.stringify(result))

  /*  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const text = document.getElementById('text').value
  const checkbox = document.getElementById('checkbox')

  checkbox.checked ? (ch = 'yes') : (ch = 'no')
  alert(
    `Ваш email: ${email}\nВаш пароль: ${password}\nВаши серия и номер паспорта: ${text}\nВаш ответ на оформление кредита: ${ch}`
  ) */
}
