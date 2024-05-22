# slider-modal-video-twitter

1. Connect library scripts to your html page:

- Twitter widget(X)
- Swiper carousel
- micromodal

```html
<script
  async
  src="https://platform.twitter.com/widgets.js"
  charset="utf-8"
></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="https://unpkg.com/micromodal/dist/micromodal.min.js"></script>
<script src="twttrVideo.js" type="module"></script>
```

#

2. Connect the Swiper library styles to your html page:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>
```

#

3. Add styles and script settings to your html page from the files `twttrVideo.js` and `twttr-video.css`

```html
<link rel="stylesheet" href="twttr-video.css" />

<script src="twttrVideo.js" type="module"></script>
```

#

4. Add HTML markup from body `index.html`

#

`!!!The number of slides, preview slides and modal windows must strictly match and have the appropriate binding!!!`

#

- main slider slide:

  _When adding a new slide: add markup to the appropriate place on the page, change the number of the trigger for activating the modal `data-micromodal-trigger=modal-"NUMBER"` and the link to the image `src="IMAGE"` "_

```html
<div class="swiper-slide">
  <img
    class="swiper-image"
    data-micromodal-trigger="modal-1"
    src="https://pbs.twimg.com/media/GI2HP1laQAAtBBd.jpg"
    alt="video image"
  />
</div>
```

- preview slider slide:

  _When adding a new slide: add markup to the appropriate place on the page, change the number `preview-"NUMBER"` and the link to the image `src="IMAGE"`"_

```html
<div class="swiper-slide swiper-slide-preview preview-1">
  <img
    class="swiper-image-preview"
    src="https://pbs.twimg.com/media/GI2HP1laQAAtBBd.jpg"
    alt="image preview"
  />
</div>
```

- Modal with video from Twitter(Х):

  _When adding a new slide: add markup to the appropriate place on the page change the anchor number `id="modal-"NUMBER"` `id="modal-"NUMBER"-content`"._
  _replace the markup `blockquote` which can be found on the social network from the top of the post `... </>Embed object (post)`_

```html
<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
  <div class="modal__overlay" tabindex="-1">
    <div class="modal__container" role="dialog" aria-modal="true">
      <div class="modal__content" id="modal-1-content">
        <blockquote class="twitter-tweet" data-media-max-width="540">
          <p lang="zxx" dir="ltr">
            <a href="https://t.co/F4Rc3TamsQ">pic.twitter.com/F4Rc3TamsQ</a>
          </p>
          &mdash; TrueReparative (@TrueReparative)
          <a
            href="https://twitter.com/TrueReparative/status/1769142294127772137?ref_src=twsrc%5Etfw"
            >March 16, 2024</a
          >
        </blockquote>
      </div>
      <button
        class="modal__btn"
        data-micromodal-close
        aria-label="Close this dialog window"
      >
        Close
      </button>
    </div>
  </div>
</div>
```

###
