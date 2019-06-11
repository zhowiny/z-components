import button from './components/c-button'
import dialog from './components/c-dialog'
import icon from './components/c-icon'
import mask from './components/c-mask'

const install = function(Vue, opts = {}) {
}

const components = {
  version: process.env.VERSION,
  button,
  dialog,
  icon,
  mask,
  install,
}

module.exports.default = module.exports = components
