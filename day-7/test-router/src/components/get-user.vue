<template>
  <div class="container mt-4"><b>Users : </b>
    <div class="mt-3">    
        <table border="1px solid">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            <tr v-for="user in users" :key="user">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.mobile}}</td>
                <td>{{user.email}}</td>
                <td>{{user.password}}</td>
            </tr>
        </table>
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
        });
    },
  },
};
</script>