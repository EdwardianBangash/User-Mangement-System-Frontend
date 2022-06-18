<template>
    <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/user">Users</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.navbar {
    height: 100vh;
    background-color: #32b071;
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

a{
    display: block;
    padding: 20px;
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    transition: .2s ease-in all;
}


a:hover{
   background-color: #12603a;
}

</style>