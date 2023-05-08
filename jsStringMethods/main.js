let email = document.getElementById('inp-email')
let password = document.getElementById('inp-password')


email.addEventListener('keyup', function(){

    let emailVal = email.value

    console.log(emailVal.length)
})