<template>
  <div class="hello">
  
   <br/><br/>
   <input type="text" name="nm" id="updateName" v-model="updateName" 
   placeholder="Enter Name" @keyup.enter = "changeName">
   <br/> <br/>
   <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
export default {
  name: 'CustomEvent',
  props: ["name"],
  data() {
    return {
      updateName : ''
    }
  },
  methods: {
    changeName() {
      this.$emit('name-changed', this.updateName)
      this.updateName = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
