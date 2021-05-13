<template>
  <div class="hello">
    <h1>All Posts</h1>
    <ul v-for="post in posts" :key="post.id">
      <li>
        <p>{{ post.id }}</p>
        <p>{{ post.title }}</p>
        <p>{{ post.author }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      posts: [],
      addNewPost: {
        id: 40,
        title: "New Post 40",
        author: "Reshma Bhosale",
      },
    };
  },
  mounted() {
    this.addPost()
    this.updatePosts()
    this.getAllPosts()
 
  },
  methods: {
    //get all posts
    getAllPosts() {
      axios
        .get("/getApis/posts")
        .then((res) => {
          this.posts = res.data;
          console.log(this.posts);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //Add new post
    addPost() {
      axios
        .post("/postApis/posts", this.addNewPost)
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
    },
    //update existing post's data
    updatePosts() {
      axios
        .put("/postApis/posts/10", {
          title: "updated title",
          author: "updated author",
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
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
