<template>
    <div class="container mt-5">
        <input type="text" name="delete-user" id="delete-user" placeholder="Enter ID" v-model="id"/>
        <button class="btn btn-danger ml-5" @click="deleteUser">Delete</button>
    </div>
</template>

<script>
export default {
    name  : "DeleteUser",
    data() {
        return {
            id : ''
        }
    },
    methods: {
        deleteUser() {
            this.axios.delete('http://localhost:3000/users/' + this.id)
            .then((res) => {
                this.id = ''
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                this.id = ''
            })
        }
    },
}
</script>