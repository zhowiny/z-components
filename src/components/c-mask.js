import Mask from './c-mask.vue'

Mask.install = function (Vue) {
  Vue.component(Mask.name, Mask)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Mask)
}

export default Mask
