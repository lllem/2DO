<template>
  <h1 class="font-bold text-2xl text-center my-6 flex items-start justify-center">Задачи <span class="text-sm inline-block text-white bg-indigo-400 rounded-3xl px-2">{{ tasks.length }}</span></h1>

  <TaskCard
  v-if="draft.title || draft.description"
  :task="draft"
  :draft="true"
  />

  <hr v-if="(draft.title || draft.description) && tasks.length" class="my-6 border-indigo-300">

  <div v-if="tasks.length" class="tasks">

    <TaskCard
    v-for="task in tasks"
    :key="`task_${ task.id }`"
    class="my-4"
    :task="task"
    />
  </div>

  <div v-else-if="!tasks.length && !(draft.title || draft.description)" class="tasks">
    <RouterLink to="/new" class="bg-indigo-600 rounded px-2 font-extrabold text-2xl py-2 inline-block text-white flex items-center justify-center" title="создать задачу">
      <PlusIcon class="icon me-2" />
      <span class="text-sm uppercase">Добавить</span>
    </RouterLink>
  </div>
</template>

<script>
import { PlusIcon } from '@heroicons/vue/24/outline'
import TaskCard from '@/components/TaskCard.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TaskCard,
    PlusIcon,
  },

  computed: {
    ...mapGetters([
      'tasks',
      'draft',
    ]),
  },
}
</script>

<style>
</style>
