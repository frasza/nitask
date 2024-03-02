// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxt/ui', 'nuxt-auth-utils', '@nuxt/fonts'],
  devtools: { enabled: true },
  nitro: {
    experimental: {
      database: true,
      tasks: true,
    },
  },
  imports: {
    dirs: ['tasks'],
  },
})
