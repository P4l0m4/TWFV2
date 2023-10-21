// https://nuxt.com/docs/api/configuration/nuxt-config

import { getBlogPages, getPortfolioPages } from './src/utils/sitemap.js'

export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  css: ['@/styles/global.scss'],
  modules: [
    '@pinia/nuxt',
    'nuxt-simple-sitemap',
    ['@storyblok/nuxt', { accessToken: 'p4gGIMh6R6U5xPOUYs5oCgtt' }],
    'nuxt-jsonld',
    'dayjs-nuxt',
    'nuxt-delay-hydration',
  ],
  dayjs: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/_variables.scss";',
        },
      },
    },
  },
  sitemap: {
    sitemaps: true,
    siteUrl: 'https://tekilawebfactory.com',
    urls: async () => {
      const blogPages = await getBlogPages()
      const portfolioPages = await getPortfolioPages()
      return [...blogPages, ...portfolioPages]
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  app: {
    head: {
      script: [
        {
          hid: 'gtmHead',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window, document, 'script', 'dataLayer', 'GTM-W8N9CXHL');`,
          body: true,
          defer: true,
        },
      ],
      htmlAttrs: { lang: 'fr' },
    },
  },
  delayHydration: {
    mode: 'mounted',
    debug: process.env.NODE_ENV === 'development',
  },
})
