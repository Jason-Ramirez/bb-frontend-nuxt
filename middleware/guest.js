export default function(to, from) {
  const nuxtApp = useNuxtApp();
  const state  = nuxtApp.$auth.$state;
  console.log('middleware(guest) path to', to.path, 'from', from.path);
  if (state.loggedIn) return navigateTo('/');
}