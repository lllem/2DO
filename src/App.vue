<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <NavBar/>

  <main>
    <RouterView class="container max-w-screen-sm mx-auto" />
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
