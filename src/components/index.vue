<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }},{{double.includes('1')}}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
import {defineComponent, ref, computed, watch} from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Hello'
    },
  },
  setup () {
    const count = ref<number>(0)
    const double = computed(() => (count.value * 2).toString())
    watch(double, (double, old) => console.log(double, old))
    return {
      double,
      count,
    }
  }
})
</script>
<style lang="scss">

</style>
