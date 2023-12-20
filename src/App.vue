<template>
  <NavBar/>

  <main class="container px-4 mx-auto max-w-screen-sm overflow-hidden py-4">
    <RouterView />
  </main>

  <footer class="container px-4 mt-6 text-sm mx-auto max-w-screen-sm">
    <div class="border-indigo-300 text-indigo-800 border-t-2 py-6">
      footer
    </div>
  </footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AOS from 'aos'

export default {
  components: {
    NavBar,
  },

  mounted() {
    AOS.init()
  },
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  main {
    flex-grow: 1;
  }
}
</style>
