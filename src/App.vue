<template>
  <The-Header></The-Header>
  <div class="layout">
    <The-Navbar></The-Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";

export default {
  components: {
    TheHeader,
    TheNavbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.layout {
  display: flex;
  flex-direction: row;
}

a{
  text-decoration: none;
  color: #000;
}
</style>
