<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PostsComponent></PostsComponent>
  </div>
</template>

<script>
import PostsComponent from './components/Posts-Component.vue'

export default {
  name: 'App',
  components: {
    PostsComponent
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
