export const Tasks = {
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
    UPDATE_TASK (state, payload) {
      let i // индекс элемента в массиве

      state.tasks.find( (el, index) => {
        if (el.id == payload.id) {
          i = index
          return true
        }
        return false
      })

      for (var variable in payload) {
        state.tasks[i][variable] = payload[variable]
      }
    },

    UPDATE_DRAFT (state, payload) {
      state.draft.title = payload.title
      state.draft.description = payload.description
    },

    DELETE_TASK (state, id) {
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id == id) {
          state.tasks.splice(i, 1)
        }
      }
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
    updateTask(store, task) {
      this.commit('UPDATE_TASK', task)
    },

    deleteTask(store, id) {
      this.commit('DELETE_TASK', id)
    },

    updateDraft(store, draft) {
      this.commit('UPDATE_DRAFT', draft)
    },

    clearDraft() {
      this.commit('CLEAR_DRAFT')
    },

    saveDraft() {
      this.commit('SAVE_DRAFT')
    },
  },

  getters: {
    tasks: state => state.tasks,

    // Задача по id
    taskById: state => (id) => {
      const item = state.tasks.find(task => task.id == id);
      return item;
    },

    draft: state => state.draft,
  },
}

export default Tasks
