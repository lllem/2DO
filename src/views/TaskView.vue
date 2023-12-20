<template>
  <div class="tasks text-center" v-if="task">
    <h1 class="font-bold text-2xl my-6">{{ task.title || task.description }}</h1>

    <p v-if="task.description" class="inline-block mx-auto text-start" contenteditable="">{{ task.description }}</p>

    <p>{{ String(task.done) }}</p>

    <TaskCard
    v-for="task in tasks"
    :key="`task_${ task.id }`"
    class="my-4"
    :task="task"
    />
  </div>

  <div class="text-center" v-else>
    <h1 class="font-bold text-2xl my-6">404</h1>
    <p>Нет такой задачи</p>
  </div>
</template>

<script>
export default {
  props: {
    id: [Number, String],
  },

  computed: {
    task() {
      const item = this.$store.getters.taskById(Number(this.id));
      return item;
    },
  },
}
</script>

<style>
</style>
