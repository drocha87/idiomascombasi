export default {
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Idiomas com Basi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Olá, eu sou a Basilia especialista em Inglês e Espanhol',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://idiomascombasi.com.br',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Idiomas com Basi',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Olá, eu sou a Basilia especialista em Inglês e Espanhol',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/euyome/image/upload/v1620069177/idiomascombasi/og_image_waqy0a.jpg',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Basilia Santiago',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '500',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '500',
      },
    ],
    htmlAttrs: {
      lang: 'en',
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/gtag'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    vueI18nLoader: true,
    defaultLocale: 'pt-BR',

    locales: [
      { code: 'pt-BR', name: 'Português' },
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
    ],
    vueI18n: {
      fallbackLocale: 'pt-BR',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: 'http://localhost:3333',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
