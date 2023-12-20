<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <NavBar/>

  <main class="container px-4 mx-auto max-w-screen-sm">
    <RouterView />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
</style>
