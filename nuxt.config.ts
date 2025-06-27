export default defineNuxtConfig({
  nitro: { preset: 'vercel_edge' },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  typescript: { strict: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/eslint'],
  srcDir: 'src/',
  css: [
    '~/shared/configs/styles/reset.scss',
    '~/shared/configs/styles/main.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/shared/configs/styles/variables.scss" as *;\n',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://www.thecocktaildb.com/api/json/v1/1/',
    },
  },
});
