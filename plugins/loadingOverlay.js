import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLoading, {
    property: {
      id: 'LOADING_ID'
    }
  })
})