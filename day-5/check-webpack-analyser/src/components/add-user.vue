<template>
    <div class="container mt-5 ">
        <div class="input">
        <input class="ml-3" type="text" name="name" id="name" placeholder="Enter Name" v-model= "addNewUser.name">
        <input class="ml-3" type="number" name="mobile" id="mobile" placeholder="Enter Mobile No"
        v-model= "addNewUser.mobile" ><br/>
        <input class="ml-3 mt-3" type="text" name="email" id="email" placeholder="Enter Email" 
                v-model= "addNewUser.email"> 
        <input class="ml-3 mt-3" type="password" name="password" id="password" 
        placeholder="Enter Password" v-model= "addNewUser.password">
        </div>
        <div class="mt-4 center">
            <button type="submit" @click="addUser" class="btn btn-primary">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    name : "AddUser",
    data() {
        return {
            addNewUser  : {
                id : '',
                name : '',
                mobile : '',
                email : '',
                password : ''
            }  
        }
    },
    methods: {
        addUser() {
            this.addNewUser.id=6
            this.axios.post('http://localhost:3000/users', this.addNewUser)
            .then((res)=> {
                console.log(res)
                this.$notify.success('User added successfully')

            })
            .catch((err)=> {
                console.log(err)
                this.$notify.danger(err)
            })
            this.addNewUser.id = ''
            this.addNewUser.name = ''
            this.addNewUser.mobile = ''
            this.addNewUser.email = ''
            this.addNewUser.password = ''
        }
    }
}
</script>

<style scoped>

.input { 
    left : 30%
}
.center {
  margin: 0;
  position: absolute;
  left: 23%;
}
</style>