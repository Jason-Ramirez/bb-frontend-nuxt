// @remind

import Cookies from 'js-cookie';
import { watch } from 'vue';
// import { useAuthStore } from '@/store'

// const authStore = useAuthStore();

// export async function login(credentials) {
//   const nuxtApp = useNuxtApp();
//   const jsonString = JSON.stringify(data);
//   const response = await nuxtApp.$post(`/login`, {
//     method: 'POST',
//     body: jsonString,
//   });
//   return await response.json();

//   await csrf();
//   console.log("Cookies.get('XSRF-TOKEN')", Cookies.get());
//   const { $post, $get } = useNuxtApp();
//   await $post(`/login`, credentials);
//   return $get('/api/user');

// }

export async function login(credentials) {
  const nuxtApp = useNuxtApp();
  const response = await nuxtApp.$post(`/login`, credentials);
  console.log('try this', nuxtApp.$auth);
  console.log('login response', response);
  console.log('test local storage', nuxtApp.$auth.$storage);
  return nuxtApp.$get('/api/user');
}

export async function getCSRF() {
  await useNuxtApp().$get(`/sanctum/csrf-cookie`);
  console.log('csrf success', Cookies.get('XSRF-TOKEN'));
  return Cookies.get('XSRF-TOKEN') || '';
} 


// export function setUser(user) {
//       authStore.user = user;
//   }

// export function getUser() {

// }