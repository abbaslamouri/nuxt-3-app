<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div>
    <header><Navbar /></header>
    <slot />
    <footer>Footer</footer>
  </div>
</template>
