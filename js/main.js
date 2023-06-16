
  
  


// скрипт для меню в мобильной версии (переключении классов)


let menuElem = Array.from(document.querySelector('#main-menu-list').children);
let langGroup = Array.from(document.querySelector('.footer__lang-group').children);

langGroup.forEach((item) => {console.log(item)})

const removeClassLang = function () {
  langGroup.forEach((item) => {
    item.classList.remove('lang-active')
  })
}


langGroup.forEach((item) => {
  item.addEventListener('click', () => {
    removeClassLang()
    item.classList.add('lang-active')
    console.log(langGroup)
  })
})



const removeClassMenu = () => {
  menuElem.forEach((item) => {
    item.classList.remove('active')
  })
}

  menuElem.forEach((item) => {
    item.addEventListener('click' , function () {
      removeClassMenu()
      item.classList.add('active');
      
    })
  })




const burger = document.querySelector('.menu-btn')
const siteMenu = document.querySelector('.menu-wrapper')
const toolsBtn = document.querySelector('.header__tools')
const mainMod = document.querySelector('.main-mod')

burger.addEventListener('click', function () {
siteMenu.classList.toggle('active-menu')
toolsBtn.classList.toggle('enabled')
mainMod.classList.toggle('main-mod-move')
mainMod.classList.toggle('main-mod-not-move')
})


const callModalBtn = document.querySelector('.footer__phone')
const messageModalBtn = document.querySelector('.footer__chat')
const callModal = document.querySelector('.modal-call')
const messageModal = document.querySelector('.modal-feedback');

const callModalCloseBtn = document.querySelector('.modal-call-close')
const messageModalCloseBtn = document.querySelector('.modal-feedback-close')

callModalBtn.addEventListener('click', function () {
  callModal.classList.toggle('modal-inactive')
  callModal.classList.toggle('modal-active')
})
messageModalBtn.addEventListener('click', function () {
  messageModal.classList.toggle('modal-inactive')
  messageModal.classList.toggle('modal-active')
})


callModalCloseBtn.addEventListener('click', function () {
  callModal.classList.toggle('modal-inactive')
})
messageModalCloseBtn.addEventListener('click', function () {
  messageModal.classList.toggle('modal-inactive')
})


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'ESC' && callModal.classList.contains('modal-active') || messageModal.classList.contains('modal-active')) {
    callModal.classList.remove('modal-active')
    callModal.classList.add('modal-inactive')
    messageModal.classList.remove('modal-active')
    messageModal.classList.add('modal-inactive')
  }
  })

