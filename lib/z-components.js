/*!
 * z-components v1.0.1
 * https://github.com/zhowiny/z-components#readme
 *
 * Copyright 2019-present zhowiny
 * Released under the MIT license
 *
 * Date: 2019-06-24T03:15:28.830Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['z-components'] = factory());
}(this, function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    name: 'z-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      disabled: Boolean,
      plain: Boolean,
      round: Boolean
    },
    methods: {
      handleClick: function handleClick(e) {
        this.$emit('click', e);
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }

  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('button', {
      staticClass: "z-button",
      class: ["button--" + _vm.type, _vm.size && "button--" + _vm.size, {
        'is-disabled': _vm.disabled,
        'is-plain': _vm.plain,
        'is-round': _vm.round
      }],
      attrs: {
        "disabled": _vm.disabled
      },
      on: {
        "click": _vm.handleClick
      }
    }, [_vm._t("default", [_vm._v("button")])], 2);
  };

  var __vue_staticRenderFns__ = [];
  /* style */

  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-b52afd7e_0", {
      source: "body[data-v-b52afd7e],html[data-v-b52afd7e]{width:100%;min-height:100vh}blockquote[data-v-b52afd7e],body[data-v-b52afd7e],dd[data-v-b52afd7e],dir[data-v-b52afd7e],div[data-v-b52afd7e],dl[data-v-b52afd7e],fieldset[data-v-b52afd7e],figure[data-v-b52afd7e],form[data-v-b52afd7e],h1[data-v-b52afd7e],h2[data-v-b52afd7e],h3[data-v-b52afd7e],h4[data-v-b52afd7e],h5[data-v-b52afd7e],h6[data-v-b52afd7e],hr[data-v-b52afd7e],html[data-v-b52afd7e],input[data-v-b52afd7e],legend[data-v-b52afd7e],menu[data-v-b52afd7e],ol[data-v-b52afd7e],optgroup[data-v-b52afd7e],p[data-v-b52afd7e],pre[data-v-b52afd7e],tbody[data-v-b52afd7e],td[data-v-b52afd7e],textarea[data-v-b52afd7e],tfoot[data-v-b52afd7e],th[data-v-b52afd7e],thead[data-v-b52afd7e],ul[data-v-b52afd7e]{margin:0;padding:0;box-sizing:border-box}ul[data-v-b52afd7e]{list-style:none}a[data-v-b52afd7e]{color:inherit;text-decoration:none}[data-v-b52afd7e]::-moz-selection{color:#fff;text-shadow:none}[data-v-b52afd7e]::selection{text-shadow:none}[data-v-b52afd7e]::-webkit-scrollbar{width:5px;height:9px;background-color:#eee}[data-v-b52afd7e]::-webkit-scrollbar-thumb{background:rgba(187,187,187,.9);border-radius:5px}.z-button[data-v-b52afd7e]{border:1px solid #dcdfe6;width:100%;max-height:100px;margin:0;line-height:1.5;padding:10px 20px;font-size:24px;outline:0;cursor:pointer}.z-button[data-v-b52afd7e]::after{content:\"\";border:none}.z-button.button--default[data-v-b52afd7e]{color:#606266;background:0 0}.z-button.button--default.hover[data-v-b52afd7e]{border-color:#306ff4;color:#306ff4;background:rgba(48,111,244,.1)}.z-button.button--default.is-plain.hover[data-v-b52afd7e]{background:#fff}.z-button.button--default.is-disabled[data-v-b52afd7e]{color:#c0c4cc;background:#fff;border-color:#ebeef5}.z-button.button--primary[data-v-b52afd7e]{color:#fff;background:#306ff4;border-color:#306ff4}.z-button.button--primary.hover[data-v-b52afd7e]{background:rgba(48,111,244,.9)}.z-button.button--primary.is-plain[data-v-b52afd7e]{color:#306ff4;background:rgba(48,111,244,.1);border-color:#306ff4}.z-button.button--primary.is-plain.hover[data-v-b52afd7e]{background:#306ff4;color:#fff}.z-button.button--primary.is-disabled[data-v-b52afd7e]{color:#fff;background:rgba(48,111,244,.5);border-color:rgba(48,111,244,.5);cursor:not-allowed}.z-button.button--primary.is-disabled.is-plain[data-v-b52afd7e]{color:rgba(48,111,244,.5);background:rgba(48,111,244,.2);border-color:rgba(48,111,244,.5)}.z-button.button--success[data-v-b52afd7e]{color:#fff;background:#67c23a;border-color:#67c23a}.z-button.button--success.hover[data-v-b52afd7e]{background:rgba(103,194,58,.9)}.z-button.button--success.is-plain[data-v-b52afd7e]{color:#67c23a;background:rgba(103,194,58,.1);border-color:#67c23a}.z-button.button--success.is-plain.hover[data-v-b52afd7e]{background:#67c23a;color:#fff}.z-button.button--success.is-disabled[data-v-b52afd7e]{color:#fff;background:rgba(103,194,58,.5);border-color:rgba(103,194,58,.5);cursor:not-allowed}.z-button.button--success.is-disabled.is-plain[data-v-b52afd7e]{color:rgba(103,194,58,.5);background:rgba(103,194,58,.2);border-color:rgba(103,194,58,.5)}.z-button.button--info[data-v-b52afd7e]{color:#fff;background:#909399;border-color:#909399}.z-button.button--info.hover[data-v-b52afd7e]{background:rgba(144,147,153,.9)}.z-button.button--info.is-plain[data-v-b52afd7e]{color:#909399;background:rgba(144,147,153,.1);border-color:#909399}.z-button.button--info.is-plain.hover[data-v-b52afd7e]{background:#909399;color:#fff}.z-button.button--info.is-disabled[data-v-b52afd7e]{color:#fff;background:rgba(144,147,153,.5);border-color:rgba(144,147,153,.5);cursor:not-allowed}.z-button.button--info.is-disabled.is-plain[data-v-b52afd7e]{color:rgba(144,147,153,.5);background:rgba(144,147,153,.2);border-color:rgba(144,147,153,.5)}.z-button.button--warning[data-v-b52afd7e]{color:#fff;background:#e6a23c;border-color:#e6a23c}.z-button.button--warning.hover[data-v-b52afd7e]{background:rgba(230,162,60,.9)}.z-button.button--warning.is-plain[data-v-b52afd7e]{color:#e6a23c;background:rgba(230,162,60,.1);border-color:#e6a23c}.z-button.button--warning.is-plain.hover[data-v-b52afd7e]{background:#e6a23c;color:#fff}.z-button.button--warning.is-disabled[data-v-b52afd7e]{color:#fff;background:rgba(230,162,60,.5);border-color:rgba(230,162,60,.5);cursor:not-allowed}.z-button.button--warning.is-disabled.is-plain[data-v-b52afd7e]{color:rgba(230,162,60,.5);background:rgba(230,162,60,.2);border-color:rgba(230,162,60,.5)}.z-button.button--danger[data-v-b52afd7e]{color:#fff;background:#f56c6c;border-color:#f56c6c}.z-button.button--danger.hover[data-v-b52afd7e]{background:rgba(245,108,108,.9)}.z-button.button--danger.is-plain[data-v-b52afd7e]{color:#f56c6c;background:rgba(245,108,108,.1);border-color:#f56c6c}.z-button.button--danger.is-plain.hover[data-v-b52afd7e]{background:#f56c6c;color:#fff}.z-button.button--danger.is-disabled[data-v-b52afd7e]{color:#fff;background:rgba(245,108,108,.5);border-color:rgba(245,108,108,.5);cursor:not-allowed}.z-button.button--danger.is-disabled.is-plain[data-v-b52afd7e]{color:rgba(245,108,108,.5);background:rgba(245,108,108,.2);border-color:rgba(245,108,108,.5)}.z-button.is-round[data-v-b52afd7e]{border-radius:50px}.z-button.button--medium[data-v-b52afd7e]{display:inline-flex;font-size:20px;padding:10px 20px;width:auto}.z-button.button--small[data-v-b52afd7e]{display:inline-flex;font-size:16px;padding:8px 20px;width:auto}.z-button.button--mini[data-v-b52afd7e]{display:inline-flex;font-size:12px;padding:8px 20px;width:auto}",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__ = "data-v-b52afd7e";
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject SSR */

  var zButton = normalizeComponent_1({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

  //
  //
  //
  //
  var script$1 = {
    name: 'z-icon',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {}
  };

  /* script */
  var __vue_script__$1 = script$1;
  /* template */

  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('i', {
      class: ['iconfont', _vm.name],
      on: {
        "click": function click(e) {
          return _vm.$emit('click', e);
        }
      }
    });
  };

  var __vue_staticRenderFns__$1 = [];
  /* style */

  var __vue_inject_styles__$1 = undefined;
  /* scoped */

  var __vue_scope_id__$1 = "data-v-1ac78f7f";
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  var zIcon = normalizeComponent_1({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  var script$2 = {
    name: 'z-mask',
    props: {
      fixed: {
        type: Boolean,
        default: false
      },
      value: {
        type: Boolean,
        default: false
      },
      maskClose: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        show: false
      };
    },
    watch: {
      value: function value(val) {
        this.show = val;
      },
      show: function show(val) {
        this.$emit('input', val);
      }
    },
    methods: {
      maskClick: function maskClick() {
        this.maskClose && this.$emit('maskClose');
      }
    },
    components: {}
  };

  /* script */
  var __vue_script__$2 = script$2;
  /* template */

  var __vue_render__$2 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "z-mask",
      class: {
        show: _vm.show
      },
      style: {
        position: _vm.fixed ? 'fixed' : 'absolute'
      }
    }, [_c('div', {
      staticClass: "z-mask--container",
      style: {
        position: _vm.fixed ? 'fixed' : 'absolute'
      },
      on: {
        "click": function click($event) {
          if ($event.target !== $event.currentTarget) {
            return null;
          }

          return _vm.maskClick($event);
        }
      }
    }), _vm._v(" "), _vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$2 = [];
  /* style */

  var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-e0f10c8a_0", {
      source: "body[data-v-e0f10c8a],html[data-v-e0f10c8a]{width:100%;min-height:100vh}blockquote[data-v-e0f10c8a],body[data-v-e0f10c8a],dd[data-v-e0f10c8a],dir[data-v-e0f10c8a],div[data-v-e0f10c8a],dl[data-v-e0f10c8a],fieldset[data-v-e0f10c8a],figure[data-v-e0f10c8a],form[data-v-e0f10c8a],h1[data-v-e0f10c8a],h2[data-v-e0f10c8a],h3[data-v-e0f10c8a],h4[data-v-e0f10c8a],h5[data-v-e0f10c8a],h6[data-v-e0f10c8a],hr[data-v-e0f10c8a],html[data-v-e0f10c8a],input[data-v-e0f10c8a],legend[data-v-e0f10c8a],menu[data-v-e0f10c8a],ol[data-v-e0f10c8a],optgroup[data-v-e0f10c8a],p[data-v-e0f10c8a],pre[data-v-e0f10c8a],tbody[data-v-e0f10c8a],td[data-v-e0f10c8a],textarea[data-v-e0f10c8a],tfoot[data-v-e0f10c8a],th[data-v-e0f10c8a],thead[data-v-e0f10c8a],ul[data-v-e0f10c8a]{margin:0;padding:0;box-sizing:border-box}ul[data-v-e0f10c8a]{list-style:none}a[data-v-e0f10c8a]{color:inherit;text-decoration:none}[data-v-e0f10c8a]::-moz-selection{color:#fff;text-shadow:none}[data-v-e0f10c8a]::selection{text-shadow:none}[data-v-e0f10c8a]::-webkit-scrollbar{width:5px;height:9px;background-color:#eee}[data-v-e0f10c8a]::-webkit-scrollbar-thumb{background:rgba(187,187,187,.9);border-radius:5px}.z-mask[data-v-e0f10c8a]{width:100%;height:100%;top:0;left:0;transition:all .3s;visibility:hidden;opacity:0}.z-mask.show[data-v-e0f10c8a]{visibility:visible;opacity:1}.z-mask--container[data-v-e0f10c8a]{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);background:rgba(0,0,0,.4)}",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__$2 = "data-v-e0f10c8a";
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = false;
  /* style inject SSR */

  var zMask = normalizeComponent_1({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
  }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, browser, undefined);

  //
  var script$3 = {
    name: 'z-dialog',
    props: {
      title: String,
      fixed: {
        type: Boolean,
        default: false
      },
      value: {
        type: Boolean,
        default: false
      },
      maskClose: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        showDialog: false
      };
    },
    watch: {
      value: function value(val) {
        this.showDialog = val;
      },
      showDialog: function showDialog(val) {
        this.$emit('input', val);
      }
    },
    methods: {
      maskClick: function maskClick() {
        this.maskClose && (this.showDialog = !this.showDialog);
      },
      close: function close() {
        this.showDialog = false;
      },
      cancel: function cancel(e) {
        this.close();
        this.$emit('cancel', e);
      },
      confirm: function confirm(e) {
        this.close();
        this.$emit('confirm', e);
      }
    },
    components: {
      zIcon: zIcon,
      zMask: zMask,
      zButton: zButton
    }
  };

  /* script */
  var __vue_script__$3 = script$3;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('z-mask', {
      attrs: {
        "value": _vm.value,
        "fixed": _vm.fixed,
        "maskClose": _vm.maskClose
      },
      on: {
        "maskClose": _vm.close
      }
    }, [_c('div', {
      staticClass: "z-dialog"
    }, [_c('z-icon', {
      staticClass: "icon",
      attrs: {
        "name": "icon-close"
      },
      on: {
        "click": function click($event) {
          _vm.showDialog = false;
        }
      }
    }), _vm._v(" "), _c('h2', {
      staticClass: "z-dialog_title"
    }, [_vm._t("title", [_vm._v(_vm._s(_vm.title || 'title'))])], 2), _vm._v(" "), _c('div', {
      staticClass: "z-dialog_content"
    }, [_vm._t("default", [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facere, itaque? Alias beatae cumque dignissimos fuga ipsa natus placeat, quidem tenetur unde velit. Dolore doloribus esse, laboriosam maiores quam sit.")])], 2), _vm._v(" "), _c('div', {
      staticClass: "z-dialog_footer"
    }, [_vm._t("footer", [_c('z-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("确定")]), _vm._v(" "), _c('z-button', {
      on: {
        "cick": _vm.cancel
      }
    }, [_vm._v("取消")])])], 2)], 1)]);
  };

  var __vue_staticRenderFns__$3 = [];
  /* style */

  var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-3d254523_0", {
      source: "body[data-v-3d254523],html[data-v-3d254523]{width:100%;min-height:100vh}blockquote[data-v-3d254523],body[data-v-3d254523],dd[data-v-3d254523],dir[data-v-3d254523],div[data-v-3d254523],dl[data-v-3d254523],fieldset[data-v-3d254523],figure[data-v-3d254523],form[data-v-3d254523],h1[data-v-3d254523],h2[data-v-3d254523],h3[data-v-3d254523],h4[data-v-3d254523],h5[data-v-3d254523],h6[data-v-3d254523],hr[data-v-3d254523],html[data-v-3d254523],input[data-v-3d254523],legend[data-v-3d254523],menu[data-v-3d254523],ol[data-v-3d254523],optgroup[data-v-3d254523],p[data-v-3d254523],pre[data-v-3d254523],tbody[data-v-3d254523],td[data-v-3d254523],textarea[data-v-3d254523],tfoot[data-v-3d254523],th[data-v-3d254523],thead[data-v-3d254523],ul[data-v-3d254523]{margin:0;padding:0;box-sizing:border-box}ul[data-v-3d254523]{list-style:none}a[data-v-3d254523]{color:inherit;text-decoration:none}[data-v-3d254523]::-moz-selection{color:#fff;text-shadow:none}[data-v-3d254523]::selection{text-shadow:none}[data-v-3d254523]::-webkit-scrollbar{width:5px;height:9px;background-color:#eee}[data-v-3d254523]::-webkit-scrollbar-thumb{background:rgba(187,187,187,.9);border-radius:5px}.z-dialog[data-v-3d254523]{position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);top:45%;min-width:30%;min-height:100px;max-width:80%;max-height:80%;background:#fff;border-radius:5px;box-shadow:0 0 20px #666;overflow:auto}.z-dialog_title[data-v-3d254523]{width:80%;text-align:center;margin:0 auto;padding:10px;font-weight:400;color:#333}.z-dialog_content[data-v-3d254523]{padding:0 20px}.z-dialog_footer[data-v-3d254523]{margin-top:20px;display:flex}.icon[data-v-3d254523]{position:absolute;right:10px;top:10px;font-size:24px;line-height:24px;cursor:pointer;color:#333}",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__$3 = "data-v-3d254523";
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = false;
  /* style inject SSR */

  var zDialog = normalizeComponent_1({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, browser, undefined);

  var components = {
    zButton: zButton,
    zDialog: zDialog,
    zIcon: zIcon,
    zMask: zMask
  };

  var install = function install(Vue) {
    Object.values(components).forEach(function (c) {
      Vue.component(c.name, c);
    });
    window.zComponents = zComponents;
  };

  var zComponents = _objectSpread({
    install: install
  }, components);

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(zComponents);
  }

  return zComponents;

}));
