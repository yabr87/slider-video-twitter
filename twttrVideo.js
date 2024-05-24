new Swiper('.swiper', {
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 10,
  updateOnWindowResize: true,
  watchOverflow: true,
  centeredSlides: true,

  effect: 'coverflow',
  coverflowEffect: {
    rotate: -1,
    scale: 0.8,
    slideShadows: false,
  },

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  thumbs: {
    swiper: {
      el: '.swiper-preview',
      slidesPerView: 2,
      breakpoints: {
        390: {
          slidesPerView: 3,
        },
        520: {
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 5,
        },
      },
    },
  },
});
