/*!
 * some-components v1.0.0
 * https://github.com/zhowiny/some-components#readme
 *
 * Copyright 2019-present zhowiny
 * Released under the MIT license
 *
 * Date: 2019-06-11T02:19:53.481Z
 */

(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

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
    name: 'c-button',
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
      staticClass: "c-button",
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
    inject("data-v-011cb7c1_0", {
      source: "body[data-v-011cb7c1],html[data-v-011cb7c1]{width:100%;min-height:100vh}blockquote[data-v-011cb7c1],body[data-v-011cb7c1],dd[data-v-011cb7c1],dir[data-v-011cb7c1],div[data-v-011cb7c1],dl[data-v-011cb7c1],fieldset[data-v-011cb7c1],figure[data-v-011cb7c1],form[data-v-011cb7c1],h1[data-v-011cb7c1],h2[data-v-011cb7c1],h3[data-v-011cb7c1],h4[data-v-011cb7c1],h5[data-v-011cb7c1],h6[data-v-011cb7c1],hr[data-v-011cb7c1],html[data-v-011cb7c1],input[data-v-011cb7c1],legend[data-v-011cb7c1],menu[data-v-011cb7c1],ol[data-v-011cb7c1],optgroup[data-v-011cb7c1],p[data-v-011cb7c1],pre[data-v-011cb7c1],tbody[data-v-011cb7c1],td[data-v-011cb7c1],textarea[data-v-011cb7c1],tfoot[data-v-011cb7c1],th[data-v-011cb7c1],thead[data-v-011cb7c1],ul[data-v-011cb7c1]{margin:0;padding:0;box-sizing:border-box}ul[data-v-011cb7c1]{list-style:none}a[data-v-011cb7c1]{color:inherit;text-decoration:none}[data-v-011cb7c1]::-moz-selection{color:#fff;text-shadow:none}[data-v-011cb7c1]::selection{text-shadow:none}[data-v-011cb7c1]::-webkit-scrollbar{width:5px;height:9px;background-color:#eee}[data-v-011cb7c1]::-webkit-scrollbar-thumb{background:rgba(187,187,187,.9);border-radius:5px}.c-button[data-v-011cb7c1]{border:1px solid #dcdfe6;width:100%;max-height:100px;margin:0;line-height:1.5;padding:10px 20px;font-size:24px;outline:0;cursor:pointer}.c-button[data-v-011cb7c1]::after{content:\"\";border:none}.c-button.button--default[data-v-011cb7c1]{color:#606266;background:0 0}.c-button.button--default.hover[data-v-011cb7c1]{border-color:#306ff4;color:#306ff4;background:rgba(48,111,244,.1)}.c-button.button--default.is-plain.hover[data-v-011cb7c1]{background:#fff}.c-button.button--default.is-disabled[data-v-011cb7c1]{color:#c0c4cc;background:#fff;border-color:#ebeef5}.c-button.button--primary[data-v-011cb7c1]{color:#fff;background:#306ff4;border-color:#306ff4}.c-button.button--primary.hover[data-v-011cb7c1]{background:rgba(48,111,244,.9)}.c-button.button--primary.is-plain[data-v-011cb7c1]{color:#306ff4;background:rgba(48,111,244,.1);border-color:#306ff4}.c-button.button--primary.is-plain.hover[data-v-011cb7c1]{background:#306ff4;color:#fff}.c-button.button--primary.is-disabled[data-v-011cb7c1]{color:#fff;background:rgba(48,111,244,.5);border-color:rgba(48,111,244,.5);cursor:not-allowed}.c-button.button--primary.is-disabled.is-plain[data-v-011cb7c1]{color:rgba(48,111,244,.5);background:rgba(48,111,244,.2);border-color:rgba(48,111,244,.5)}.c-button.button--success[data-v-011cb7c1]{color:#fff;background:#67c23a;border-color:#67c23a}.c-button.button--success.hover[data-v-011cb7c1]{background:rgba(103,194,58,.9)}.c-button.button--success.is-plain[data-v-011cb7c1]{color:#67c23a;background:rgba(103,194,58,.1);border-color:#67c23a}.c-button.button--success.is-plain.hover[data-v-011cb7c1]{background:#67c23a;color:#fff}.c-button.button--success.is-disabled[data-v-011cb7c1]{color:#fff;background:rgba(103,194,58,.5);border-color:rgba(103,194,58,.5);cursor:not-allowed}.c-button.button--success.is-disabled.is-plain[data-v-011cb7c1]{color:rgba(103,194,58,.5);background:rgba(103,194,58,.2);border-color:rgba(103,194,58,.5)}.c-button.button--info[data-v-011cb7c1]{color:#fff;background:#909399;border-color:#909399}.c-button.button--info.hover[data-v-011cb7c1]{background:rgba(144,147,153,.9)}.c-button.button--info.is-plain[data-v-011cb7c1]{color:#909399;background:rgba(144,147,153,.1);border-color:#909399}.c-button.button--info.is-plain.hover[data-v-011cb7c1]{background:#909399;color:#fff}.c-button.button--info.is-disabled[data-v-011cb7c1]{color:#fff;background:rgba(144,147,153,.5);border-color:rgba(144,147,153,.5);cursor:not-allowed}.c-button.button--info.is-disabled.is-plain[data-v-011cb7c1]{color:rgba(144,147,153,.5);background:rgba(144,147,153,.2);border-color:rgba(144,147,153,.5)}.c-button.button--warning[data-v-011cb7c1]{color:#fff;background:#e6a23c;border-color:#e6a23c}.c-button.button--warning.hover[data-v-011cb7c1]{background:rgba(230,162,60,.9)}.c-button.button--warning.is-plain[data-v-011cb7c1]{color:#e6a23c;background:rgba(230,162,60,.1);border-color:#e6a23c}.c-button.button--warning.is-plain.hover[data-v-011cb7c1]{background:#e6a23c;color:#fff}.c-button.button--warning.is-disabled[data-v-011cb7c1]{color:#fff;background:rgba(230,162,60,.5);border-color:rgba(230,162,60,.5);cursor:not-allowed}.c-button.button--warning.is-disabled.is-plain[data-v-011cb7c1]{color:rgba(230,162,60,.5);background:rgba(230,162,60,.2);border-color:rgba(230,162,60,.5)}.c-button.button--danger[data-v-011cb7c1]{color:#fff;background:#f56c6c;border-color:#f56c6c}.c-button.button--danger.hover[data-v-011cb7c1]{background:rgba(245,108,108,.9)}.c-button.button--danger.is-plain[data-v-011cb7c1]{color:#f56c6c;background:rgba(245,108,108,.1);border-color:#f56c6c}.c-button.button--danger.is-plain.hover[data-v-011cb7c1]{background:#f56c6c;color:#fff}.c-button.button--danger.is-disabled[data-v-011cb7c1]{color:#fff;background:rgba(245,108,108,.5);border-color:rgba(245,108,108,.5);cursor:not-allowed}.c-button.button--danger.is-disabled.is-plain[data-v-011cb7c1]{color:rgba(245,108,108,.5);background:rgba(245,108,108,.2);border-color:rgba(245,108,108,.5)}.c-button.is-round[data-v-011cb7c1]{border-radius:50px}.c-button.button--medium[data-v-011cb7c1]{display:inline-flex;font-size:20px;padding:10px 20px;width:auto}.c-button.button--small[data-v-011cb7c1]{display:inline-flex;font-size:16px;padding:8px 20px;width:auto}.c-button.button--mini[data-v-011cb7c1]{display:inline-flex;font-size:12px;padding:8px 20px;width:auto}",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__ = "data-v-011cb7c1";
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject SSR */

  var Button = normalizeComponent_1({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

  Button.install = function (Vue) {
    Vue.component(Button.name, Button);
  };

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Button);
  }

  //
  //
  //
  //
  var script$1 = {
    name: 'c-icon',
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

  var __vue_scope_id__$1 = "data-v-5773871f";
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  var Icon = normalizeComponent_1({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

  Icon.install = function (Vue) {
    Vue.component(Icon.name, Icon);
  };

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Icon);
  }

  //
  //
  //
  //
  //
  //
  var script$2 = {
    name: 'c-mask',
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
      staticClass: "c-mask",
      class: {
        show: _vm.show
      },
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
    }, [_vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$2 = [];
  /* style */

  var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-7be15589_0", {
      source: "body[data-v-7be15589],html[data-v-7be15589]{width:100%;min-height:100vh}blockquote[data-v-7be15589],body[data-v-7be15589],dd[data-v-7be15589],dir[data-v-7be15589],div[data-v-7be15589],dl[data-v-7be15589],fieldset[data-v-7be15589],figure[data-v-7be15589],form[data-v-7be15589],h1[data-v-7be15589],h2[data-v-7be15589],h3[data-v-7be15589],h4[data-v-7be15589],h5[data-v-7be15589],h6[data-v-7be15589],hr[data-v-7be15589],html[data-v-7be15589],input[data-v-7be15589],legend[data-v-7be15589],menu[data-v-7be15589],ol[data-v-7be15589],optgroup[data-v-7be15589],p[data-v-7be15589],pre[data-v-7be15589],tbody[data-v-7be15589],td[data-v-7be15589],textarea[data-v-7be15589],tfoot[data-v-7be15589],th[data-v-7be15589],thead[data-v-7be15589],ul[data-v-7be15589]{margin:0;padding:0;box-sizing:border-box}ul[data-v-7be15589]{list-style:none}a[data-v-7be15589]{color:inherit;text-decoration:none}[data-v-7be15589]::-moz-selection{color:#fff;text-shadow:none}[data-v-7be15589]::selection{text-shadow:none}[data-v-7be15589]::-webkit-scrollbar{width:5px;height:9px;background-color:#eee}[data-v-7be15589]::-webkit-scrollbar-thumb{background:rgba(187,187,187,.9);border-radius:5px}.c-mask[data-v-7be15589]{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);min-width:960px;background:rgba(0,0,0,.4);transition:opacity .3s;opacity:0;pointer-events:none}.c-mask.show[data-v-7be15589]{opacity:1;pointer-events:initial}",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__$2 = "data-v-7be15589";
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = false;
  /* style inject SSR */

  var Mask = normalizeComponent_1({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
  }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, browser, undefined);

  Mask.install = function (Vue) {
    Vue.component(Mask.name, Mask);
  };

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Mask);
  }

  //
  var script$3 = {
    name: 'c-dialog',
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
      }
    },
    components: {
      cIcon: Icon,
      cMask: Mask,
      cButton: Button
    }
  };

  /* script */
  var __vue_script__$3 = script$3;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('c-mask', {
      attrs: {
        "value": _vm.value,
        "fixed": _vm.fixed,
        "maskClose": _vm.maskClose
      },
      on: {
        "maskClose": _vm.close
      }
    }, [_c('div', {
      staticClass: "c-dialog"
    }, [_c('c-icon', {
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
      staticClass: "c-dialog_title"
    }, [_vm._t("title", [_vm._v(_vm._s(_vm.title || 'title'))])], 2), _vm._v(" "), _c('div', {
      staticClass: "c-dialog_content"
    }, [_vm._t("default", [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facere, itaque? Alias beatae cumque dignissimos fuga ipsa natus placeat, quidem tenetur unde velit. Dolore doloribus esse, laboriosam maiores quam sit.")])], 2), _vm._v(" "), _c('div', {
      staticClass: "c-dialog_footer"
    }, [_vm._t("footer", [_c('c-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("确定")]), _vm._v(" "), _c('c-button', [_vm._v("取消")])])], 2)], 1)]);
  };

  var __vue_staticRenderFns__$3 = [];
  /* style */

  var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-7e9c7932_0", {
      source: "body[data-v-7e9c7932],html[data-v-7e9c7932]{width:100%;min-height:100vh}blockquote[data-v-7e9c7932],body[data-v-7e9c7932],dd[data-v-7e9c7932],dir[data-v-7e9c7932],div[data-v-7e9c7932],dl[data-v-7e9c7932],fieldset[data-v-7e9c7932],figure[data-v-7e9c7932],form[data-v-7e9c7932],h1[data-v-7e9c7932],h2[data-v-7e9c7932],h3[data-v-7e9c7932],h4[data-v-7e9c7932],h5[data-v-7e9c7932],h6[data-v-7e9c7932],hr[data-v-7e9c7932],html[data-v-7e9c7932],input[data-v-7e9c7932],legend[data-v-7e9c7932],menu[data-v-7e9c7932],ol[data-v-7e9c7932],optgroup[data-v-7e9c7932],p[data-v-7e9c7932],pre[data-v-7e9c7932],tbody[data-v-7e9c7932],td[data-v-7e9c7932],textarea[data-v-7e9c7932],tfoot[data-v-7e9c7932],th[data-v-7e9c7932],thead[data-v-7e9c7932],ul[data-v-7e9c7932]{margin:0;padding:0;box-sizing:border-box}ul[data-v-7e9c7932]{list-style:none}a[data-v-7e9c7932]{color:inherit;text-decoration:none}[data-v-7e9c7932]::-moz-selection{color:#fff;text-shadow:none}[data-v-7e9c7932]::selection{text-shadow:none}[data-v-7e9c7932]::-webkit-scrollbar{width:5px;height:9px;background-color:#eee}[data-v-7e9c7932]::-webkit-scrollbar-thumb{background:rgba(187,187,187,.9);border-radius:5px}.c-dialog[data-v-7e9c7932]{position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);top:45%;min-width:40%;min-height:100px;max-width:80%;max-height:80%;background:#fff;border-radius:5px;box-shadow:0 0 20px #666;overflow:auto}.c-dialog_title[data-v-7e9c7932]{width:80%;text-align:center;margin:0 auto;padding:10px;font-weight:400;color:#333}.c-dialog_content[data-v-7e9c7932]{padding:0 20px}.c-dialog_footer[data-v-7e9c7932]{margin-top:20px;display:flex}.icon[data-v-7e9c7932]{position:absolute;right:10px;top:10px;font-size:24px;line-height:24px;cursor:pointer;color:#333}",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__$3 = "data-v-7e9c7932";
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = false;
  /* style inject SSR */

  var Dialog = normalizeComponent_1({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, browser, undefined);

  Dialog.install = function (Vue) {
    Vue.component(Dialog.name, Dialog);
  };

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Dialog);
  }

}));
