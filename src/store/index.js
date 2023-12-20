import { createStore } from 'vuex'

export default createStore({
  state: {
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
  },

  actions: {
    updateTaskDone(store, task) {
      this.commit('UPDATE_TASK_DONE', task)
    },
  },

  getters: {
    tasks: state => state.tasks,

    // Задача по id
    taskById: state => (id) => {
      const item = state.tasks.find(task => task.id === id);
      return item;
    },
  },

  modules: {},

})
