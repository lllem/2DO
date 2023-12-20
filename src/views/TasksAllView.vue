<template>
  <h1
  class="font-bold text-2xl text-center my-6 flex items-start justify-center"
  data-aos="fade-up" data-aos-duration="900" data-aos-delay="0"
  >
    Задачи <span class="text-sm inline-block text-white bg-indigo-400 rounded-3xl px-2">{{ tasks.length }}</span>
  </h1>

  <div class="flex gap-x-4 text-sm"
  data-aos="fade-up" data-aos-duration="900" data-aos-delay="100"
  >
    <label class="flex gap-x-2 uppercase font-semibold text-slate-400 cursor-pointer">
      <input type="radio" v-model="filters" value="">
      <span>Все</span>
    </label>

    <label class="flex gap-x-2 uppercase font-semibold text-slate-400 cursor-pointer">
      <input type="radio" v-model="filters" value="checked">
      <span>Выполненные</span>
    </label>

    <label class="flex gap-x-2 uppercase font-semibold text-slate-400 cursor-pointer">
      <input type="radio" v-model="filters" value="unchecked">
      <span>Невыполненные</span>
    </label>

  </div>

  <TaskCard
  v-if="draft.title || draft.description"
  :task="draft"
  :draft="true"
  />

  <hr v-if="(draft.title || draft.description) && tasks.length" class="my-6 border-indigo-300">

  <div v-if="tasks.length" class="tasks">

    <template v-for="(task, index) in tasks">
      <TaskCard
      v-if="!filters || (filters === 'checked' && task.done === true) || (filters === 'unchecked' && !task.done)"
      :key="`task_${ task.id }`"
      class="my-4"
      :task="task"
      data-aos="fade-up" data-aos-duration="900" data-aos-offset="0" :data-aos-delay="100 * (index + 2)"
      />
    </template>
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
  data() {
    return {
      filters: '',
    }
  },

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
