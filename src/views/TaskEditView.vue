<template>
  <form class="new-note grid gap-6 bg-white px-4 py-6 shadow-lg rounded-2xl">
    <input
    ref="title"
    v-model="newTask.title"
    type="text"
    placeholder="Заголовок задачи"
    class="w-full font-bold text-2xl my-6 text-center bg-transparent outline-none">

    <textarea
    v-model="newTask.description"
    rows="3"
    placeholder="Описание"
    class="bg-transparent outline-none text-lg insline-block w-full border-b-2 border-sky-300"
    ></textarea>

    <footer class="flex justify-center gap-x-6">

      <button @click.prevent="save" class="bg-indigo-600 rounded px-3 font-bold text-xl py-2 inline-block text-white flex items-center"><CheckIcon class="icon me-2" /><span class="text-sm uppercase">Сохранить</span></button>

      <button v-if="draft.title || draft.description" @click="clear" class="rounded px-3 font-bold text-xl py-2 inline-block flex items-center text-indigo-400"><TrashIcon class="icon me-2" /><span class="text-sm uppercase">Удалить</span></button>

      <button v-else @click="clear" class="rounded px-3 font-bold text-xl py-2 inline-block flex items-center text-indigo-400"><XMarkIcon class="icon me-2" /><span class="text-sm uppercase">Отмена</span></button>

    </footer>
  </form>
</template>

<script>
import { CheckIcon, XMarkIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      newTask: {
        title: '',
        description: '',
      },
    }
  },

  components: {
    CheckIcon,
    TrashIcon,
    XMarkIcon,
  },

  methods: {
    save() {
      this.$store.dispatch('saveDraft')
      this.$router.push('/tasks')
    },

    clear() {
      this.$store.dispatch('clearDraft')
      this.$router.push('/tasks')
    },
  },

  computed: {
    ...mapGetters([
      'draft',
    ]),
  },

  mounted() {
    this.newTask.title = this.draft.title
    this.newTask.description = this.draft.description
    this.$refs.title.focus()
  },

  watch: {
    'newTask': {
      handler: function(newValue) {
        this.$store.dispatch('updateDraft', newValue)
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss">
</style>
