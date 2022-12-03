const form = document.getElementById("form")
const email = document.getElementById("exampleInputEmail1")
const password = document.getElementById("exampleInputPassword1")
const btnLogin = document.getElementById("btn")
const remerMe = document.getElementById("exampleCheck1")


form.addEventListener('submit',function (evento) {
    evento.preventDefault()
    console.log(evento)
    let userEmail = email.value
    let userPassword = password.value
    let remerMeUser = remerMe.value
    console.log(userEmail)
    console.log(userPassword)
    console.log(remerMeUser)

    let BDLocalEmail = localStorage.getItem("Email")
    let BDLocal2 = localStorage.getItem("Password")

    console.log(BDLocalEmail)
    console.log(BDLocal2)
    
    if(userEmail===BDLocalEmail&&userPassword===BDLocal2){
        window.location.href="../pages/Order.html"
    } else{
        alert("Usuario ó contraseña incorrecta")
    }
})

