import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 }
    ],
    mixtures: [
      {
        variant: 'red',
        amount: 20
      },
      {
        variant: 'green',
        amount: 70
      },
      {
        variant: 'blue',
        amount: 40
      }]
  },
  getters: {
    RGBColors (state) {
      return state.colors.map(color => `rgb(${color.red}, ${color.green}, ${color.blue})`)
    },
    ColorsCount (state) {
      return state.colors.length
    },
    Mixtures (state) {
      return state.mixtures
    }
  },
  actions: {
    addColor ({ commit }, colors) {
      if (colors.length === 3) {
        const [red, green, blue] = colors.map(item => Math.floor(item.amount * 2.5))
        commit('ADD_COLOR', { red, green, blue })
      }
    },
    increment ({ commit }, index) {
      commit('CHANGE_COLOR_PLUS', index)
    },
    decrement ({ commit }, index) {
      commit('CHANGE_COLOR_MINUS', index)
    },
    refresh ({ commit }, mixtures) {
      commit('REFRESH_COLORS', mixtures)
    }
  },
  mutations: {
    ADD_COLOR (state, color) {
      state.colors.push(color)
    },
    REMOVE_COLOR (state, index) {
      state.colors.splice(index, 1)
    },
    CHANGE_COLOR_PLUS (state, index) {
      if (state.mixtures[index].amount === 100) return false
      state.mixtures[index].amount++
    },
    CHANGE_COLOR_MINUS (state, index) {
      if (state.mixtures[index].amount === 0) return false
      state.mixtures[index].amount--
    },
    REFRESH_COLORS (state) {
      state.mixtures = state.mixtures.map(item => ({ ...item, amount: 50 }))
    }
  }
})
