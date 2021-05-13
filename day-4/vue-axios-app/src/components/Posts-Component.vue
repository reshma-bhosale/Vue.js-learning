<template>
<div>Hello</div>
</template>

<script>
export default {
    name : "PostsComponent",
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            this.axios.get("http://localhost:3000/posts").then((res)=> {
                this.posts = res.data
                console.log(this.posts)
            })
        }
    }
}
</script>
