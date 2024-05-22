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
