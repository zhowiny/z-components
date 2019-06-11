import Dialog from './c-dialog.vue'

Dialog.install = function (Vue) {
  Vue.component(Dialog.name, Dialog)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Dialog)
}

export default Dialog
