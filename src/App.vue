<template>

  <Header></Header>
  <div class="layout">
    <Navbar></Navbar>
  <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/layout/Header.vue'
import Navbar from './components/layout/Navbar.vue'


export default {
  
  components: {
    Header,
    Navbar,
  }
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.layout{
  display: flex;
  flex-direction: row;
}

</style>