import { getCurrentInstance } from 'vue'
import cookie from '@/utils/vue-cookie'

export default {
  namespaced: true,
  state: {
    ACCOUNT_TYPES: {
      1: '订阅号',
      2: '服务号'
    },
    accountList: [],
    selectedAppid: ''
  },
  mutations: {
    updateAccountList(state, list) {
      state.accountList = list
      if (!list.length) return
      if (!state.selectedAppid) {
        // const ctx = getCurrentInstance()
        // let appidCookie = ctx.appContext.config.globalProperties.$cookie.get('appid')
        let appidCookie = cookie.get('appid')
        let selectedAppid = appidCookie ? appidCookie : list[0].appid
        this.commit('wxAccount/selectAccount', selectedAppid)
      }
    },
    selectAccount(state, appid) {
      // const ctx = getCurrentInstance()
      // ctx.appContext.config.globalProperties.$cookie.set('appid', appid)
      cookie.set('appid', appid)
      let oldAppid = state.selectedAppid
      state.selectedAppid = appid
      if (oldAppid) {
        //切换账号时刷新网页
        location.reload()
      }
    }
  }
}
