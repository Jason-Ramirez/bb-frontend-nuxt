import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(
    useLocalStorage('user', { name: null, email: null })
  );

  const setUser = (data) => {
    user.value = data;
  }

  return {
    user,
    setUser,
  }
});