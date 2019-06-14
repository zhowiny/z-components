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
  Object.keys(components).forEach(c => {
    Vue.component(c.name, components[c])
  })
}

const zComponents = {
  version: process.env.VERSION,
  install,
  ...components,
}

module.exports.default = module.exports = zComponents
