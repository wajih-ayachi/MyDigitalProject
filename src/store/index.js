import Vue from 'vue'
import Vuex from 'vuex'
import activity from './activity'
import global from './global'
import createPersistedState from "vuex-persistedstate"

const dataState = createPersistedState({
  paths: ['global']
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activity,
    global
  },

  state: {
    users: [/** data */]
  },

  getters: {
    getAllUsers: (state) => state.users,
    getUsersEmail: (state) => state.users.map(el => el.email),
    getRandomUsers: (state) => {
      const shuffled = state.users.sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 5)
    }
  },

  actions: {
    async getUsers (context) {
      console.log('DISPATCHED')
      const response = await fetch('https://randomuser.me/api/?results=50&inc=email,id,name,picture')
      const result = await response.json()
      context.commit('SET_USERS', result.results)
    }
  },

  mutations: {
    SET_USERS (state, users) {
      state.users = users
    }
  },

  plugins: [dataState]

})

