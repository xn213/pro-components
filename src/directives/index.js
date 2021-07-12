import copy from './copy'
import emoji from './emoji'
import longpress from './longpress'
import debounce from './debounce'
import waterMarker from './waterMarker'
import draggable from './draggable'
import color from './color'
import LazyLoad from './lazyLoad'
import permission from './permission'
import waves from './waves'

// 自定义指令
const directives = {
  copy,
  emoji,
  longpress,
  debounce,
  waterMarker,
  draggable,
  color,
  LazyLoad,
  permission,
  waves
}
// 批量注册指令
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}
