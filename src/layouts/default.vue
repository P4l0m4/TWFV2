<script setup>
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()
useJsonld(() => ({
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'SampleShop',
  url: 'https://nuxt3-shopify-template.netlify.app/',
}))

let loader = ref(true)
setTimeout(() => {
  loader.value = false
  localStorage.setItem('count', 1)
}, 2300)
</script>

<template>
  <div class="container">
    <Transition><LoaderAnimation v-if="loader" /></Transition>
    <HeaderComponent />
    <main><slot /></main>
    <FooterComponent />
  </div>
  <!-- Google Tag Manager (noscript) -->
  <noscript
    ><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-MQVVM37"
      height="0"
      width="0"
      style="display: none; visibility: hidden"
    ></iframe
  ></noscript>
  <!-- End Google Tag Manager (noscript) -->
</template>
<style scoped lang="scss">
//transition
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-leave-to {
  opacity: 0;
}
.container {
  display: flex;
  flex-direction: column;
  padding: 7rem 0 0 0;
  gap: 2rem;
  align-items: center;
  margin: auto;

  @media (min-width: $laptop-screen) {
    padding: 10rem 0 0 0;
  }

  & main {
    width: 100%;
    min-height: 100vh;
  }
}
</style>
