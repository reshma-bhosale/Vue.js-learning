<template>
  <div class="container mt-4"><b>Users : </b>
    <div class="mt-3">    
        <ve-table :columns="columns" :table-data="users" />
    </div>
  </div>
</template>

<script>

export default {
  name: "GetUsers",
  data() {
    return {
      users: [],
      columns: [ 
          { field: "id", key: "a", title: "Id", align: "left" },
          { field: "name", key: "b", title: "Name", align: "left" },
          { field: "mobile", key: "c", title: "Mobile", align: "left" },
          { field: "email", key: "d", title: "Email", align: "left" },
          { field: "password", key: "e", title: "Password", align: "left" },
        ]
    };
  },
  created () {
      this.getData()
  },
  methods: {
    getData() {
      this.axios
        .get("http://localhost:3000/users")
        .then((res) => {
            this.users = res.data
        })
        .catch((err) => {
          console.log(err)
          this.$notify.danger(err)
        });

    },
  },
};
</script>