// https://nuxt.com/docs/api/configuration/nuxt-config

import { getProductPages } from './src/utils/sitemap.js'

export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  css: ['@/styles/global.scss'],
  modules: [
    '@pinia/nuxt',
    'nuxt-calendly',
    'nuxt-simple-sitemap',
    ['@storyblok/nuxt', { accessToken: 'HywsRInkperCxQGCRiQGhAtt' }],
  ],

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
    siteUrl: 'https://nuxt3-shopify-template.netlify.app',
    urls: async () => {
      return await getProductPages()
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
      })(window, document, 'script', 'dataLayer', 'GTM-MQVVM37');`,
        },
      ],
      htmlAttrs: { lang: 'fr' },
    },
  },
})
