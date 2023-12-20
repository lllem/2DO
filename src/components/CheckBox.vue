<template>
  <div
  class="checkbox rounded-lg transition border border-2 cursor-pointer text-center flex items-center"
  :class="{
    'text-sky-500 border-sky-500 bg-sky-500 text-white': modelValue,
    'bg-white border-slate-300 bg-slate-100': !modelValue,
  }"
  @click.prevent="click"
  >
    <CheckIcon v-if="modelValue" class="icon" />
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/24/outline'

export default {
  props: {
    modelValue: Boolean,
  },

  components: {
    CheckIcon,
  },

  methods: {
    click() {
      this.taskDone = !this.modelValue
    }
  },

  computed: {
    taskDone: {
      get() {
        return this.done
      },

      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>

<style lang="scss">
.checkbox {
  width: 1em;
  height: 1em;
  user-select: none;
  line-height: 1em;
}
</style>
