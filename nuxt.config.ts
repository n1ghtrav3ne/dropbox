// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css:["~/assets/css/main.css"],
  modules: ['@nuxtjs/tailwindcss'],

  app:{
    head:{
      title:"مثلث آفتاب"
    }
  }
})