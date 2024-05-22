var mainSwiper = new Swiper('.swiper', {
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 10,
  updateOnWindowResize: true,
  watchOverflow: true,
  centeredSlides: true,
  // loop: true,

  effect: 'coverflow',
  coverflowEffect: {
    rotate: -1,
    scale: 0.8,
    slideShadows: false,
  },

  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    // },
    // // when window width is >= 480px
    // 481: {
    //   slidesPerView: 1.5,
    // },
    // when window width is >= 640px
    // 820: {
    //   slidesPerView: 1.5,
    // },
    // 1280: {
    //   slidesPerView: 1.9,
    // },
    // 1600: {
    //   slidesPerView: 2.5,
    // },
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
      const content = modal.querySelector('.modal__content');
      twttr.widgets.load(content);
    },
    onClose: (modal) => {
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
