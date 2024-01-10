import { createApp, configureCompat } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookie from './utils/vue-cookie'
import ElementPlus from 'element-plus'
import moment from 'moment'

import 'element-plus/dist/index.css'
import './assets/css/common.css'
import './assets/scss/index.scss'
import httpRequest from '@/utils/httpRequest' // api: https://github.com/axios/axios
import { isAuth } from '@/utils'
import VueClipboard from 'vue-clipboard2'

configureCompat({
  COMPONENT_V_MODEL: false
})
const app = createApp(App)

app.use(ElementPlus)
app.use(VueClipboard)
app.use(VueCookie)
app.use(router)
app.use(store)

// 关闭生产提示
// app.config.productionTip = false
// 挂载全局
app.config.globalProperties.$http = httpRequest // ajax请求方法
app.config.globalProperties.isAuth = isAuth // 权限方法

moment.locale('zh-cn')
app.config.globalProperties.$moment = moment //时间处理

app.mount('#app')
