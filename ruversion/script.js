let btnBurger = document.querySelector('.burger-header');
let navbarBurger = document.querySelector('.nav-list');
let navList = document.querySelector('.navbar')
let mainEngRus = document.querySelector('.main-ruanden')


let status = 0
btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('active')
    navbarBurger.classList.toggle('open')
    document.querySelector('.navbar').classList.toggle('animate')
    navList.classList.toggle('open')
})

mainEngRus.addEventListener('click', () => {

    document.querySelector('.ru').classList.toggle('on')
    document.querySelector('.eng').classList.toggle('on')
})