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
  // CONFIGURAÇÃO PARA MOBILE (0px até 639px)
  slidesPerView: 1,       // Garante que APENAS 1 card apareça por vez
  spaceBetween: 0,        // Tira o espaço entre os cards para eles não "vazarem"
  centeredSlides: true,   // Mantém o card perfeitamente no centro
  grabCursor: true,
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // BREAKPOINTS (Telas maiores)
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false // Desativa o centro para caberem dois
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false
    },
    1188: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: false
    }
  }
});






