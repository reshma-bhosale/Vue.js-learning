<template>
    <div class="container">
        <button class="btn btn-primary" @click="setStatus(0); ">
            User details
        </button>
        <button class="btn btn-primary ml-5" @click="setStatus(1)">
            Add New User
        </button>
        <button class="btn btn-primary ml-5" @click="setStatus(2)">
           Update User detail
        </button>
        <button class="btn btn-primary ml-5" @click="setStatus(3)">
           Delete User
        </button>
        <GetUsers v-if="isSelected === 0"></GetUsers>
        <AddUser v-if="isSelected === 1"></AddUser>
        <UpdateUser v-if="isSelected === 2"></UpdateUser>
        <DeleteUser v-if="isSelected === 3"></DeleteUser>
    </div>
</template>


<script>
import GetUsers from "./get-users.vue"
import AddUser from "./add-user.vue"
import UpdateUser from "./update-user.vue"
import DeleteUser from "./delete-user"
export default {
    name: "HandleData",
    components : {
        AddUser,
        DeleteUser,
        GetUsers,
        UpdateUser
    },
    data() {
        return {
            isSelected: 0,
        }
    },
    methods: {
        setStatus(code) {
            this.isSelected = code
        }
    }
}
</script>