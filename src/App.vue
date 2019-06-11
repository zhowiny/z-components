<template>
  <div id="app">
    <img src="./assets/logo.png" @click="showModal = true">
    <div style="width: 300px; height:300px; position: relative;">
      <c-dialog fixed v-model="showModal" class="dialog">
        <ul v-for="(property, key) in ['', 'plain', 'round', 'disabled']" :key="key">
          <li v-for="(size, index) in ['default', 'medium', 'small', 'mini']" :key="index">
            <c-button
              v-for="(color, i) in colors"
              :type="color" :size="size" :key="i"
              :plain="property === 'plain'"
              :round="property === 'round'"
              :disabled="property === 'disabled'"
            >{{ size }}</c-button>
          </li>
        </ul>
      </c-dialog>
    </div>
  </div>
</template>

<script>
import cDialog from './components/c-dialog'
import cButton from './components/c-button'

export default {
  name: 'App',
  data () {
    return {
      showModal: false,
      colors: ['default', 'primary', 'success', 'warning', 'info', 'danger'],
    }
  },
  components: {
    cDialog,
    cButton,
  }
}
</script>

<style lang="scss">
  html, body, #app {
    min-width: $min-width;
  }
  .dialog {
    li {
      margin-top: 10px;
    }
  }
</style>
