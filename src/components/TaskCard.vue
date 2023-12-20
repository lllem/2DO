<template>
  <router-link :to="`/tasks/${ task.id }`"
  class="rounded-2xl p-4 flex items-center gap-x-4 overflow-hidden transition border-top"
  :class="{
    'bg-indigo-100 border-indigo-200 border-t': taskDone,
    'bg-white shadow-lg border-white border-indigo-200 border-b': !taskDone,
  }"
  >
    <CheckBoxEl class="text-3xl" v-model="taskDone"/>

    <div>
      <h2 v-if="task.title" class="font-bold text-lg">{{ task.title }}</h2>
      <p v-if="task.description" class="text-lg">{{ task.description }}</p>
    </div>
  </router-link>
</template>

<script>
import CheckBoxEl from '@/components/CheckBox.vue'

export default {
  props: {
    task: Object,
  },

  components: {
    CheckBoxEl,
  },

  data() {
    return {
      done: Boolean,
    }
  },

  computed: {
    taskDone: {
      set(value) {
        const task = {}
        task.id = this.task.id
        task.done = value
        this.$store.dispatch('updateTaskDone', task)
      },

      get() {
        console.log
        return this.task.done
      }
    },
  },
}
</script>
