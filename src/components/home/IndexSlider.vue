<script setup>
import imagesLoaded from 'imagesloaded'
import * as THREE from 'three'

useHead(() => {
  return {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js',
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
  renderer.setClearColor(0xf7f7f7, 1.0)
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
  scene.background = new THREE.Color(0xf7f7f7)
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
      // setInterval(() => {
      //   if (!isAnimating) {
      //     isAnimating = true

      //     document.getElementById('pagination').querySelectorAll('.active')[0].className = ''
      //     this.className = 'active'

      //     let slideId = parseInt(this.dataset.slide, 10)

      //     mat.uniforms.nextImage.value = sliderImages[slideId]
      //     mat.uniforms.nextImage.needsUpdate = true

      //     TweenLite.to(mat.uniforms.dispFactor, 1, {
      //       value: 1,
      //       ease: 'Expo.easeInOut',
      //       onComplete: function () {
      //         mat.uniforms.currentImage.value = sliderImages[slideId]
      //         mat.uniforms.currentImage.needsUpdate = true
      //         mat.uniforms.dispFactor.value = 0.0
      //         isAnimating = false
      //       },
      //     })

      //     let slideTitleEl = document.getElementById('slide-title')
      //     let slideStatusEl = document.getElementById('slide-status')
      //     let nextSlideTitle = document.querySelectorAll(`[data-slide-title="${slideId}"]`)[0].innerHTML
      //     let nextSlideStatus = document.querySelectorAll(`[data-slide-status="${slideId}"]`)[0].innerHTML

      //     TweenLite.fromTo(
      //       slideTitleEl,
      //       0.5,
      //       {
      //         autoAlpha: 1,
      //         y: 0,
      //       },
      //       {
      //         autoAlpha: 0,
      //         y: 20,
      //         ease: 'Expo.easeIn',
      //         onComplete: function () {
      //           slideTitleEl.innerHTML = nextSlideTitle

      //           TweenLite.to(slideTitleEl, 0.5, {
      //             autoAlpha: 1,
      //             y: 0,
      //           })
      //         },
      //       }
      //     )

      //     TweenLite.fromTo(
      //       slideStatusEl,
      //       0.5,
      //       {
      //         autoAlpha: 1,
      //         y: 0,
      //       },
      //       {
      //         autoAlpha: 0,
      //         y: 20,
      //         ease: 'Expo.easeIn',
      //         onComplete: function () {
      //           slideStatusEl.innerHTML = nextSlideStatus

      //           TweenLite.to(slideStatusEl, 0.5, {
      //             autoAlpha: 1,
      //             y: 0,
      //             delay: 0.1,
      //           })
      //         },
      //       }
      //     )
      //   }
      // }, 3000)
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

onMounted(() => {
  imagesLoaded(document.querySelectorAll('img'), () => {
    const section = document.querySelector('section.loading')
    if (section) {
      section.classList.remove('loading')
    }

    const el = document.getElementById('slider')
    const imgs = Array.from(el.querySelectorAll('img'))
    new displacementSlider({
      parent: el,
      images: imgs,
    })
  })
})
</script>
<template>
  <div class="slider-wrapper">
    <section class="loading">
      <div>
        <div id="slider">
          <div class="slider-inner">
            <div id="slider-content">
              <div class="meta">Création</div>
              <h1 id="slide-title">Sites <br />Internet</h1>
              <span data-slide-title="0">Sites <br />Internet</span>
              <span data-slide-title="1">
                Sites <br />
                E-commerce
              </span>
              <span data-slide-title="2">Audits <br />SEO</span>
              <span data-slide-title="3">Web <br />Design</span>
              <div class="meta">SPéCIFICITéS</div>
              <div id="slide-status">Optimisés SEO</div>
              <span data-slide-status="0">Mobile First</span>
              <span data-slide-status="1">Ultra Performants</span>
              <span data-slide-status="2">Totalement Gratuits</span>
              <span data-slide-status="3">User Friendly</span>
            </div>
          </div>

          <img src="@/assets/images/headphones-duo.png" alt="mockup site web" />
          <img src="@/assets/images/nike.png" alt="mockup site web" />
          <img src="@/assets/images/nuit.png" alt="mockup site web" />
          <img src="@/assets/images/biscuit.png" alt="mockup site web" />

          <div id="pagination">
            <button class="active" data-slide="0"></button>
            <button data-slide="1"></button>
            <button data-slide="2"></button>
            <button data-slide="3"></button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
@charset "UTF-8";

.slider-wrapper {
  display: flex;
  margin-top: -6rem;
  height: 560px;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: $laptop-screen) {
    height: calc(100vh - 4rem);
  }
}

#slider {
  display: flex;
  width: 100%;
  position: relative;
  @media (min-width: $big-tablet-screen) {
    padding: 0 2rem;
  }

  @media (min-width: $laptop-screen) {
    padding: 0 4rem;
    height: calc(100vh - 4rem);
    max-width: 1500px;
  }
  @media (min-width: $super-big-screen) {
    max-width: 1700px;
  }
}

#slider canvas {
  max-width: 375px;
  width: 375px;
  max-height: 290px;
  height: 290px;
  position: absolute;
  right: 0;
  left: 0;
  top: 4.5rem;
  margin: auto;
  z-index: 0;

  @media (min-width: $big-tablet-screen) {
    max-width: 540px;
    max-height: 340px;
    width: 540px;
    height: 340px;
    right: 6rem;
    top: 0;
    bottom: 0;
    left: inherit;
  }

  @media (min-width: $laptop-screen) {
    right: 6rem;
    max-width: 700px;
    max-height: 600px;
    width: 700px;
    height: 600px;
    left: inherit;
    top: 0;
  }

  @media (min-width: $desktop-screen) {
    right: 6rem;
    max-width: 800px;
    max-height: 600px;
    width: 800px;
    height: 600px;
    left: inherit;
    top: 0;
  }
  @media (min-width: $super-big-screen) {
    right: -6rem;
    max-width: 1400px;
    max-height: 600px;
    width: 1400px;
    height: 600px;
    left: inherit;
    top: 0;
  }
}

#slider img {
  width: 100%;
  height: 100%;
  visibility: hidden;
}

.slider-inner {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: 100%;
  height: 101svh;
  z-index: 1;
  padding: 0 1rem 4rem 0;

  @media (min-width: $tablet-screen) {
    padding: 0 2rem 4rem 0;
  }
  @media (min-width: $big-tablet-screen) {
    padding: 0 2rem 8rem 0;
  }

  @media (min-width: $laptop-screen) {
    padding: 0;
    max-width: 900px;
    align-items: center;
    height: calc(100vh - 4rem);
    margin: inherit;
    position: inherit;
    inset: inherit;
  }
  @media (min-width: $super-big-screen) {
    max-width: 1100px;
  }
}

#slider-content {
  width: 100%;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, $base-color 60%);

  @media (min-width: $laptop-screen) {
    width: 100%;
    padding: 0 1rem;
  }
}
#slider-content h1 {
  font-family: 'Titles', serif;
  font-weight: $skinny-thick;
  font-size: 2.4rem;
  letter-spacing: -1px;
  line-height: 40px;
  margin: 20px 0 32px;
  color: $text-color;
  width: 375px;
  text-shadow: $shadow-white;
  padding: 0 2rem;
  white-space: nowrap;

  @media (min-width: $tablet-screen) {
    font-size: 3.8rem;
    line-height: 60px;
    width: 500px;
  }
  @media (min-width: $laptop-screen) {
    margin: 20px 0 60px;
    font-size: 5.8rem;
    line-height: 100px;
    width: 100%;
    padding: 0;
  }
  @media (min-width: $super-big-screen) {
    font-size: 8rem;
  }
}

#slider-content span {
  display: none;
}
#slider-content .meta {
  padding: 0 2rem;
  width: 100%;
  display: inline-block;
  font-family: 'Custom', sans-serif;
  font-size: 11px;
  letter-spacing: 5px;
  text-transform: uppercase;
  position: relative;
  color: $text-color;

  @media (min-width: $laptop-screen) {
    font-size: 13px;
    padding: 0;
  }
  @media (min-width: $super-big-screen) {
    font-size: 1.5rem;
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
  // background-color: #393d40;
}
#slider-content #slide-status {
  margin-top: 10px;
  padding: 0 2rem;
  font-family: 'Custom', serif;
  font-weight: 300;
  font-size: 18px;
  color: $text-color;

  @media (min-width: $laptop-screen) {
    font-size: 34px;
    padding: 0;
  }

  @media (min-width: $super-big-screen) {
    font-size: 3rem;
  }
}

#pagination {
  padding: 1rem;
  border-radius: 10%;
  position: absolute;
  top: 75%;
  transform: translateY(-50%);
  right: 2rem;
  z-index: 4;
  @media (min-width: $big-tablet-screen) {
    top: 50%;
  }
}
#pagination button {
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 20px;
  height: 20px;
  background-color: $text-color;
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
  border: 1px solid #33333347;
  opacity: 0;
  transition: opacity 0.4s ease-in-out, width 0.4s ease-in-out, height 0.4s ease-in-out;
}

/* Page Loader */
.loading:before {
  content: '';
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $base-color;
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
  background: $text-color;
  animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
  to {
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1);
  }
}
</style>
