<template>
  <div class="stats">

    <h1
    class="font-bold text-2xl text-center my-6 flex items-start justify-center"
    data-aos="fade-up" data-aos-duration="900" data-aos-delay="0"
    >
      Статистика TVL
      <span v-if="stats.rows && stats.rows.length" class="text-sm inline-block text-white bg-indigo-400 rounded-3xl px-2">{{ stats.rows.length }}</span>
    </h1>

    <div class="flex gap-x-4 text-sm"
    data-aos="fade-up" data-aos-duration="900" data-aos-delay="100"
    >
      <label class="flex gap-x-2 uppercase font-semibold text-slate-400 cursor-pointer">
        <input type="radio" v-model="filters" value="">
        <span>Все</span>
      </label>

      <label class="flex gap-x-2 uppercase font-semibold text-slate-400 cursor-pointer">
        <input type="radio" v-model="filters" value="1">
        <span>&gt;1%</span>
      </label>

      <label class="flex gap-x-2 uppercase font-semibold text-slate-400 cursor-pointer">
        <input type="radio" v-model="filters" value="0.5">
        <span>&gt;0.5%</span>
      </label>

    </div>

    <template
    v-for="(stat, index) in stats.rows"
    :key="stat.id"
    >
      <div
      v-if="!filters || (stat.percent > filters)"
      class="rounded-2xl p-4 flex items-center gap-x-4 overflow-hidden transition border-top bg-white shadow-lg border-white border-indigo-200 border-b my-4"
      data-aos="fade-up" data-aos-duration="900" data-aos-offset="0" :data-aos-delay="60 * (index + 2)"
      >
        <img
        :src="`https://toscalepublic.s3.eu-west-2.amazonaws.com/images/blockchains/${ stat.name.toLowerCase() }.png`"
        class="item-img aspect-square"
        :alt="stat.name"
        >

        <div>
          <h3 class="font-bold text-lg flex items-center mb-1"><span class="me-2 font-bold text-indigo-500 border-2 border-indigo-300 inline-block px-1 rounded-lg text-sm">{{ stat.nativeToken }}</span>{{ stat.name }}</h3>

          <p class="font-semibold text-sm text-indigo-800">{{ stat.tvl }}</p>

          <p class="font-semibold text-sm text-indigo-800">{{ stat.percent }}</p>
        </div>

      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      filters: '',
    }
  },

  computed: {
    ...mapGetters([
      'stats',
      'tvl',
    ]),

    allTVL() {
      let all = 0

      if (!this.stats || !this.stats.rows) return false

      this.stats.rows.forEach(element => {
        all += element.tvl
      })

      return all
    },

    allTVL() {
      let all = 0

      if (!this.stats || !this.stats.rows) return false

      this.stats.rows.forEach(element => {
        all += element.tvl
      })

      return all
    },
  },

  mounted() {
    this.$store.dispatch('loadstats')
  }
}
</script>

<style lang="scss">
.item-img {
  width: 4rem;
  object-fit: contain;
}
</style>
