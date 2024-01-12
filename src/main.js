import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import moment from 'moment'

import 'element-plus/dist/index.css'
import './assets/css/common.css'
import './assets/scss/index.scss'
import httpRequest from '@/utils/httpRequest' // api: https://github.com/axios/axios
import { isAuth } from '@/utils'
import VueClipboard from 'vue-clipboard2'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// configureCompat({
//   MODE: 3
//   // COMPONENT_V_MODEL: false
// })
const app = createApp(App)

app.use(ElementPlus)
app.use(VueClipboard)
app.use(router)
app.use(store)

// 关闭生产提示
// app.config.productionTip = false
// 挂载全局
app.config.globalProperties.$http = httpRequest // ajax请求方法
app.config.globalProperties.isAuth = isAuth // 权限方法

moment.locale('zh-cn')
app.config.globalProperties.$moment = moment //时间处理

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const debounce = (fn, delay) => {
  let timer = null

  return function () {
    let context = this

    let args = arguments

    clearTimeout(timer)

    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

// const _ResizeObserver = window.ResizeObserver

// window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
//   constructor(callback) {
//     callback = debounce(callback, 16)
//     super(callback)
//   }
// }

app.mount('#app')
