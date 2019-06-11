<template>
  <div class="c-mask" :class="{ show }" :style="{position: fixed ? 'fixed' : 'absolute'}" @click.self="maskClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-mask',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
    maskClose: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      show: false,
    }
  },
  watch: {
    value: function (val) {
      this.show = val
    },
    show: function (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    maskClick () {
      this.maskClose && this.$emit('maskClose')
    },
  },
  components: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../style/config";
  .c-mask {
    @include size(100%);
    @include center();
    min-width: $min-width;
    background: rgba(#000, .4);
    transition: opacity .3s;
    opacity: 0;
    pointer-events: none;
    &.show {
      opacity: 1;
      pointer-events: initial;
    }
  }
</style>
