<template>
  <div class="home">
    <div class="card">
      <div class="card-title">Users</div>
      <div class="card-footer">{{totalUser}}</div>
    </div>

    <!-- <div class="card">
      <div class="card-title">Users</div>
      <div class="card-footer">20</div>
    </div> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      totalUser: null
    }
  },
  created(){
    this.totalUsers()
  },
  methods: {
    totalUsers(){
      this.$axios
        .get("http://127.0.0.1:8000/api/countUser")
        .then((response) => {
          this.totalUser = response.data.totalUser
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  }
};
</script>

<style scoped>
.home {
  padding: 50px;
  display: flex;
  flex-direction: row;
}

.home .card {
  margin: 10px;
}

.card {
  height: 250px;
  width: 300px;
  border-radius: 10px;
  background-color: #19986e;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.card-title {
  padding: 20px;
  font-size: 35px;
}

.card-footer {
  padding-top: 10px;
  font-size: 30px;
}
</style>
