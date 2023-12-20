<template>
  <header class="">
    <nav class="container px-4 max-w-screen-sm mx-auto flex items-center gap-x-6 mb-6">

      <RouterLink to="/" class="font-extrabold text-lg py-3 inline-block text-sky-500"><span class="text-sky-900">2</span>DO</RouterLink>

      <div class="gap-x-6 flex items-center ms-auto">

        <RouterLink to="/tasks" class="text-link font-bold text-sm py-3 inline-block">Задачи</RouterLink>

        <RouterLink to="/stats" class="text-link font-bold text-sm py-3 inline-block">Статистика</RouterLink>

        <RouterLink to="/new" class="bg-indigo-600 rounded px-2 font-extrabold text-2xl py-2 inline-block text-white flex items-center" title="создать задачу">
          <PlusIcon class="icon" />
        </RouterLink>

      </div>
    </nav>
  </header>
</template>

<script>
import { PlusIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    PlusIcon,
  },
}

</script>

<style lang="scss">
.text-link {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;
    display: inline-block;
    border-bottom: 2px solid #68d0ff;
    transition: all 0.6s;
    opacity: 0;
  }

  &.router-link-active {
    &::before {
      left: 33%;
      right: 33%;
      opacity: 1;
    }


    &.router-link-exact-active {
      &::before {
        left: 0;
        right: 0;
      }
      //
    }
  }
}

</style>
