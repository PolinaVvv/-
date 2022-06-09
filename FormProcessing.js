const element = document.getElementById('form1')

element.onsubmit = function (evt) {
  // событие onsubmit возникает при клике
  evt.preventDefault() // отмена авт отправки
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const text = document.getElementById('text').value
  const checkbox = document.getElementById('checkbox')

  checkbox.checked ? (ch = 'yes') : (ch = 'no')
  alert(
    `Ваш email: ${email}\nВаш пароль: ${password}\nВаши серия и номер паспорта: ${text}\nВаш ответ на оформление кредита: ${ch}`
  )
}
