<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { onMounted, ref } from 'vue'
let isBookAnAuditOpen = ref(false)
const video = ref()
const showVideo = ref(false)
let exposedGltf = null

onMounted(() => {
  // Canvas
  const canvas = document.querySelector('canvas.webgl')

  // Scene
  const scene = new THREE.Scene()

  let material = new THREE.MeshStandardMaterial({
    color: 0xfffdfa,
    roughness: 0.2,
  })

  // sphere.position.x = -4
  // sphere.position.y = 1
  // cube.position.x = 4
  // cube.position.y = 0.5
  // cube.rotation.z = 0.5
  // cone.position.y = -1

  // cube.scale.set(2, 2, 2)
  // cone.scale.set(1.5, 1.5, 1.5)
  // sphere.scale.set(2, 2, 2)

  /**
   * Lights
   */
  const ambientLight = new THREE.AmbientLight(0xf7f7f7, 3)
  scene.add(ambientLight)

  //blue POINTLIGHT
  const pointLight = new THREE.PointLight(0x1eb2bc, 5)

  scene.add(pointLight)

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.set(0, 0, -4)
  camera.rotation.set(0, 0, 0)

  scene.add(camera)

  // Controls
  const controls = new OrbitControls(camera, canvas)
  controls.enablePan = false
  controls.enableDamping = true
  controls.enableZoom = false
  controls.enableRotate = false
  controls.enable = false

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setClearColor(0xf7f7f7, 0)
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  /**
   * Update all materials
   */
  const updateAllMaterials = () => {
    scene.traverse(child => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        // child.material.envMap = environmentMap

        child.material.needsUpdate = true
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }

  /**
   * Models
   */
  const gltfLoader = new GLTFLoader()
  gltfLoader.load('/objects/iphone12.gltf', gltf => {
    gltf.scene.scale.set(8, 8, 8)
    scene.add(gltf.scene)

    gltf.scene.children.forEach(object => {
      object.material = material
    })

    updateAllMaterials()
    exposedGltf = gltf
  })

  let goUp = false
  let displacement = 0.0001
  function goUpOrDown() {
    if (goUp === true && exposedGltf !== null) {
      exposedGltf.scene.children.forEach(object => {
        object.position.y += displacement
      })

      setTimeout(() => {
        goUp = false
      }, 2000)
    } else if (goUp === false && exposedGltf !== null) {
      exposedGltf.scene.children.forEach(object => {
        object.position.y -= displacement
      })
      setTimeout(() => {
        goUp = true
      }, 2000)
    }
  }

  let mouse = new THREE.Vector3()
  canvas.addEventListener('mousemove', onMouseMove, false)

  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    exposedGltf.scene.children.forEach(object => {
      // object.lookAt(mouse.x, mouse.y, object.position.z)
      object.rotation.y = -mouse.x
      object.rotation.x = mouse.y
    })
  }

  /**
   * Animate
   */

  const tick = () => {
    // Render
    renderer.render(scene, camera)

    goUpOrDown()

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()

  if (window.innerWidth > 768) {
    showVideo.value = true
    setTimeout(() => {
      showVideo.value = false
    }, 6000)
  }
})
</script>
<template>
  <Container>
    <section class="hero">
      <h1 class="hero__title subtitles">Vous êtes invisible pour des centaines de clients potentiels</h1>
      <h2 class="hero__subtitle titles">Soyez là où ils vous cherchent !</h2>
      <h3 class="hero__txt subtitles">Créons un site web au service de votre entreprise</h3>

      <div class="hero__buttons">
        <NuxtLink
          class="hero__buttons__button button-primary"
          href="https://calendly.com/tekilawebfactory/30min"
          target="_blank"
          aria-label="Prendre RDV"
          >Prendre RDV avec nous</NuxtLink
        ><button class="hero__buttons__button button-secondary" @click="isBookAnAuditOpen = !isBookAnAuditOpen">
          Auditer votre site web
        </button>
      </div>
      <AuditBookAnAudit v-if="isBookAnAuditOpen" />
    </section>
    <canvas class="webgl"></canvas>
    <video autoplay="true" muted ref="video" v-if="showVideo">
      <source src="@/assets/videos/website.mp4" type="video/mp4" />
    </video>
  </Container>
</template>

<style lang="scss">
.webgl {
  position: absolute;
  inset: 0;
  margin: auto;
  outline: none;
  width: 100% !important;
  height: 100% !important;
}

.hero {
  margin-top: -71px;
  pointer-events: none;
  position: relative;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  height: calc(100svh - 61px);
  align-items: center;
  justify-content: center;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    margin-top: -63px;
    height: calc(100svh - 76px);
  }

  &__title {
    text-shadow: 0px 0px 1px $base-color;
    text-wrap: balance;
    text-align: center;
    opacity: 0.8;

    @media (min-width: $desktop-screen) {
      text-wrap: normal;
      font-size: 2.5rem;
    }
  }
  &__subtitle {
    text-shadow: $shadow-secondary;
    text-align: center;
    text-wrap: balance;
    width: 100%;
    color: $secondary-color;
    font-family: 'Cooper Hewitt', sans-serif;
    font-weight: 800;

    @media (min-width: $laptop-screen) {
      font-size: calc($titles * $golden-number);
    }

    @media (min-width: $desktop-screen) {
      max-width: 1000px;
      text-wrap: normal;
    }
  }
  &__txt {
    margin-top: 1rem;
    text-align: center;
    font-size: $base-text;
    @media (min-width: $big-tablet-screen) {
      font-size: $subtitles;
    }
    @media (min-width: $desktop-screen) {
      margin-top: 2rem;
    }
  }

  &__buttons {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 100%;
    max-width: 600px;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      flex-direction: row;
    }

    & .button-primary,
    & .button-secondary {
      width: 100%;
      pointer-events: all;
    }
  }
}

video {
  width: 100%;
  position: absolute;
  top: 4rem;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 100svh;
  z-index: 2;
  background-color: $base-color;
}
</style>
