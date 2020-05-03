import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // isLogin: false
    isLogin: localStorage.isLogin === 'true' ? true : false
  },
  getters: {
    loginState(state) {
      return state.isLogin ? '欢迎回来' : '访客'
    }
  },
  mutations: {
    login(state) {
      state.isLogin = true
      localStorage.isLogin = true
    }
  },
  actions: {
    login(context, payload) {
      console.log(context, payload);
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('login')
          resolve(true);
        }, 1000);
      })
    }
  },
  modules: {
  }
})
