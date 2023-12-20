import axios from 'axios'

export const Stats = {
  state: {
    stats: {},
  },

  mutations: {
    UPDATE_STATS (state, payload) {
      state.stats = payload

      // считаем общую сумму TVL
      let allTVL = 0

      state.stats.rows.forEach(element => {
        allTVL += element.tvl
      })

      state.stats.tvl = allTVL

      // считаем для каждой валюты

      state.stats.rows.forEach(element => {
        element.percent = element.tvl / allTVL * 100
      })
    },
  },

  actions: {
    async loadstats() {
      await axios
        .get('https://research-api.toscale.io/research/list-blockchains')
        .then(response => {
          this.commit('UPDATE_STATS', response.data)
          this.dispatch('countTVL')
        })
        .catch(error => console.log(error))
    },
  },

  getters: {
    stats: state => state.stats,
  },
}

export default Stats
