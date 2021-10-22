import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // 'bulma',
    // CSS file in the project
    // '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/scss/main.scss',
  ],

  buildModules: ['@nuxtjs/svg'],
  //   serverMiddleware: [  {
  //     path: "api/users",
  //     handler: '~/api/users/index.js'
  //   }
  // ]
})
