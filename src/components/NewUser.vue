<template>
  <div class="add-user-wrapper">
    <div class="topbar">
      <h3>Add New User</h3>
    </div>

    <form @submit.prevent="addUser">
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

      <button type="submit" class="btn">Add User</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      address: "",
    };
  },

  methods: {
    addUser(){
        console.log('to be done...');
    }
  }
};
</script>

<style scoped>
.add-user-wrapper {
  padding: 50px;
  width: 100%;
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
  margin-top: 20px;
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
