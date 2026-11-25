// https://nuxt.com/docs/api/configuration/nuxt-config
import { PAGES } from './shared/site'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', "@nuxt/content"],
  components: true, // Auto imports

  nitro: {
    prerender: {
      routes: [...PAGES, '/sitemap.xml']
    }
  },

    css: [
        '@/assets/css/normalize.scss',
        '@/assets/css/common.scss',
        '@/assets/css/buttons.scss',
        '@/assets/css/forms.scss',
        '@/assets/css/general.scss',
        '@/assets/css/content.scss',
        '@/assets/css/test.scss'
    ],

  // i18n configuration
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en_US.json', name: 'English' },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    compilation: {
      strictMessage: false
    }
  },

  // App configuration
  app: {
    head: {
      title: 'Arké',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-title', content: 'Arké' },
        { name: 'description', content: 'Pay with bitcoin. In stylé.' },
        { name: "twitter:card", content: "product" },
        { name: "twitter:site", content: "@gbks" },
        { name: "twitter:title", content:  "Arké" },
        { name: "twitter:description", content: "Pay with bitcoin. In stylé." },
        { name: "twitter:image", content: "https://www.arke.cash/assets/images/preview.jpg" },

        { property: "og:title", content: "Arké" },
        { property: "og:description", content: "Pay with bitcoin. In stylé." },
        { property: "og:type", content: "product" },
        { property: "og:image", content: "https://www.arke.cash/assets/images/preview.jpg" },

        { name: "robots", content: "index,follow" },
        { name: "google", content: "notranslate" },
        { name: "HandheldFriendly", content: "true" },
        
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "mobile-web-app-status-bar-style", content: "black" }
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      script: [
        { src: "https://cloud.umami.is/script.js", defer: true, "data-website-id": "738c8ecc-0ba6-4286-8594-3cb5db32167a" }
      ]
    }
  }
})