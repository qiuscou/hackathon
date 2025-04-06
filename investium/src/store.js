import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: JSON.parse(localStorage.getItem('user') || null),
  },
  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.isAuthenticated = value
      localStorage.setItem('isAuthenticated', value)
    },
    SET_USER(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
  },
  actions: {
    login({ commit }, user) {
      commit('SET_AUTHENTICATED', true)
      commit('SET_USER', user)
    },
    logout({ commit }) {
      commit('SET_AUTHENTICATED', false)
      commit('SET_USER', null)
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('user')
    },
  },
  getters: {
    currentUser: (state) => state.user,
    isAuthenticated: (state) => state.isAuthenticated,
  },
})
