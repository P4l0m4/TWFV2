<script setup>
// import { register } from 'swiper/element/bundle'

// register()
useJsonld(() => ({
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Tekila Web Factory',
  url: 'https://tekilawebfactory.com/',
}))

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tekila Web Factory',
  alternateName: 'TWF',
  url: 'https://tekilawebfactory.com/',
  logo: 'https://tekilawebfactory.com/_nuxt/logo.0e42c76d.svg',
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
}))
</script>

<template>
  <HeaderComponent />
  <main><slot /></main>
  <FooterComponent />

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
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 84px;
  min-height: 100svh;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
    padding-top: 76px;
  }

  & ::-webkit-scrollbar {
    width: 8px;
    display: none !important;
  }
}
</style>
