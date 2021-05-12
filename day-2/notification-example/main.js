Vue.component("notification-component", {
    template: "#notificationComponent",
    props: {
        type : {
            type:  String
        },
        header : {
            type : String
        }
    },
    data() {
        return {
            hidden : false
        }
    },
    methods : {
        hide() {
            this.hidden = !this.hidden
        }
    }
})

new Vue({
    el: "#app"
})