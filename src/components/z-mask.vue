<template>
  <div class="z-mask" :class="{ show }" :style="{position: fixed ? 'fixed' : 'absolute'}">
    <div class="z-mask--container" :style="{position: fixed ? 'fixed' : 'absolute'}" @click.self="maskClick">
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'z-mask',
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
  .z-mask {
    @include size(100%);
    top: 0;
    left: 0;
    transition: all .3s;
    visibility: hidden;
    opacity: 0;
    &.show {
      visibility: visible;
      opacity: 1;
    }
    &--container {
      @include size(100%);
      @include center();
      background: rgba(#000, .4);
    }
  }
</style>
