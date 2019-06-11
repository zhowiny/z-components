<template>
  <i :class="['iconfont', name]" @click="e => $emit('click', e)"></i>
</template>

<script>
export default {
  name: 'c-icon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
</style>
