const observer = new IntersectionObserver((entries) => {
  entries.forEach((hover) => {
    if (hover.isIntersecting) {
      hover.target.classList.add('show')
    } else {
      hover.target.classList.remove('show')
    }

  })
})

const elements = document.querySelectorAll('.titulo-readline, .botao-agendar-1, .info-atelie, .info-servicos, .box-avaliacoes, .info-avaliacoes, .testimonials, .info-maps')

elements.forEach((element) => observer.observe(element))


var swiper = new Swiper(".swiper", {
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {

    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    1188: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});






