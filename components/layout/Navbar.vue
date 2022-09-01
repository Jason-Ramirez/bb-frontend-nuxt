<script lang='ts'>
export default defineNuxtComponent({
  setup() {
    async function onLogout() {
      console.log('logout');
      try {
        await this.$auth.logout();
      } catch (error) {
        console.log('Logout failed:', error);
      }
    }
    return { onLogout }
  },
})
</script>

<template>
  <div class="navbar relative dark:bg-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <nav class="hidden md:flex space-x-10">
          <nuxt-link to="/home">
            <span class="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </span>
          </nuxt-link>
          <nuxt-link to="/users">
            <span class="text-base font-medium text-gray-500 hover:text-gray-900">
              Go to CRUD
            </span>
          </nuxt-link>
        </nav>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <button 
            v-if="true" 
            @click="onLogout"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> 
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>