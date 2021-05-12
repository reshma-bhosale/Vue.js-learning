Vue.component("github-profile", {
    template: "#githubProfile",
    props : {
        username : {
            type : String,
            required : true
        }
    },
    data() {
        return {
            users : {}
        }
    },
    mounted() {
            axios.get(`https://api.github.com/users/${this.username}`).then(response => {
                this.users = response.data
            })
    }
})

new Vue({
    el: "#app",
    data: {
        users: ["hootlex", "akryum", "rahaug", "sdras"]
    }
})