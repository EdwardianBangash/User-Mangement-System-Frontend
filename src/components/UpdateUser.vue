<template>
  <div class="update-user-wrapper">
    <div class="topbar">
      <h3>Update User</h3>
      <button class="btn">Add New User</button>
    </div>

    <form action="">
        <div class="form-group">
            <label for="name">FullName</label>
            <input type="text" class="form-control" v-model="fullname">
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" v-model="email">
        </div>

        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" v-model="address"  />
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
            // fullname: '',
            // email: this.user_email,
            // address: this.user_address,
            email:'',
            address:'',
        }
    },
    created(){
        console.log(this.$props);
    }

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
}

.btn:hover {
  background-color: rgb(36, 114, 178);
  color: #fff;
}

h3{
    font-size: 21px;
}

form {
    width: 400px;
}

label {
    font-size: 18px;
    font-weight:500;
}

input {
    display: block;
    padding: 10px;
    width: 100%;
    margin: 10px;
    font-size: 16px;
}
</style>
