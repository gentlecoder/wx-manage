import { createStore } from 'vuex'
import common from './modules/common'
import user from './modules/user'
import article from './modules/article'
import message from './modules/message'
import wxUserTags from './modules/wxUserTags'
import wxAccount from './modules/wxAccount'

export default createStore({
  modules: {
    common,
    user,
    article,
    message,
    wxUserTags,
    wxAccount
  },
  mutations: {},
  strict: true
})
