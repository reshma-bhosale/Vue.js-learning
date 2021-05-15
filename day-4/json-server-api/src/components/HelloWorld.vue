<template>
  <div class="hello">
    <h1>All Posts</h1>
    <ul v-for="post in posts" :key="post.id">
      <li>
        <p>Id: {{ post.id }}</p>
        <p>Title: {{ post.title }}</p>
        <p>Author: {{ post.author }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      posts: [],
      addNewPost: {
        id: 57,
        title: "New Post 57",
        author: "Reshma Bhosale",
      },
    };
  },
  mounted() {
    this.addPost()
    this.updatePost()
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
    updatePost() {
      axios
        .put("/postApis/posts/1", {
          title: "updated new  title",
          author: "updated new author",
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
