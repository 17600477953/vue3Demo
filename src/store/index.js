import { createStore } from 'vuex'
import { setSession, getSession } from '@/common/utils.js'
const state = {
  userData: {
    token: getSession('token') || '',
    phone: getSession('phone') || '',
    userId: getSession('userId') || ''
  }
}
export default createStore({
  state,
  mutations: {
    setUserData(state, paylod) {
      state.userData = paylod
      const obj = state.userData ? state.userData : {}
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const element = obj[key]
          setSession(key, element)
        }
      }
    },
    clearUserData(state) {
      state.userData = {
        token: '',
        phone: '',
        userId: ''
      }
      sessionStorage.clear()
    }
  },
  actions: {
    setUserData(ctx, payload) {
      ctx.commit('setUserData', payload)
    },
    clearUserData(ctx) {
      ctx.commit('clearUserData')
    }
  },
  modules: {}
})
