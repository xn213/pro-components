import Vue from 'vue'
import App from './App.vue'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import './assets/iconfont.css'
import './assets/iconfont.js'

import xnui from './packages'
// import xnui from '../dist/xn-ui.umd.min.js'
// import '../dist/xn-ui.css'

import { XRate, XDrawer } from './components'

// import waterMarker  from "./directives/waterMarker"
// Vue.directive('waterMarker', waterMarker)
import install from './directives'
Vue.use(install)

Vue.use(xnui)
Vue.use(iView)

// 如果想要二次封装组件与UI框架原组件同名,
// 原组件引入 use 须在上方 二次封装的在下面覆盖
const components = {
  Rate: XRate,
  Drawer: XDrawer,
}

// 统一注册组件
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
