<template>
  <div class="update-user-wrapper">
    <div class="topbar">
      <h3>Update User</h3>
      <router-link to="/new" class="btn">Add New User</router-link>
    </div>

    <form @submit.prevent="updateUser">
      <div class="form-group">
        <label for="name">FullName</label>
        <input type="text" class="form-control" v-model="fullname" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="email" />
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" v-model="address" />
      </div>

      <button type="submit" class="btn">Update User</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["name", "user_email", "user_address"],
  data() {
    return {
      fullname: this.$props.name,
      email: this.$props.user_email,
      address: this.$props.user_address,
    };
  },

  methods: {
    updateUser() {
      axios
        .post("http://127.0.0.1:8000/updateUser", {
          fullname: this.fullname,
          email: this.email,
          address: this.address,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.update-user-wrapper {
  padding: 50px;
  width: 100%;
}

.topbar {
  display: flex;
  justify-content: space-between;
}

.btn {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  z-index: 111;
  background-color: rgb(0, 137, 249);
  transition: 0.2s ease-in all;
  margin: 10px;
  font-size: 18px;
}

.btn:hover {
  background-color: rgb(36, 114, 178);
  color: #fff;
}

h3 {
  font-size: 21px;
}

form {
  width: 400px;
}

label {
  font-size: 18px;
  font-weight: 500;
}

input {
  display: block;
  padding: 10px;
  width: 100%;
  margin: 10px;
  font-size: 16px;
}
</style>
