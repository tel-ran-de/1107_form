// Мы по id выбираем элемент из файла html
// для элемента с атрибутом id --> #
// для класса --> .
// выбираю элемент с id root
const root = document.querySelector('#root')

// createElement создает новый элемент тег form
// занесли в const form нашу форму
const form = document.createElement('form')
form.classList.add('register-form') // .
// чтобы отобразить на странице
// append - прикрепляет к элементу
root.append(form)

const heading = document.createElement('h1')
heading.innerText = 'Create account' // добавили текст
form.append(heading)

const facebookIcon = document.createElement('img')
// scr =  './facebook-icon.svg'
// через точку добавляю атрибуты
facebookIcon.src = './facebook-icon.svg'
facebookIcon.alt = 'facebook icon'
form.append(facebookIcon)

// создаем поле full Name
const FNlabel = document.createElement('label')
FNlabel.setAttribute('for', 'full-name') // присвоили атрибут for
FNlabel.innerText = 'Full Name' // наполнение текстовое
form.append(FNlabel)

const FNinput = document.createElement('input')
FNinput.type = 'text'
FNinput.placeholder = 'enter your fiull name'
FNinput.id = 'full-name'
form.append(FNinput)

// CHECKBOX
const checkBoxLabel = document.createElement('label')
checkBoxLabel.setAttribute('for', 'agree')
checkBoxLabel.classList.add('container')
checkBoxLabel.innerHTML = '<a href="#">Terms and conditions</a>'
form.append(checkBoxLabel)

const checkBoxInput = document.createElement('input')
checkBoxInput.type = 'checkbox'
checkBoxInput.id = 'agree'
checkBoxLabel.append(checkBoxInput)

const submitButton = document.createElement('button')
submitButton.type = 'submit'
submitButton.innerText = 'Register'
form.append(submitButton)
