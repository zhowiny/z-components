<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Index msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Index from './components/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    Index
  }
})
</script>

<style lang="scss">
// @import "@/css/reset";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
  margin-top: 60px;
}
</style>
