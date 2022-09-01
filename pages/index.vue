<script>
definePageMeta({
  layout: 'authenticated',
  middleware: 'auth',
});
</script>

<template>
  <div>
    INDEX PAGE
    <p>Name: {{ $auth.user?.name }}</p>
    <p>Email: {{ $auth.user?.email }}</p>   
  </div> 
</template>