<template>
  <div class="about">
    <h1 class="font-bold text-2xl my-6 text-center">Статистика</h1>

    <pre>{{ stats }}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      //
    }
  },

  computed: {
    ...mapGetters([
      'stats'
    ])
  },

  mounted() {
    this.$store.dispatch('loadstats')
  }
}
</script>

<style lang="scss">
</style>
