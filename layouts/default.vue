<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <slot />
    <footer>Footer</footer>
  </div>
</template>
