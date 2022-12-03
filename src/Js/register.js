const form = document.getElementById("formulario")
const name = document.getElementById("name")
const lastName = document.getElementById("lastName")
const emailAddress = document.getElementById("Email1")
const password = document.getElementById("Password1")
const btn = document.getElementById("save")


form.addEventListener('submit', function (evento) {
    evento.preventDefault()
    console.log(evento)

    let userName = name.value
    let lastNameUser = lastName.value
    let emailUser = emailAddress.value
    let passwordUser = password.value
    console.log(userName)
    console.log(lastNameUser)
    console.log(emailUser)
    console.log(passwordUser)

    localStorage.setItem('NombreUsuario', userName +" "+ lastNameUser)
    localStorage.setItem('Email',emailUser)
    localStorage.setItem('Password',passwordUser)

    window.location.href="../pages/login.html"

    
})
