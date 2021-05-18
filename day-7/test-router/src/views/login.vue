<template>
    <div class="container mt-5 ">
        <h2>Sign In</h2>
        <div class="input">
        <input class="ml-4" type="text" name="email" id="emai" placeholder="Enter Email">
        <br/>
        <input class="ml-4 mt-3" type="password" name="password" id="password" 
        placeholder="Enter Password" >
        </div>
        <div class="mt-4 center">
            <button type="submit" class="btn btn-primary">
                <router-link to='/next'> 
                Submit
                </router-link>
                </button>
        </div>
    </div>
</template>

<script>
export default {
    name : "LoginComponent",
}
</script>

<style scoped>
h2 {
    text-align: center;
}
.input { 
    left : 41%;
    position: absolute;

}
a {
    color: black;
    text-decoration: none;
}
.center {
  margin: 0;
  position: absolute;
  left: 48%;
  top: 30%
}
</style>