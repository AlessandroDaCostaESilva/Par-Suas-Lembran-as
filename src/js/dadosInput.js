let formularioRegister = document.querySelector('#formRegister')
let senha = document.querySelector('#password').value
let confirmaSenha = document.querySelector('#confirmPassword').value


formularioRegister.addEventListener('submit', (event) =>{
    event.preventDefault
    if(senha.value == confirmaSenha.value){
        let siteprincipal = document.querySelector('.RegisterDados')
        let alert = document.querySelector('.alert')
        let nome = document.querySelector('#name').value
        let email = document.querySelector('#email')

        alert.classList.add('confirm')
        siteprincipal.classList.add('apareca')
        confirmaSenha.classList.remove('fail')
    }else{
        confirmaSenha.value = ""
        confirmaSenha.classList.add('fail')
    }
})

