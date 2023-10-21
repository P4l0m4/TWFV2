<script setup>
// import { register } from 'swiper/element/bundle'

// register()
useJsonld(
  () => (
    {
      '@context': 'https://schema.org/',
      '@type': 'WebSite',
      name: 'Tekila Web Factory',
      url: 'https://tekilawebfactory.com/',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Tekila Web Factory',
      alternateName: 'TWF',
      url: 'https://tekilawebfactory.com/',
      logo: 'https://tekilawebfactory.com/_nuxt/logo.8aab4942.svg',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '0695155301',
          contactType: 'technical support',
          contactOption: 'TollFree',
          areaServed: ['FR', 'CH'],
          availableLanguage: ['en', 'fr', 'es'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '0670503593',
          contactType: 'billing support',
          contactOption: 'TollFree',
          areaServed: ['FR', 'CH'],
          availableLanguage: ['en', 'fr'],
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/tekila-web-factory/about/',
        'https://github.com/P4l0m4',
        'https://tekilawebfactory.com/',
      ],
    }
  )
)
</script>

<template>
  <div class="container">
    <!-- <Transition><LoaderAnimation v-if="loader" /></Transition> -->
    <HeaderComponent />
    <main><slot /></main>
    <FooterComponent />
  </div>
  <!-- Google Tag Manager (noscript) -->
  <noscript
    ><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-W8N9CXHL"
      height="0"
      width="0"
      style="display: none; visibility: hidden"
      title="Google Tag Manager"
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
  padding: 8rem 0 0 0;
  gap: 2rem;
  align-items: center;
  margin: auto;
  max-width: 100vw;
  @media (min-width: $big-tablet-screen) {
    padding: 5rem 0 0 0;
  }
  @media (min-width: $laptop-screen) {
    padding: 8rem 0 0 0;
  }

  & main {
    width: 100%;
    min-height: 100vh;
  }
}
</style>
