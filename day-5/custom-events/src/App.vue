<template>
  <div id="app">
     <h1>Hello {{name}}</h1>
    <CustomEvent @name-changed="updateName"/>
  </div>
</template>

<script>
import CustomEvent from './components/custome-event.vue'

export default {
  name: 'App',
  components: {
    CustomEvent
  },
  data() {
    return {
      name: 'Reshma'
    }
  },
  methods: {
    updateName(name) {
      this.name = name
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
