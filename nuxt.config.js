// @remind

import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BACKEND_URL: process.env.BACKEND_URL,
      APP_SECRET: process.env.APP_SECRET,
    }
  },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/color-mode', 
    '@nuxtjs-alt/auth', // nuxt auth
    '@nuxtjs-alt/axios', // nuxt auth
    '@pinia/nuxt' // nuxt auth
  ],
  axios: {
    // baseURL: 'http://localhost:8000',
    baseURL: process.env.BACKEND_URL,
    proxy: true,
    credentials: true,
    // proxyHeaders: true,
  },
  proxy: {
    '/laravel': {
      target: 'https://laravel-auth.nuxtjs.app',
      pathRewrite: { '^/laravel': '/' }
    }
  },
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.BACKEND_URL,
        // endpoints: {
        //   login: { 
        //     url: process.env.BACKEND_URL + '/login',
        //     // method: 'post',
        //     // withCredentials: true, 
        //     // headers: {
        //     //   'X-Requested-With': 'XMLHttpRequest',
        //     //   'Content-Type': 'application/json'
        //     // } 
        //   },
        //   user: { url: process.env.BACKEND_URL + '/api/user' }
        // // },
        // // user: {
        // //   property: {
        // //     client: false,
        // //     server: false
        // //   },
        // //   autoFetch: false
        // },
        // nonsense
        // token: {
        //   property: 'token',
        //   global: true,
        //   required: true,
        //   type: 'Bearer',
        // },
      },
      // local: {
      //   endpoints: {
      //     login: { url: process.env.BACKEND_URL + '/login' },
      //     user: { url: process.env.BACKEND_URL + '/api/user' },
      //     logout: false
      //   },
      //   user: {
      //     property: 'data',
      //     autoFetch: true,
      //   }
      // }
    },
    redirect: {
      logout: '/login'
    },
    // watchLoggedIn: false
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    classSuffix: ''
  },
  loading: {
    color: 'blue',
    height: '10px',
    throttle: 0,
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  }
})
