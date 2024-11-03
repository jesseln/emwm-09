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
  ],
  image: {
    presets: {
      bookImage: {
        modifiers: {
          width: 200,
          height: 200,
        }
      }
    }
  },
  googleFonts: {
    families: {
      // a name with spaces
      Roboto: true,
      'Source Sans 3': [100,150,200,250,300,350,400,450,500,550,600,650,700],
      'Source Serif 4': [100,150,200,250,300,350,400,450,500,550,600,650,700],
      Raleway: [100,150,200,250,300,350,400,450,500,550,600,650,700],
      // specific font weights
      // Lato: [100, 300],
    }
  },
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" 
        },
        {
            rel: 'stylesheet',
            href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' 
        },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap'
        // }
      ] 
    }
  }
})