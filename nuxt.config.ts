// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages"
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/supabase",
    "@nuxt/icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    '@vueuse/nuxt',
    'floating-vue/nuxt',
    '@nuxtjs/stylelint-module',
  ]
})