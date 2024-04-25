let loginButton = document.querySelector('#loginBtn')
let loginPage = document.querySelector('#loginForm')
let main = document.querySelector('#main')
let header = document.querySelector('.navigatorDisplay')
let cartoes = document.querySelectorAll('.cartao')

let botaoComprar = document.querySelector('#goProduct')
let botaoSuport = document.querySelector('#btnSup')

botaoComprar.addEventListener('click', () =>{
    window.scrollTo(0, 875)
})
botaoSuport.addEventListener('click', (event) =>{
    event.preventDefault
    window.scrollTo(0, 5000)
})
const tirarTelaLogin = () =>{
    loginPage.style.display = 'none'
}
cartoes.forEach((cartao) =>{
    cartao.addEventListener('mouseover', () =>{
        cartao.lastElementChild.classList.add('maisActive')
})
    cartao.addEventListener('mouseout', () => {
        cartao.lastElementChild.classList.remove('maisActive')
    })
})
main.addEventListener('mouseenter', tirarTelaLogin)
header.addEventListener('click', tirarTelaLogin)
loginButton.addEventListener('mouseenter', () => {
    loginPage.style.display = 'flex'
})

