<template>
  <div class="tasks">
    <h1 class="font-bold text-2xl text-center my-6">Задачи</h1>

    <TaskCard
    v-for="task in tasks"
    :key="`task_${ task.id }`"
    class="my-4"
    :task="task"
    />
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TaskCard,
  },

  computed: {
    ...mapGetters([
      'tasks',
    ]),
  },
}
</script>

<style>
</style>
