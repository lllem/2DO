import axios from 'axios'

export const Stats = {
  state: {
    stats: [],
  },

  mutations: {
    UPDATE_STATS (state, payload) {
      state.stats = payload
    },
  },

  actions: {
    async loadstats() {
      await axios
        .get('https://research-api.toscale.io/research/list-blockchains')
        .then(response => {
          this.commit('UPDATE_STATS', response.data)
        })
        .catch(error => console.log(error))
    },
  },

  getters: {
    stats: state => state.stats,
  },
}

export default Stats
