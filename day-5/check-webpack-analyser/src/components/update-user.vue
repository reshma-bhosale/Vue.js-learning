<template>
    <div class="container mt-5">
        <p>Enter ID to get user details </p>
        <input type="text" name="delete-user" id="delete-user" placeholder="Enter ID" v-model="id"/>
        <button class="btn btn-secondary ml-5" @click="getUserDetail">Search</button>
        <div class="row mt-5" v-if="user.length !== 0">
            <div class="col-md-6" >
                <p>Name: {{user.name}}</p>
                <p>Mobile No: {{user.mobile}}</p>
                <p>Email ID: {{user.email}}</p>
                <p>Password: {{user.password}}</p>
            </div>
            <div class="col-md-4">
                <input class="ml-3 mt-3" type="text" name="email" id="email" 
                placeholder="Enter Email" v-model="email" > 
                <input class="ml-3 mt-3" type="password" name="password" id="password" 
                placeholder="Enter Password" v-model="password" >
                <button class="btn btn-primary ml-5 mt-4" @click="changeDetails">Change details</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name : "UpdateUser",
    data() {
        return {
            id : '',
            user : {},
            email : '',
            password: ''
        }
    },
    created() {
        this.user.length = 0
    },
    methods: {
        getUserDetail() {
            this.axios.get('http://localhost:3000/users/' + this.id)
            .then((res) => {
                this.user = res.data
                console.log(this.user)
            })
            .catch((err) =>{
                console.log(err)
                this.$notify.danger(err)
                this.user = ''
                this.id = ''
            })
        },
        changeDetails() {
            this.axios.put('http://localhost:3000/users/' + this.id, {
                name : this.user.name,
                mobile : this.user.mobile,
                email : this.email,
                password : this.password
            })
            .then((res) => {
                this.user = res.data
                let msg = 'User ' + this.id + ' updated successfully'
                this.$notify.success(msg)
                console.log(this.user)
            })
            .catch((err) =>{
                console.log(err)
                this.$notify.danger(err)
                this.user = ''
            })
        }
    }
}
</script>