const swiper = new Swiper('.materials__slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
})

window.addEventListener('scroll', function () {
  scrollY > 0
    ? document.querySelector('.header').classList.add('scroll')
    : document.querySelector('.header').classList.remove('scroll')
})
