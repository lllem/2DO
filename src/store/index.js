import { createStore } from 'vuex'

export default createStore({
  state: {
    draft: {
      title: '',
      description: '',
    },

    tasks: [
      {
        id: 1,
        title: "Заголовок задачи",
        done: false,
        description: "Описание задачи",
      },
      {
        "id": 2,
        title: "Task title",
        done: true,
        description: "Task description",
      },
      {
        "id": 3,
        done: false,
        description: "Задача без заголовка",
      },
      {
        "id": 4,
        done: false,
        title: "Задача без описания",
      },
    ],
  },

  mutations: {
    UPDATE_TASK_DONE (state, payload) {
      const selectedTask = state.tasks.filter( task => task.id === payload.id )
      selectedTask[0].done = payload.done
    },

    UPDATE_DRAFT (state, payload) {

      console.log()
      // state.draft.id = payload.id
      state.draft.title = payload.title
      state.draft.description = payload.description
    },

    CLEAR_DRAFT (state) {
      state.draft.title = ''
      state.draft.description = ''
    },

    SAVE_DRAFT (state) {
      const newTask = {}
      newTask.id = Date.now()

      for (var variable in state.draft) {
        newTask[variable] = state.draft[variable]
      }
      newTask.id = Date.now()
      newTask.id = Date.now()
      state.tasks.push(newTask)

      this.commit('CLEAR_DRAFT')
    },
  },

  actions: {
    updateTaskDone(store, task) {
      this.commit('UPDATE_TASK_DONE', task)
    },

    updateDraft(store, draft) {
      this.commit('UPDATE_DRAFT', draft)
    },

    clearDraft(store) {
      this.commit('CLEAR_DRAFT')
    },

    saveDraft(store) {
      this.commit('SAVE_DRAFT')
    },
  },

  getters: {
    tasks: state => state.tasks,

    // Задача по id
    taskById: state => (id) => {
      const item = state.tasks.find(task => task.id === id);
      return item;
    },

    draft: state => state.draft,
  },

  modules: {},

})
