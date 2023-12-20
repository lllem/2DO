<template>
  <div class="tasks text-center grid gap-6 bg-white px-4 py-6 shadow-lg rounded-2xl" v-if="task && !edit">

    <header>
      <p class="inline-block mx-auto text-start text-sm font-bold text-indigo-300">#{{ task.id }}</p>
      <h1 class="font-bold text-2xl">{{ task.title || task.description }}</h1>
    </header>

    <p v-if="task.description" class="text-lg">{{ task.description }}</p>

    <footer class="flex justify-center gap-x-6">

      <button v-if="!taskDone" @click.prevent="taskDone = !taskDone" class="rounded px-3 font-bold text-xl py-2 inline-block text-indigo-600 flex items-center border-2 border-indigo-600"><StopIcon class="icon me-2" /><span class="text-sm uppercase">В процессе</span></button>

      <button v-if="taskDone" @click.prevent="taskDone = !taskDone" class="bg-indigo-600 rounded px-3 font-bold text-xl py-2 inline-block text-white flex items-center border-2 border-indigo-600"><CheckIcon class="icon me-2" /><span class="text-sm uppercase">Готово</span></button>

      <button @click="del" class="rounded px-3 font-bold text-xl py-2 inline-block flex items-center text-indigo-400"><TrashIcon class="icon me-2" /><span class="text-sm uppercase">Удалить</span></button>

      <button @click.prevent="editTask" class="rounded px-3 font-bold text-xl py-2 inline-block flex items-center text-indigo-400"><PencilSquareIcon class="icon me-2" /><span class="text-sm uppercase">Редактировать</span></button>

    </footer>
  </div>

  <form class="new-note grid gap-6 bg-white px-4 py-6 shadow-lg rounded-2xl" v-else-if="edit">
    <input
    ref="title"
    v-model="editedTask.title"
    type="text"
    placeholder="Заголовок задачи"
    class="w-full font-bold text-2xl my-6 text-center bg-transparent outline-none">

    <textarea
    v-model="editedTask.description"
    rows="3"
    placeholder="Описание"
    class="bg-transparent outline-none text-lg insline-block w-full border-b-2 border-sky-300"
    ></textarea>

    <footer class="flex justify-center gap-x-6">

      <button @click.prevent="saveTask" class="bg-indigo-600 rounded px-3 font-bold text-xl py-2 inline-block text-white flex items-center"><CheckIcon class="icon me-2" /><span class="text-sm uppercase">Сохранить</span></button>

      <button @click.prevent="edit = false" class="rounded px-3 font-bold text-xl py-2 inline-block flex items-center text-indigo-400"><XMarkIcon class="icon me-2" /><span class="text-sm uppercase">Отмена</span></button>

    </footer>
  </form>

  <div class="text-center" v-else>
    <h1 class="font-bold text-2xl my-6">404</h1>
    <p>Нет такой задачи</p>
  </div>

</template>

<script>
import { CheckIcon, TrashIcon, XMarkIcon, StopIcon, PencilSquareIcon } from '@heroicons/vue/24/outline'

export default {
  props: {
    id: [Number, String],
  },

  data() {
    return {
      edit: false,
      editedTask: {
        title: '',
        description: '',
      },
    }
  },

  components: {
    CheckIcon,
    TrashIcon,
    StopIcon,
    PencilSquareIcon,
    XMarkIcon,
  },

  methods: {
    editTask() {
      this.editedTask.title = this.task.title
      this.editedTask.description = this.task.description
      this.edit = true
    },

    saveTask() {
      this.editedTask.id = this.id
      this.$store.dispatch('updateTask', this.editedTask)
      this.edit = false
    },

    del() {
      this.$store.dispatch('deleteTask', this.id)
      this.$router.push('/tasks')
    },
  },

  computed: {
    task() {
      const item = this.$store.getters.taskById(Number(this.id));
      return item;
    },

    taskDone: {
      set(value) {
        const task = {}
        task.id = this.task.id
        task.done = value
        this.$store.dispatch('updateTask', task)
      },

      get() {
        return this.task.done
      }
    },
  },
}
</script>

<style>
</style>
