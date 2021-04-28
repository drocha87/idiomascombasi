export default {
  server: {
    port: process.env.PORT || 8080,
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
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { ref: 'preconnect', href: 'https://fonts.gstatic.com' },
      { ref: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Antonio:wght@400;600;700&display=swap'},
      { ref: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap'},
      { ref: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap'},
      // { ref: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Icons'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
