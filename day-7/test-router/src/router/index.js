import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../views/login.vue'
import HandleData from '../views/handle-data.vue'

Vue.use(VueRouter)

const routes = [
    {
        path : "/",
        name: "Login",
        component: LoginComponent
    },
    {
        path : "/next",
        name: "HandleData",
        component: HandleData,
        alias : '/sample'
    }
] 

const router = new VueRouter({
    routes
})

export default router 