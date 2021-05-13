<template>
<div>Reshma</div>
  <!-- <div class="bg-light p-5 m-5">
    <h1>Shopping List</h1>
    <input
      class="mt-4"
      type="text"
      name="item"
      id="item"
      placeholder="Add new item"
      v-model="newItem"
      @keyUp.enter="addItem(newItem)"
    />
    <button class="btn btn-primary ml-5" @click="addItem(newItem)">
      Add Item
    </button>
    <div class="mt-4">
      <p v-if="items.length === 0">No items found</p>
      <ul class="p-0 m-0 mt-2" v-for="item in items" :key="item">
        <li>
          <a :href="item" target="_blank">{{ item }}</a>
        </li>
      </ul>
    </div> 
  </div>-->
</template>

<script>
export default {
  name: "ShoppingCart",
  // props: {
  //   msg: String
  // }
  data() {
    return {
      items: [],
      newItem: "",
    };
  },
  methods: {
    addItem(newItem) {
      this.items.push(newItem);
      this.newItem = "";
    },
  },
};
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
