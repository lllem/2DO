<script setup>
</script>

<template>
  <h1 class="font-bold text-2xl my-6 text-center"></h1>
  <h1
  class="font-bold text-2xl text-center my-6 flex items-start justify-center"
  data-aos="fade-up" data-aos-duration="900" data-aos-delay="0"
  >
  {{ hello }}!
  </h1>

  <router-link
  to="/tasks"
  class="block rounded-2xl px-4 py-6 bg-white shadow-lg border-white border-indigo-200 border-b my-4 text-center"
  data-aos="fade-up" data-aos-duration="900" data-aos-offset="0" data-aos-delay="400"
  >
    <ListBulletIcon class="icon text-sky-400" />
    <h3 class="font-bold text-xl text-indigo-600">Посмотреть задачи</h3>
  </router-link>

  <router-link
  to="/stats"
  class="block rounded-2xl px-4 py-6 bg-white shadow-lg border-white border-indigo-200 border-b my-4 text-center"
  data-aos="fade-up" data-aos-duration="900" data-aos-offset="0" data-aos-delay="800"
  >
    <ArrowTrendingUpIcon class="icon text-sky-400" />
    <h3 class="font-bold text-xl text-indigo-600">Посмотреть статистику TVL</h3>
  </router-link>
</template>

<script>
import { ArrowTrendingUpIcon, ListBulletIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    ArrowTrendingUpIcon,
    ListBulletIcon,
  },

  computed: {
    hello() {
      const hours = new Date().getHours()

      if (hours >= 4 && hours < 12) return 'Доброе утро'
      else if (hours >= 12 && hours < 17) return 'Добрый день'
      else if (hours >= 17 && hours < 22) return 'Добрый вечер'
      else return 'Доброй ночи'
    }

  },
}
</script>

<style scoped>
.icon {
  font-size: 4rem;
}
</style>
