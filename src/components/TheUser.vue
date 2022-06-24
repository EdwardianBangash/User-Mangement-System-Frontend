<template>
  <div class="users">
    <div class="users-topbar">
      <h3>Users List</h3>
      <router-link class="btn-add" to="/new">Add New User</router-link>
    </div>
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <th>#</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
      <tbody>
        <tr v-for="item in usersList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.fullname }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>
            <div class="btn-group">
              <router-link
                :to="{
                  name: 'updateUser',
                  params: {
                    id: item.id,
                    name: item.fullname,
                    user_email: item.email,
                    user_address: item.address,
                  },
                }"
                class="btn"
                >Update</router-link
              >
              <button class="btn" @click="deleteUser(item.id)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersList: [],
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    deleteUser(userId) {
      this.$axios
        .post("http://127.0.0.1:8000/api/deleteUser", { id: userId })
        .then((response) => {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });
    },
    fetchUser() {
      if (this.usersList.length === 0) {
        this.$axios
          .get("http://127.0.0.1:8000/api/allUser")
          .then((response) => {
            this.usersList = response.data.data;
            console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
      }
    },
  },
};
</script>

<style scoped>
.users {
  padding: 50px;
  flex-grow: 2;
}

.users-topbar {
  display: flex;
  justify-content: space-between;
}

h3 {
  padding-top: 5px;
}

table {
  width: 100%;
  color: #fff;
}

table th {
  background-color: #19986e;
  font-size: 16px;
  padding: 20px;
}

tbody tr {
  background-color: rgba(249, 249, 249, 0.787);
  color: #000;
  cursor: pointer;
  text-align: center;
}

tbody td {
  font-size: 14px;
  padding: 10px;
}

tr:nth-child(odd):hover {
  background-color: rgba(187, 187, 187, 0.989);
}

.btn {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  z-index: 111;
}

.btn:nth-child(1) {
  background-color: rgb(0, 137, 249);
  transition: 0.2s ease-in all;
}

.btn:nth-child(1):hover {
  background-color: rgb(36, 114, 178);
  color: #fff;
}

.btn:nth-child(2) {
  background-color: rgb(192, 34, 34);
  transition: 0.2s ease-in all;
}

.btn:nth-child(2):hover {
  background-color: rgb(148, 29, 29);
  color: #fff;
}

.btn-add {
  background-color: rgb(0, 137, 249);
  color: #fff;
  margin: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  z-index: 111;
}

.btn-add:hover {
  background-color: rgb(36, 114, 178);
  color: #fff;
}
</style>
