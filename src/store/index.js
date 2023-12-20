import { createStore } from 'vuex'
import Tasks from './modules/tasks.js'
import Stats from './modules/stats.js'

export default createStore({
  state: {},

  mutations: {},

  actions: {},

  getters: {},

  modules: {
    Tasks,
    Stats,
  },
})
