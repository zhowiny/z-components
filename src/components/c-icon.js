import Icon from './c-icon.vue'

Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Icon)
}

export default Icon
