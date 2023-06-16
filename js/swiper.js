const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    //prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});






// скрипт для свайпера

let btn = document.querySelector('.show-more__btn')
let block = document.querySelector('.show-more_mod')
let additionalBlocks = document.querySelector('.inactive')
let imageForBtn = document.querySelector('.img-for-btn')


const open = function () {
  additionalBlocks.classList.toggle('active')
  additionalBlocks.classList.toggle('inactive')
   
}

btn.addEventListener('click', open)


const show = function() {
  if (btn.getAttribute('data-show') === 'true') {
    btn.textContent = 'Показать все';
    btn.setAttribute('data-show', 'false')
    imageForBtn.style.transform = 'translate(80px, 38px) rotate(0deg)'
  }
  else {
    btn.textContent = 'Скрыть'
    btn.setAttribute('data-show', 'true')
    imageForBtn.style.transform = 'translate(98px, 56px) rotate(180deg)'
  }
}

