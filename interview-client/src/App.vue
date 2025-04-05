<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <a href="/">Home</a>
    <a href="/not-home">Not home</a>
  </header>
  <RouterView />
</template>