<template>
  <div id="app">
    <HandleData></HandleData>
  </div>
</template>

<script>
import HandleData from "./components/handle-data.vue"

export default {
  name: 'App',
  components: {
    HandleData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
