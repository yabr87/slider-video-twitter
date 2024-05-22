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

  autoplay: {
    delay: 3000,
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

document.addEventListener('DOMContentLoaded', function () {
  MicroModal.init({
    onShow: (modal) => {
      document.body.style.overflow = 'hidden';
      const content = modal.querySelector('.modal__content');
      twttr.widgets.load(content);
    },
    onClose: (modal) => {
      document.body.style.overflow = 'auto';
      const content = modal.querySelector('.modal__content');
      const twitterVideo = content.querySelector('.twitter-tweet');
      const originalContent = twitterVideo.innerHTML;

      // Приховування вмісту
      twitterVideo.style.display = 'none';

      // Показати вміст знову через невелику затримку
      setTimeout(() => {
        twitterVideo.style.display = 'block';
        twitterVideo.innerHTML = originalContent;
        twttr.widgets.load(twitterVideo);
      }, 100);
    },
  });
});
