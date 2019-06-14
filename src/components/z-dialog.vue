<template>
  <z-mask :value="value" @maskClose="close" :fixed="fixed" :maskClose="maskClose">
    <div class="z-dialog">
      <z-icon name="icon-close" class="icon" @click="showDialog = false"/>
      <h2 class="z-dialog_title">
        <slot name="title">{{ title || 'title' }}</slot>
      </h2>
      <div class="z-dialog_content">
        <slot>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facere, itaque? Alias beatae cumque dignissimos fuga ipsa natus placeat, quidem tenetur unde velit. Dolore doloribus esse, laboriosam maiores quam sit.</slot>
      </div>
      <div class="z-dialog_footer">
        <slot name="footer">
          <z-button type="primary">确定</z-button>
          <z-button>取消</z-button>
        </slot>
      </div>
    </div>
  </z-mask>
</template>

<script>
import zIcon from './z-icon'
import zMask from './z-mask'
import zButton from './z-button'

export default {
  name: 'z-dialog',
  props: {
    title: String,
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
      showDialog: false,
    }
  },
  watch: {
    value: function (val) {
      this.showDialog = val
    },
    showDialog: function (val) {
      this.$emit('input', val)
    },
  },
  methods: {
    maskClick () {
      this.maskClose && (this.showDialog = !this.showDialog)
    },
    close () {
      this.showDialog = false
    },
  },
  components: {
    zIcon,
    zMask,
    zButton,
  },
}
</script>

<style scoped lang='scss'>
  @import "../style/config";
  .z-dialog {
    @include center();
    top: 45%;
    min-width: 40%;
    min-height: 100px;
    max-width: 80%;
    max-height: 80%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 20px #666;
    overflow: auto;
    &_title {
      width: 80%;
      text-align: center;
      margin: 0 auto;
      padding: $small-space;
      font-weight: normal;
      color: $deepColor;
    }
    &_content {
      padding: 0 20px;
    }
    &_footer {
      margin-top: $middle-space;
      display: flex;
    }
  }
  .icon {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 24px;
    line-height: 24px;
    cursor: pointer;
    color: $deepColor;
  }
</style>
