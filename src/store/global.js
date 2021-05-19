export default {
  namespaced: true,

  state: {
    dark: false
  },

  getters: {
    getDark: (state) => state.dark
  },

  mutations: {
    toggleDarkMode (state) {
      state.dark = !state.dark
    }
  }
}
