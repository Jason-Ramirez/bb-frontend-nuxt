import Cookies from 'js-cookie';

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig();
  const config = {
    baseURL: `${runtimeConfig.BACKEND_URL}/`,
    credentials: 'include',
  }
  const getHeaders = () => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const loginToken = Cookies.get('LOGIN-TOKEN');
    return {
      'Accept': 'application/json',
      'X-XSRF-TOKEN': csrfToken,
      'X-Frontend-Secret': runtimeConfig.APP_SECRET,
      'Authorization': 'Bearer ' + loginToken
    }
  }
  return {
    provide: {
      post: async (url, body) => {
        const jsonString = JSON.stringify(body);
        return $fetch(url, {
          body: jsonString,
          method: 'POST',
          headers: getHeaders(),
          ...config,
        });
      },
      get: async (url) => {
        return $fetch(url, {
          method: 'GET',
          headers: getHeaders(),
          ...config,
        });
      }
    }
  }

})