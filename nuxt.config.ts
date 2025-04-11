// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  vite: {
    server: {
      hmr: {
        overlay: false
      }
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },

  app: {
    head: {
      title: 'UWM Studios',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'UWM Studios - Studioer i hjertet av Oslo. Kongens gate 14.' },
        { name: 'theme-color', content: '#000000' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://studio.underwerk.no/' },
        { property: 'og:title', content: 'UWM Studios' },
        { property: 'og:description', content: 'UWM Studios - Studioer i hjertet av Oslo. Kongens gate 14. Åpning juni 2025.' },
        { property: 'og:image', content: 'social/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Studioer - Kongens gate 14, Oslo - Juni 2025' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://studio.underwerk.no/' },
        { name: 'twitter:title', content: 'UWM Studios' },
        { name: 'twitter:description', content: 'UWM Studios - Studioer i hjertet av Oslo. Kongens gate 14. Åpning juni 2025.' },
        { name: 'twitter:image', content: 'social/og-image.png' },
        { name: 'twitter:image:alt', content: 'Studioer - Kongens gate 14, Oslo - Juni 2025' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2025-04-11'
})