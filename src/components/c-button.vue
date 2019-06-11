<template>
  <button
    class="c-button"
    :disabled="disabled"
    :class="[
      `button--${type}`,
      size && `button--${size}`,
      {
        'is-disabled': disabled,
        'is-plain': plain,
        'is-round': round,
      }
    ]"
    @click="handleClick"
  >
    <slot>button</slot>
  </button>
</template>
<script>
export default {
  name: 'c-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang='scss'>
  @import "../style/config";
  @mixin common($color: $mainColor) {
    color: #fff;
    background: $color;
    border-color: $color;
    &.hover {
      background: transparentize($color, 0.1);
    }
  }
  @mixin is-plain($color: $mainColor) {
    color: $color;
    background: transparentize($color, 0.9);
    border-color: $color;
    &.hover {
      background: $color;
      color: #fff;
    }
  }
  @mixin is-disabled($color: $mainColor) {
    color: #fff;
    background: transparentize($color, 0.5);
    border-color: transparentize($color, 0.5);
    cursor: not-allowed;
    &.is-plain {
      color: transparentize($color, 0.5);
      background: transparentize($color, 0.8);
      border-color: transparentize($color, 0.5);
    }
  }
  @mixin button-style($color: $mainColor) {
    @include common($color);
    &.is-plain {
      @include is-plain($color);
    }
    &.is-disabled {
      @include is-disabled($color);
    }
  }
  .c-button {
    border: 1px solid #dcdfe6;
    width: 100%;
    max-height: 100px;
    margin: 0;
    line-height: 1.5;
    padding: $small-space $middle-space;
    font-size: 24px;
    outline: none;
    cursor: pointer;
    &::after {
      content: '';
      border: none;
    }
    &.button--default {
      color: #606266;
      background: transparent;
      &.hover {
        border-color: $mainColor;
        color: $mainColor;
        background: transparentize($mainColor, 0.9);
      }
      &.is-plain {
        &.hover {
          background: #fff;
        }
      }
      &.is-disabled {
        color: #c0c4cc;
        background: #fff;
        border-color: #ebeef5;
      }
    }
    &.button--primary {
      @include button-style();
    }
    &.button--success {
      @include button-style(#67c23a);
    }
    &.button--info {
      @include button-style(#909399);
    }
    &.button--warning {
      @include button-style(#e6a23c);
    }
    &.button--danger {
      @include button-style(#f56c6c);
    }
    &.is-round {
      border-radius: 50px;
    }
    &.button--medium {
      display:inline-flex;
      font-size: 20px;
      padding: $small-space $middle-space;
      width:auto;
    }
    &.button--small {
      display:inline-flex;
      font-size: 16px;
      padding: 8px $middle-space;
      width:auto;
    }
    &.button--mini {
      display:inline-flex;
      font-size: 12px;
      padding: 8px $middle-space;
      width:auto;
    }
  }

</style>
