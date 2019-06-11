import Button from './c-button.vue'

Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Button)
}

export default Button
