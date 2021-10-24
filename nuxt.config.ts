import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  // privateRuntimeConfig: {
  //   apiSecret: process.env.DB_URL,
  // },
  // css: ['~/assets/scss/main.scss'],

  buildModules: [
    // '@nuxtjs/svg',
    // '@nuxtjs/dotenv',
  ],
  //   serverMiddleware: [  {
  //     path: "api/users",
  //     handler: '~/api/users/index.js'
  //   }
  // ]
})
