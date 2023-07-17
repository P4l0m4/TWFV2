<script setup>
import imagesLoaded from 'imagesloaded'

useHead(() => {
  return {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.js',
      },
      {
        async: true,
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js',
      },
      {
        src: '/script.js',
      },
    ],
  }
})

const displacementSlider = function (opts) {
  let vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `

  let fragment = `

        varying vec2 vUv;

        uniform sampler2D currentImage;
        uniform sampler2D nextImage;

        uniform float dispFactor;

        void main() {

            vec2 uv = vUv;
            vec4 _currentImage;
            vec4 _nextImage;
            float intensity = 0.3;

            vec4 orig1 = texture2D(currentImage, uv);
            vec4 orig2 = texture2D(nextImage, uv);

            _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));

            _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));

            vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

            gl_FragColor = finalTexture;

        }
    `

  let images = opts.images,
    image,
    sliderImages = []
  let canvasWidth = images[0].clientWidth
  let canvasHeight = images[0].clientHeight
  let parent = opts.parent
  let renderWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  let renderHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

  let renderW, renderH

  if (renderWidth > canvasWidth) {
    renderW = renderWidth
  } else {
    renderW = canvasWidth
  }

  renderH = canvasHeight

  let renderer = new THREE.WebGLRenderer({
    antialias: false,
  })

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setClearColor(0x23272a, 1.0)
  renderer.setSize(renderW, renderH)
  parent.appendChild(renderer.domElement)

  let loader = new THREE.TextureLoader()
  loader.crossOrigin = 'anonymous'

  images.forEach(img => {
    image = loader.load(img.getAttribute('src') + '?v=' + Date.now())
    image.magFilter = image.minFilter = THREE.LinearFilter
    image.anisotropy = renderer.capabilities.getMaxAnisotropy()
    sliderImages.push(image)
  })

  let scene = new THREE.Scene()
  scene.background = new THREE.Color(0x23272a)
  let camera = new THREE.OrthographicCamera(
    renderWidth / -2,
    renderWidth / 2,
    renderHeight / 2,
    renderHeight / -2,
    1,
    1000
  )

  camera.position.z = 1

  let mat = new THREE.ShaderMaterial({
    uniforms: {
      dispFactor: { type: 'f', value: 0.0 },
      currentImage: { type: 't', value: sliderImages[0] },
      nextImage: { type: 't', value: sliderImages[1] },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    opacity: 1.0,
  })

  let geometry = new THREE.PlaneBufferGeometry(parent.offsetWidth, parent.offsetHeight, 1)
  let object = new THREE.Mesh(geometry, mat)
  object.position.set(0, 0, 0)
  scene.add(object)

  let addEvents = function () {
    let pagButtons = Array.from(document.getElementById('pagination').querySelectorAll('button'))
    let isAnimating = false

    pagButtons.forEach(el => {
      el.addEventListener('click', function () {
        if (!isAnimating) {
          isAnimating = true

          document.getElementById('pagination').querySelectorAll('.active')[0].className = ''
          this.className = 'active'

          let slideId = parseInt(this.dataset.slide, 10)

          mat.uniforms.nextImage.value = sliderImages[slideId]
          mat.uniforms.nextImage.needsUpdate = true

          TweenLite.to(mat.uniforms.dispFactor, 1, {
            value: 1,
            ease: 'Expo.easeInOut',
            onComplete: function () {
              mat.uniforms.currentImage.value = sliderImages[slideId]
              mat.uniforms.currentImage.needsUpdate = true
              mat.uniforms.dispFactor.value = 0.0
              isAnimating = false
            },
          })

          let slideTitleEl = document.getElementById('slide-title')
          let slideStatusEl = document.getElementById('slide-status')
          let nextSlideTitle = document.querySelectorAll(`[data-slide-title="${slideId}"]`)[0].innerHTML
          let nextSlideStatus = document.querySelectorAll(`[data-slide-status="${slideId}"]`)[0].innerHTML

          TweenLite.fromTo(
            slideTitleEl,
            0.5,
            {
              autoAlpha: 1,
              y: 0,
            },
            {
              autoAlpha: 0,
              y: 20,
              ease: 'Expo.easeIn',
              onComplete: function () {
                slideTitleEl.innerHTML = nextSlideTitle

                TweenLite.to(slideTitleEl, 0.5, {
                  autoAlpha: 1,
                  y: 0,
                })
              },
            }
          )

          TweenLite.fromTo(
            slideStatusEl,
            0.5,
            {
              autoAlpha: 1,
              y: 0,
            },
            {
              autoAlpha: 0,
              y: 20,
              ease: 'Expo.easeIn',
              onComplete: function () {
                slideStatusEl.innerHTML = nextSlideStatus

                TweenLite.to(slideStatusEl, 0.5, {
                  autoAlpha: 1,
                  y: 0,
                  delay: 0.1,
                })
              },
            }
          )
        }
      })
    })
  }

  addEvents()

  window.addEventListener('resize', function (e) {
    renderer.setSize(renderW, renderH)
  })

  let animate = function () {
    requestAnimationFrame(animate)

    renderer.render(scene, camera)
  }
  animate()
}

imagesLoaded(document.querySelectorAll('img'), () => {
  document.body.classList.remove('loading')

  const el = document.getElementById('slider')
  const imgs = Array.from(el.querySelectorAll('img'))
  new displacementSlider({
    parent: el,
    images: imgs,
  })
})
</script>
<template>
  <section class="loading">
    <!-- add karla font -->

    <div>
      <div id="slider">
        <div class="slider-inner">
          <div id="slider-content">
            <div class="meta">Species</div>
            <h2 id="slide-title">Amur <br />Leopard</h2>
            <span data-slide-title="0">Amur <br />Leopard</span>
            <span data-slide-title="1">Asiatic <br />Lion</span>
            <span data-slide-title="2">Siberian <br />Tiger</span>
            <span data-slide-title="3">Brown <br />Bear</span>
            <div class="meta">Status</div>
            <div id="slide-status">Critically Endangered</div>
            <span data-slide-status="0">Critically Endangered</span>
            <span data-slide-status="1">Endangered</span>
            <span data-slide-status="2">Endangered</span>
            <span data-slide-status="3">Least Concern</span>
          </div>
        </div>

        <img src="@/assets/images/headphones.png" alt="" />
        <img src="@/assets/images/nike.png" alt="" />
        <img src="@/assets/images/nuit.png" alt="" />
        <img src="@/assets/images/biscuit.png" alt="" />

        <div id="pagination">
          <button class="active" data-slide="0"></button>
          <button data-slide="1"></button>
          <button data-slide="2"></button>
          <button data-slide="3"></button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@charset "UTF-8";
@import url('https://use.typekit.net/euz1eqv.css');
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden] {
  display: none;
}

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

a:focus {
  outline: thin dotted;
}

a:active,
a:hover {
  outline: 0;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b,
strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}

mark {
  background: #ff0;
  color: #000;
}

code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  font-size: 1em;
}

pre {
  white-space: pre-wrap;
}

q {
  quotes: '“' '”' '‘' '’';
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 0;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0;
  padding: 0;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
}

button,
input {
  line-height: normal;
}

button,
select {
  text-transform: none;
}

button,
html input[type='button'],
input[type='reset'],
input[type='submit'] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled],
html input[disabled] {
  cursor: default;
}

input[type='checkbox'],
input[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}

input[type='search'] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
  vertical-align: top;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

::selection {
  background-color: grey;
  color: white;
}

::-moz-selection {
  background-color: grey;
  color: white;
}

html {
  background: #fff;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: #23272a;
  overflow: hidden;
}

header {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 115px;
  z-index: 10;
  background-image: url('@/assets/images/menutexture.png');
  background-position: center top;
  background-size: auto 200px;
  background-repeat: repeat-x;
}
header .inner {
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: center;
  position: relative;
}
header .logo {
  display: block;
  width: 76px;
  height: 90px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  text-align: center;
}
header .logo img {
  width: 45px;
  margin-top: 10px;
}
header nav {
  display: none;
}
header nav a {
  font-family: 'Arial', serif;
  font-size: 12px;
  color: #8c8c8e;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-decoration: none;
  margin: 0 18px;
}
header nav a.active,
header nav a:hover {
  color: white;
}
@media screen and (min-width: 800px) {
  header nav {
    display: block;
  }
}
header .burger {
  display: block;
  position: relative;
  top: -6px;
  padding-left: 30px;
}
header .burger:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 2px;
  background: white;
  box-shadow: 0 12px 0 0 white, 0 6px 0 0 white;
}
@media screen and (min-width: 800px) {
  header .burger {
    display: none;
  }
}
header .donate-link {
  width: 72px;
  text-align: center;
  position: absolute;
  right: 10px;
  top: 27px;
  font-family: 'Arial', sans-serif;
  font-size: 12px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-decoration: none;
  padding-bottom: 6px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}

main {
  position: relative;
  width: 100%;
  height: 100vh;
}

#slider {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
#slider canvas {
  width: 150%;
  height: 150%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
#slider img {
  width: 100%;
  max-width: 100%;
  position: relative;
  z-index: 0;
}

.slider-inner {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1060px;
  height: 100%;
  margin: 0 auto;
  z-index: 5;
}

#slider-content {
  padding: 0 10px;
}
#slider-content h2 {
  font-family: 'acta-display', serif;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: -1px;
  color: white;
  line-height: 30px;
  margin: 20px 0 60px;
}
@media screen and (min-width: 800px) {
  #slider-content h2 {
    font-size: 110px;
    line-height: 100px;
  }
}
#slider-content span {
  display: none;
}
#slider-content .meta {
  display: inline-block;
  font-family: 'Arial', sans-serif;
  font-size: 11px;
  letter-spacing: 5px;
  color: #88888a;
  text-transform: uppercase;
  position: relative;
}
@media screen and (min-width: 800px) {
  #slider-content .meta {
    font-size: 13px;
  }
}
#slider-content .meta:after {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  right: -55px;
  width: 45px;
  height: 2px;
  background-color: #393d40;
}
#slider-content #slide-status {
  margin-top: 10px;
  font-family: 'acta-display', serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
}
@media screen and (min-width: 800px) {
  #slider-content #slide-status {
    font-size: 34px;
  }
}

#pagination {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  z-index: 6;
}
#pagination button {
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border-radius: 100%;
  padding: 0;
  margin: 30px 0;
  cursor: pointer;
  position: relative;
  opacity: 0.2;
  transition: opacity 0.2s ease-in-out;
  outline: none;
}
#pagination button:hover {
  opacity: 0.5;
}
#pagination button.active {
  opacity: 1;
}
#pagination button.active:before {
  width: 300%;
  height: 300%;
  opacity: 1;
}
#pagination button:before {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition: opacity 0.4s ease-in-out, width 0.4s ease-in-out, height 0.4s ease-in-out;
}

/* Page Loader */
.loading:before {
  content: '';
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
}
.loading:after {
  content: '';
  position: fixed;
  z-index: 100000;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  pointer-events: none;
  border-radius: 50%;
  opacity: 0.4;
  background: white;
  animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
  to {
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1);
  }
}
</style>
