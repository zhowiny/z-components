import zButton from './components/z-button.vue'
import zDialog from './components/z-dialog.vue'
import zIcon from './components/z-icon.vue'
import zMask from './components/z-mask.vue'

const components = {
  zButton,
  zDialog,
  zIcon,
  zMask,
}
const install = function(Vue, opts = {}) {
  Object.values(components).forEach(c => {
    Vue.component(c.name, c)
  })
  window.zComponents = zComponents
}

const zComponents = {
  install,
  ...components,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(zComponents)
}

export default zComponents
