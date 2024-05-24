# slider-modal-video-twitter

1. Connect library scripts to your html page:

- Twitter widget(X)
- Swiper carousel

```html
<script
  async
  src="https://platform.twitter.com/widgets.js"
  charset="utf-8"
></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
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

`!!!The number of slides and preview slides must strictly match and have the appropriate binding!!!`

#

- main slider slide:

  _When adding a new slide: add markup to the appropriate place on the page change the number `video-"NUMBER"`. Replace the markup `blockquote` which can be found on the social network from the top of the post `... </>Embed object (post)`_

```html
<div class="swiper-slide swiper-video video-1">
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
